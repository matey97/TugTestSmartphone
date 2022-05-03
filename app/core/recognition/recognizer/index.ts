import { getModelType, ModelType, SensingDataSource } from "~/core/mode";
import { AbstractRecognizer} from "~/core/recognition/recognizer/abstract-recognizer";
import { getMLPRecognizer } from "~/core/recognition/recognizer/mlp";
import { getCNNRecognizer } from "~/core/recognition/recognizer/cnn";

export function getRecognizer(dataSource: SensingDataSource): AbstractRecognizer {
  const modelType = getModelType(dataSource);

  return modelType === ModelType.MLP
    ? getMLPRecognizer(dataSource)
    : getCNNRecognizer(dataSource);
}
