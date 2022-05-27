import { getModelType } from "~/core/settings";
import { AbstractRecognizer} from "~/core/recognition/recognizer/abstract-recognizer";
import { getMLPRecognizer } from "~/core/recognition/recognizer/mlp";
import { getCNNRecognizer } from "~/core/recognition/recognizer/cnn";
import { DataSource } from "~/core/data-source";
import { ModelType } from "~/core/recognition/model/model-type";

export function getRecognizer(dataSource: DataSource): AbstractRecognizer {
  const modelType = getModelType(dataSource);

  return modelType === ModelType.MLP
    ? getMLPRecognizer(dataSource)
    : getCNNRecognizer(dataSource);
}
