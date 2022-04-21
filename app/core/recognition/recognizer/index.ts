import { SensingDataSource } from "~/core/mode";
import { Recognizer } from "~/core/recognition/recognizer/recognizer";
export { Recognizer };

const recognizers = new Map<SensingDataSource, Recognizer>();

export function getRecognizer(dataSource: SensingDataSource): Recognizer {
  if (!recognizers.get(dataSource)) {
    recognizers.set(dataSource, new Recognizer(dataSource));
  }
  return recognizers.get(dataSource);
}
