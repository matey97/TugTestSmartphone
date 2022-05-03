import { StartTugTestRequestTask } from "~/core/tasks/tug/start-tug-test-request";
import { RecognitionTask } from "~/core/tasks/tug/recognition-task";
import { RecognitionResultEvaluationTask } from "~/core/tasks/tug/recognition-result-evaluation";
import { EndTugTestTask } from "~/core/tasks/tug/end-tug-test";
import { SimpleTask } from "nativescript-task-dispatcher/tasks";
import { resultsStore } from "~/core/store/results-store";
import { TugResult } from "~/core/tug-test/result";

export const tugTestTasks = [
  new StartTugTestRequestTask(),
  new RecognitionTask(),
  new RecognitionResultEvaluationTask(),
  new EndTugTestTask(),
  new SimpleTask("storeTugResult", async ({ evt}) => {
    resultsStore.store(evt.data as TugResult);
  }),
];
