import { AbstractRecognizer } from "~/core/recognition/recognizer/abstract-recognizer";
import { Samples } from "~/core/recognition/recognizer/samples";
import { DataSource } from "~/core/data-source";
import ByteBuffer = java.nio.ByteBuffer;

const INPUT_CHANNELS = 6;

export class CNNRecognizer extends AbstractRecognizer {

  constructor(dataSource: DataSource) {
    super(dataSource);
  }

  protected createInputBuffer(samples: Samples): java.nio.ByteBuffer {
    const inputBuffer: ByteBuffer = this.createBuffer(samples.accX.length * INPUT_CHANNELS, java.lang.Float.SIZE);

    this.addSamplesToBuffer(samples.accX, inputBuffer);
    this.addSamplesToBuffer(samples.accY, inputBuffer);
    this.addSamplesToBuffer(samples.accZ, inputBuffer);
    this.addSamplesToBuffer(samples.gyroX, inputBuffer);
    this.addSamplesToBuffer(samples.gyroY, inputBuffer);
    this.addSamplesToBuffer(samples.gyroZ, inputBuffer);

    return inputBuffer;
  }

  private addSamplesToBuffer(samples: number[], buffer: ByteBuffer) {
    for (let sample of samples) {
      buffer.putFloat(sample);
    }
  }
}
