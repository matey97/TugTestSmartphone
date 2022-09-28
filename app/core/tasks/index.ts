import { Task } from "@awarns/core/tasks";
import { pairedDeviceTasks } from "~/core/tasks/device/paired";
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

export const appTasks: Array<Task> = [
  ...pairedDeviceTasks,
  ...tugTestTasks,    // Tasks related to the TUG test: start, recognition, ending...
  ...recordsTasks,    // Tasks related to sensor records management: receive, forwarding, clear...
  ...storeTasks,
  ...loggers,

  startDetectingWatchSensorChangesTask(WatchSensor.ACCELEROMETER, { sensorDelay: 10, batchSize: 50}),
  startDetectingWatchSensorChangesTask(WatchSensor.GYROSCOPE, { sensorDelay: 10, batchSize: 50}),
  stopDetectingWatchSensorChangesTask(WatchSensor.ACCELEROMETER),
  stopDetectingWatchSensorChangesTask(WatchSensor.GYROSCOPE),
  sendPlainMessageToWatchTask(),
];
