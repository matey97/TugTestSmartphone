import { SimpleTask, Task } from "nativescript-task-dispatcher/tasks";
import { RecordsReceiverTask } from "~/tasks/records-receiver";
import { FeatureExtractionTask } from "~/tasks/feature-extraction";
import { getRecordsReceiver } from "~/receiver/records-receiver";
import { RecognizerTask } from "~/tasks/recognizer";
import { RecognitionResultEvaluationTask } from "~/tasks/test-evaluation";
import { StopTestCommandEmitterTask } from "~/tasks/stop-test-command-emitter";
import { StartTugTestRequestTask } from "~/tasks/start-tug-test-request";
import { EndTugTestTask } from "~/tasks/end-tug-test";
import { resultsStore } from "~/store/results-store";
import { TugResult } from "~/tug-test/result";
import { StartCollectionTask } from "~/tasks/start-collection-task";
import { ForwardRecordsTask } from "~/tasks/forward-records-task";

export const appTasks: Array<Task> = [
  new SimpleTask("evtLogger", async({ evt}) => {
    console.log(`[INFO LOGGER]: evt.name --> ${JSON.stringify(evt.name)}, evt.data --> ${JSON.stringify(evt.data)}`);
  }),
  new StartTugTestRequestTask(),
  new RecordsReceiverTask(),
  new FeatureExtractionTask(),
  new RecognizerTask(),
  new RecognitionResultEvaluationTask(),
  new EndTugTestTask(),
  new StopTestCommandEmitterTask(),
  // Clear remaining samples once the test has finished
  new SimpleTask("storeTugResult", async ({ evt}) => {
    resultsStore.store(evt.data as TugResult);
  }),
  new SimpleTask("recordsReceiverClearStateTask", async () => {
    getRecordsReceiver().clear();
  }),

  new StartCollectionTask(),
  new ForwardRecordsTask(),
];
