import { Features, TimedFeatures } from "~/feature-extraction";
import { ModelDownloader } from "~/ml-model/downloader";
import { Model } from "~/ml-model/model";
import {InferenceProbability, RecognitionResult} from "~/ml-model/recognition";

import ByteBuffer = java.nio.ByteBuffer;

export class Recognizer {

  private model: Model

  constructor(
    private modelName: string = "tug-test-full"
  ) {
    this.initModel()
      .then(() => console.log("Model initialized!"));
  }

  private async initModel() {
    const modelDownloader = new ModelDownloader(this.modelName);
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

let _instance;
export function getRecognizer() {
  if (!_instance)
    _instance = new Recognizer();
  return _instance;
}
