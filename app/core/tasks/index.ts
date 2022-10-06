import { SimpleTask, Task } from "@awarns/core/tasks";
import { deviceTasks } from "~/core/tasks/device";
import { tugTestTasks } from "~/core/tasks/tug";
import { recordsTasks } from "~/core/tasks/records";
import { loggers } from "~/core/tasks/loggers";
import {
  sendPlainMessageToWatchTask,
  startDetectingWatchSensorChangesTask,
  stopDetectingWatchSensorChangesTask,
  WatchSensor
} from "@awarns/wear-os";
import { storeTasks } from "~/core/tasks/store";
import { classificationTask } from "@awarns/ml-kit";
import { getApplicationMode, getModelEnabledForDataSource } from "~/core/settings";
import { DataSource } from "~/core/data-source";
import {
  PhoneSensor,
  startDetectingPhoneNTPSyncedSensorChangesTask,
  stopDetectingPhoneNTPSyncedSensorChangesTask
} from "@awarns/phone-sensors";
import { getViewModel } from "~/view/list/tug-list-page";
import { ApplicationMode } from "~/core/application-mode";

export const appTasks: Array<Task> = [
  ...deviceTasks,
  ...tugTestTasks,    // Tasks related to the TUG test: start, ml, ending...
  ...recordsTasks,    // Tasks related to sensor records management: receive, forwarding, clear...
  ...storeTasks,
  ...loggers,

  startDetectingPhoneNTPSyncedSensorChangesTask(PhoneSensor.ACCELEROMETER, { sensorDelay: 10, batchSize: 50}),
  startDetectingPhoneNTPSyncedSensorChangesTask(PhoneSensor.GYROSCOPE, { sensorDelay: 10, batchSize: 50}),
  stopDetectingPhoneNTPSyncedSensorChangesTask(PhoneSensor.ACCELEROMETER),
  stopDetectingPhoneNTPSyncedSensorChangesTask(PhoneSensor.GYROSCOPE),

  startDetectingWatchSensorChangesTask(WatchSensor.ACCELEROMETER, { sensorDelay: 10, batchSize: 50}),
  startDetectingWatchSensorChangesTask(WatchSensor.GYROSCOPE, { sensorDelay: 10, batchSize: 50}),
  stopDetectingWatchSensorChangesTask(WatchSensor.ACCELEROMETER),
  stopDetectingWatchSensorChangesTask(WatchSensor.GYROSCOPE),
  sendPlainMessageToWatchTask(),

  classificationTask('human-activity', () => getModelEnabledForDataSource(DataSource.LOCAL_DEVICE), 'FromLocalDeviceData'),
  classificationTask('human-activity', () => getModelEnabledForDataSource(DataSource.PAIRED_DEVICE), 'FromPairedDeviceData'),

  new SimpleTask('uiButtonUpdateTask', async () => {
    if (getApplicationMode() === ApplicationMode.TUG)
      getViewModel().runningLocal = false;
  }),
];
