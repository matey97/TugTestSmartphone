import { PredictionResultEvaluationTask } from "~/core/tasks/tug/prediction-result-evaluation";
import { EndTugTestTask } from "~/core/tasks/tug/end-tug-test";
import { PrepareAcquiredDataForClassificationTask } from "~/core/tasks/tug/prepare-acquired-data";

export const tugTestTasks = [
  new PrepareAcquiredDataForClassificationTask(),
  new PredictionResultEvaluationTask(),
  new EndTugTestTask(),
];
