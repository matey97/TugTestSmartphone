import { DataSource } from "~/core/data-source";
import { AbstractRecognizer } from "~/core/recognition/recognizer/abstract-recognizer";
import { MLPRecognizer } from "~/core/recognition/recognizer/mlp/mlp-recognizer";

const recognizers = new Map<DataSource, AbstractRecognizer>();

export function getMLPRecognizer(dataSource: DataSource): AbstractRecognizer {
  if (!recognizers.get(dataSource)) {
    recognizers.set(dataSource, new MLPRecognizer(dataSource));
  }
  return recognizers.get(dataSource);
}
