import { DataSource } from "~/core/data-source";
import { AbstractRecognizer } from "~/core/recognition/recognizer/abstract-recognizer";
import { CNNRecognizer } from "~/core/recognition/recognizer/cnn/cnn-recognizer";

const recognizers = new Map<DataSource, AbstractRecognizer>();

export function getCNNRecognizer(dataSource: DataSource): AbstractRecognizer {
  if (!recognizers.get(dataSource)) {
    recognizers.set(dataSource, new CNNRecognizer(dataSource));
  }
  return recognizers.get(dataSource);
}
