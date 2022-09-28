import { Model } from "~/core/recognition/model";
import { DataSource } from "~/core/data-source";
import { InferenceProbability, RecognitionResult } from "~/core/recognition";
import { getModelManager, ModelManager } from "~/core/recognition/model/model-manager";
import { Samples } from "~/core/recognition/recognizer/samples";
import { timedExecution } from "~/core/utils/time";
import ByteBuffer = java.nio.ByteBuffer;

export abstract class AbstractRecognizer {

  private model: Model;

  protected constructor(
    private dataSource: DataSource,
    private modelManager: ModelManager = getModelManager()
  ) {
    this.initModel();
    console.log(`${this.model.modelInfo.id} model loaded!`);
  }

  protected createBuffer(size: number, dataTypeSize: any): ByteBuffer {
    const bufferSize: number = this.getSizeInBytes(size, dataTypeSize);

    return ByteBuffer.allocateDirect(bufferSize).order(java.nio.ByteOrder.nativeOrder());
  }

  private initModel() {
    this.model = this.modelManager.getModelEnabledForDataSource(this.dataSource);
  }

  async recognize(samples: Samples): Promise<RecognitionResult> {
    const { result, executionTime } = await timedExecution(() => {
      if (!this.isReady())
        this.initModel();

      const inputBuffer = this.createInputBuffer(samples);
      const outputBuffer = this.createOutputBuffer();

      this.model.interpreter.run(inputBuffer, outputBuffer);

      const mostProbable = this.getMostProbable(outputBuffer);

      return {
        inference: mostProbable,
        timestampStart: samples.timestampStart,
        timestampEnd: samples.timestampEnd
      }
    });

    return {
      ...result,
      recognitionTime: executionTime
    };
  }

  unloadModel(): void {
    this.model.closeInterpreter();
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
