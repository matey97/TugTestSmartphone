import Interpreter = org.tensorflow.lite.Interpreter;
import MetadataExtractor = org.tensorflow.lite.support.metadata.MetadataExtractor;
type Labels = string[];

const DEFAULT_LABELS_FILE = "test_labels.txt";

export class Model {

  private modelFile: java.io.File;
  private _interpreter: Interpreter;
  private _labels: Labels;

  constructor(modelFilePath: string) {
    this.modelFile = new java.io.File(modelFilePath);
  }

  get interpreter(): Interpreter {
    if (!this._interpreter)
      this._interpreter = this.loadInterpreter();
    return this._interpreter;
  }

  get labels(): Labels {
    if (!this._labels) {
      this._labels = this.loadLabels();
    }
    return this._labels;
  }

  private loadInterpreter(): Interpreter {
    return new Interpreter(this.modelFile);
  }

  private loadLabels(): Labels {
    const byteBuffer = this.createModelByteBuffer();
    return this.extractLabels(byteBuffer);
  }

  private createModelByteBuffer(): java.nio.ByteBuffer {
    const inputStream = new java.io.FileInputStream(this.modelFile);
    const channel = inputStream.getChannel();
    const buf = java.nio.ByteBuffer.allocate(channel.size());
    channel.read(buf);
    buf.rewind();

    return buf;
  }

  private extractLabels(byteBuffer): Labels {
    const metadataExtractor = new MetadataExtractor(byteBuffer);
    const labelInputStream = metadataExtractor.getAssociatedFile(DEFAULT_LABELS_FILE);

    const reader = new java.io.BufferedReader(new java.io.InputStreamReader(labelInputStream));

    let next: string;
    const labels: Labels = []
    while((next = reader.readLine()) !== null) {
      labels.push(next);
    }

    reader.close();

    return labels;
  }
}
