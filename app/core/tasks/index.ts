import { SimpleTask, Task } from "nativescript-task-dispatcher/tasks";
import { RecordsReceiverTask } from "~/core/tasks/records-receiver";
import { FeatureExtractionTask } from "~/core/tasks/feature-extraction";
import { getRecordsReceiver } from "~/core/receiver/records-receiver";
import { RecognizerTask } from "~/core/tasks/recognizer";
import { RecognitionResultEvaluationTask } from "~/core/tasks/test-evaluation";
import { ExecutionFinishedEmitter } from "~/core/tasks/execution-finished-emitter";
import { StartTugTestRequestTask } from "~/core/tasks/start-tug-test-request";
import { EndTugTestTask } from "~/core/tasks/end-tug-test";
import { resultsStore } from "~/core/store/results-store";
import { TugResult } from "~/core/tug-test/result";
import { StartCollectionTask } from "~/core/tasks/start-collection-task";
import { ForwardRecordsTask } from "~/core/tasks/forward-records-task";
import { PrepareSimpleResultTask } from "~/core/tasks/prepare-simple-result-task";

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
  new ExecutionFinishedEmitter(),
  new PrepareSimpleResultTask(),
  new SimpleTask("storeTugResult", async ({ evt}) => {
    resultsStore.store(evt.data as TugResult);
  }),
  new SimpleTask("recordsReceiverClearStateTask", async () => {
    getRecordsReceiver().clear();
  }),

  new StartCollectionTask(),
  new ForwardRecordsTask(),
];
