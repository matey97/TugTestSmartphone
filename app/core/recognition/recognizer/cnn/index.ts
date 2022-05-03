import { SensingDataSource } from "~/core/mode";
import { AbstractRecognizer } from "~/core/recognition/recognizer/abstract-recognizer";
import { CNNRecognizer } from "~/core/recognition/recognizer/cnn/cnn-recognizer";

const recognizers = new Map<SensingDataSource, AbstractRecognizer>();

export function getCNNRecognizer(dataSource: SensingDataSource): AbstractRecognizer {
  if (!recognizers.get(dataSource)) {
    recognizers.set(dataSource, new CNNRecognizer(dataSource));
  }
  return recognizers.get(dataSource);
}
