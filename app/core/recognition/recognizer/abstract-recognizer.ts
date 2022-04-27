import { ModelDownloader } from "~/core/recognition/downloader";
import { Model } from "~/core/recognition/model";
import { InferenceProbability, RecognitionResult } from "~/core/recognition";
import { ModelType, SensingDataSource } from "~/core/mode";
import { Samples } from "~/core/recognition/recognizer/samples";
import ByteBuffer = java.nio.ByteBuffer;

export abstract class AbstractRecognizer {

  private model: Model;

  protected constructor(
    private dataSource: SensingDataSource,
    private modelType: ModelType
  ) {
    this.initModel()
      .then(() => console.log(`${this.modelType} model for ${this.dataSource} initialized!`))
      .catch((e) => console.log(`${this.modelType} model for ${this.dataSource} was not initialized! Reason: ${JSON.stringify(e)}`));
  }

  protected createBuffer(size: number, dataTypeSize: any): ByteBuffer {
    const bufferSize: number = this.getSizeInBytes(size, dataTypeSize);

    return ByteBuffer.allocateDirect(bufferSize).order(java.nio.ByteOrder.nativeOrder());
  }

  private async initModel() {
    const modelDownloader = new ModelDownloader(this.dataSource, this.modelType);
    const modelFilePath = await modelDownloader.getModelFilePath()
    this.model = new Model(modelFilePath)
  }

  async recognize(samples: Samples): Promise<RecognitionResult> {
    if (!this.isReady())
      await this.initModel();

    const inputBuffer = this.createInputBuffer(samples);
    const outputBuffer = this.createOutputBuffer();

    this.model.interpreter.run(inputBuffer, outputBuffer);

    const mostProbable = this.getMostProbable(outputBuffer);

    return {
      inference: mostProbable,
      timestampStart: samples.timestampStart,
      timestampEnd: samples.timestampEnd
    }
  }

  private isReady(): boolean {
    return !!this.model;
  }

  private createOutputBuffer(): ByteBuffer {
    return this.createBuffer(this.model.labels.length, java.lang.Float.SIZE);
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

  protected abstract createInputBuffer(samples: Samples): ByteBuffer;
}
