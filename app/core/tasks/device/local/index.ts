import {
  PhoneSensor,
  startDetectingPhoneNTPSyncedSensorChangesTask,
  stopDetectingPhoneNTPSyncedSensorChangesTask
} from "@awarns/phone-sensors";
import { CommandExecutorFromLocalEventTask } from "~/core/tasks/device/local/command-executor-from-local-event";

export const localDeviceTasks = [
  startDetectingPhoneNTPSyncedSensorChangesTask(PhoneSensor.ACCELEROMETER, { sensorDelay: 10, batchSize: 50}),
  startDetectingPhoneNTPSyncedSensorChangesTask(PhoneSensor.GYROSCOPE, { sensorDelay: 10, batchSize: 50}),
  stopDetectingPhoneNTPSyncedSensorChangesTask(PhoneSensor.ACCELEROMETER),
  stopDetectingPhoneNTPSyncedSensorChangesTask(PhoneSensor.GYROSCOPE),
  new CommandExecutorFromLocalEventTask()
]
