import { SimpleTask, Task } from "nativescript-task-dispatcher/tasks";
import { RecordsReceiverTask } from "~/core/tasks/records-receiver";
import { FeatureExtractionTask } from "~/core/tasks/feature-extraction";
import { getRecordsReceiver } from "~/core/receiver/records-receiver";
import { RecognitionTask } from "~/core/tasks/recognition-task";
import { RecognitionResultEvaluationTask } from "~/core/tasks/test-evaluation";
import { ExecutionFinishedEmitter } from "~/core/tasks/execution-finished-emitter";
import { StartTugTestRequestTask } from "~/core/tasks/start-tug-test-request";
import { EndTugTestTask } from "~/core/tasks/end-tug-test";
import { resultsStore } from "~/core/store/results-store";
import { TugResult } from "~/core/tug-test/result";
import { StartCollectionTask } from "~/core/tasks/start-collection-task";
import { ForwardRecordsTask } from "~/core/tasks/forward-records-task";
import { PrepareSimpleResultTask } from "~/core/tasks/prepare-simple-result-task";
import { StartSensorFromDeviceTask } from "~/core/tasks/start-sensor-from-device-task";
import { StopSensorFromDeviceTask } from "~/core/tasks/stop-sensor-from-device-task";
import { StartLocalSensorServiceTask } from "~/core/tasks/start-local-sensor-service-task";
import { StopLocalSensorServiceTask } from "~/core/tasks/stop-local-sensor-service-task";
import { getRecognizer } from "~/core/recognition/recognizer";
import { SensingDataSource } from "~/core/mode";
import { ForwardFeaturesToRecognitionTask } from "~/core/tasks/forward-features-to-recognition-task";

export const appTasks: Array<Task> = [
  new SimpleTask("evtLogger", async({ evt}) => {
    console.log(`[INFO LOGGER]: evt.name --> ${JSON.stringify(evt.name)}, evt.data --> ${JSON.stringify(evt.data)}`);
  }),
  new StartTugTestRequestTask(),
  new StartSensorFromDeviceTask(),
  new StopSensorFromDeviceTask(),
  new StartLocalSensorServiceTask(),
  new StopLocalSensorServiceTask(),
  new RecordsReceiverTask(),
  new FeatureExtractionTask(),
  new ForwardFeaturesToRecognitionTask(),
  new RecognitionTask(
    "Local",
    getRecognizer(SensingDataSource.LOCAL_DEVICE)
  ),
  new RecognitionTask(
    "Paired",
    getRecognizer(SensingDataSource.PAIRED_DEVICE)
  ),
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
