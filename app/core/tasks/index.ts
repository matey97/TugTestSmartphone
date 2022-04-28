import { SimpleTask, Task } from "nativescript-task-dispatcher/tasks";
import { RecordsReceiverTask } from "~/core/tasks/records-receiver";
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
import { PairedDeviceResultSenderChecker } from "~/core/tasks/paired-device-result-sender-checker";
import { StartSensorFromDeviceTask } from "~/core/tasks/start-sensor-from-device-task";
import { StopSensorFromDeviceTask } from "~/core/tasks/stop-sensor-from-device-task";
import { StartLocalSensorServiceTask } from "~/core/tasks/start-local-sensor-service-task";
import { StopLocalSensorServiceTask } from "~/core/tasks/stop-local-sensor-service-task";
import { ModelType, SensingDataSource } from "~/core/mode";
import { ForwardSamplesToRecognitionTask } from "~/core/tasks/forward-samples-to-recognition-task";
import { getCNNRecognizer } from "~/core/recognition/recognizer/cnn";
import { getMLPRecognizer } from "~/core/recognition/recognizer/mlp";

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
  new ForwardSamplesToRecognitionTask(),
  new RecognitionTask(
    ModelType.CNN,
    SensingDataSource.LOCAL_DEVICE,
    getCNNRecognizer(SensingDataSource.LOCAL_DEVICE)
  ),
  new RecognitionTask(
    ModelType.MLP,
    SensingDataSource.LOCAL_DEVICE,
    getMLPRecognizer(SensingDataSource.LOCAL_DEVICE)
  ),
  new RecognitionTask(
    ModelType.CNN,
    SensingDataSource.PAIRED_DEVICE,
    getCNNRecognizer(SensingDataSource.PAIRED_DEVICE)
  ),
  new RecognitionTask(
    ModelType.MLP,
    SensingDataSource.PAIRED_DEVICE,
    getMLPRecognizer(SensingDataSource.PAIRED_DEVICE)
  ),
  new RecognitionResultEvaluationTask(),
  new EndTugTestTask(),
  new ExecutionFinishedEmitter(),
  new PairedDeviceResultSenderChecker(),
  new SimpleTask("storeTugResult", async ({ evt}) => {
    resultsStore.store(evt.data as TugResult);
  }),
  new SimpleTask("recordsReceiverClearStateTask", async () => {
    getRecordsReceiver().clear();
  }),

  new StartCollectionTask(),
  new ForwardRecordsTask(),
];
