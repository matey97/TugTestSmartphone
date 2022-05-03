import { SensingDataSource } from "~/core/mode";
import { AbstractRecognizer } from "~/core/recognition/recognizer/abstract-recognizer";
import { MLPRecognizer } from "~/core/recognition/recognizer/mlp/mlp-recognizer";

const recognizers = new Map<SensingDataSource, AbstractRecognizer>();

export function getMLPRecognizer(dataSource: SensingDataSource): AbstractRecognizer {
  if (!recognizers.get(dataSource)) {
    recognizers.set(dataSource, new MLPRecognizer(dataSource));
  }
  return recognizers.get(dataSource);
}
