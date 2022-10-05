import { PredictionResultEvaluationTask } from "~/core/tasks/tug/prediction-result-evaluation";
import { EndTugTestTask } from "~/core/tasks/tug/end-tug-test";
import { SimpleTask } from "nativescript-task-dispatcher/tasks";
import { resultsStore } from "~/core/store/results-store";
import { TugResult } from "~/core/tug-test/result";
import { PrepareAcquiredDataForClassificationTask } from "~/core/tasks/tug/prepare-acquired-data";

export const tugTestTasks = [
  new PrepareAcquiredDataForClassificationTask(),
  new PredictionResultEvaluationTask(),
  new EndTugTestTask(),
  new SimpleTask("storeTugResult", async ({ evt}) => {
    resultsStore.store(evt.data as TugResult);
  })
];
