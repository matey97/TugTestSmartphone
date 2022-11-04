import {
  sendPlainMessageToWatchTask,
  startDetectingWatchSensorChangesTask,
  stopDetectingWatchSensorChangesTask,
  WatchSensor
} from "@awarns/wear-os";
import { CommandExecutorFromMessageTask } from "~/core/tasks/device/paired/command-executor-from-message-task";
import { PairedDeviceResultSenderChecker } from "~/core/tasks/device/paired/paired-device-result-sender-checker";

export const pairedDeviceTasks = [
  startDetectingWatchSensorChangesTask(WatchSensor.ACCELEROMETER, { sensorDelay: 10, batchSize: 50}),
  startDetectingWatchSensorChangesTask(WatchSensor.GYROSCOPE, { sensorDelay: 10, batchSize: 50}),
  stopDetectingWatchSensorChangesTask(WatchSensor.ACCELEROMETER),
  stopDetectingWatchSensorChangesTask(WatchSensor.GYROSCOPE),
  sendPlainMessageToWatchTask(),
  new CommandExecutorFromMessageTask(),
  new PairedDeviceResultSenderChecker(),
];
