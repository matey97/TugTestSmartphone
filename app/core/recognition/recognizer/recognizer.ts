import { Features, TimedFeatures } from "~/core/feature-extraction";
import { ModelDownloader } from "~/core/recognition/downloader";
import { Model } from "~/core/recognition/model";
import { InferenceProbability, RecognitionResult } from "~/core/recognition";
import { SensingDataSource } from "~/core/mode";
import ByteBuffer = java.nio.ByteBuffer;

export class Recognizer {

  private model: Model;

  constructor(
    private dataSource: SensingDataSource
  ) {
    this.initModel()
      .then(() => console.log(`Model for ${this.dataSource} initialized!`))
      .catch((e) => console.log(`Model for ${this.dataSource} was not initialized! Reason: ${JSON.stringify(e)}`));
  }

  private async initModel() {
    const modelDownloader = new ModelDownloader(this.dataSource);
    const modelFilePath = await modelDownloader.getModelFilePath()
    this.model = new Model(modelFilePath)
  }

  async recognize(timedFeatures: TimedFeatures): Promise<RecognitionResult> {
    if (!this.isReady())
      await this.initModel();

    const features = timedFeatures.features;

    const inputBuffer = this.createInputBuffer(features);
    const outputBuffer = this.createOutputBuffer();

    this.model.interpreter.run(inputBuffer, outputBuffer);

    const mostProbable = this.getMostProbable(outputBuffer);

    return {
      inference: mostProbable,
      timestampStart: timedFeatures.timestampStart,
      timestampEnd: timedFeatures.timestampEnd
    }
  }

  private isReady(): boolean {
    return !!this.model;
  }

  private createInputBuffer(features: Features): ByteBuffer {
    const input: ByteBuffer = this.createBuffer(features.length, java.lang.Float.SIZE);

    for (let feature of features) {
      input.putFloat(feature);
    }

    return input;
  }

  private createOutputBuffer(): ByteBuffer {
    return this.createBuffer(this.model.labels.length, java.lang.Float.SIZE);
  }

  private createBuffer(size: number, dataTypeSize: any): ByteBuffer {
    const bufferSize: number = this.getSizeInBytes(size, dataTypeSize);

    return ByteBuffer.allocateDirect(bufferSize).order(java.nio.ByteOrder.nativeOrder());
  }

  private getSizeInBytes(size: number, dataTypeSize: any): number {
    return size * dataTypeSize / java.lang.Byte.SIZE;
  }

  private getMostProbable(outputBuffer: ByteBuffer): InferenceProbability {
    outputBuffer.rewind();
    const resultsBuffer: java.nio.FloatBuffer = outputBuffer.asFloatBuffer();

    const recognitionProbas: InferenceProbability[] = [];
    for (let i = 0; i < resultsBuffer.capacity(); i++) {
      recognitionProbas.push({
        class: this.model.labels[i],
        probability: resultsBuffer.get(i)
      });
    }

    recognitionProbas.sort((a, b) => b.probability - a.probability);

    return recognitionProbas[0];
  }
}
