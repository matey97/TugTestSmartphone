import { PredictionResultEvaluationTask } from "~/core/tasks/tug/prediction-result-evaluation";
import { PrepareAcquiredDataForClassificationTask } from "~/core/tasks/tug/prepare-acquired-data";
import { EndTugTestTask } from "~/core/tasks/tug/end-tug-test";
import { ActivityClassificationTask } from "~/core/tasks/tug/activity-classification-task";

export const tugTestTasks = [
  new ActivityClassificationTask(true),
  new PrepareAcquiredDataForClassificationTask(),
  new PredictionResultEvaluationTask(),
  new EndTugTestTask(),
];
