import { StartSensorFromDeviceTask } from "./start-sensor-from-device";
import { StopSensorFromDeviceTask } from "./stop-sensor-from-device";
import { localDeviceTasks } from "~/core/tasks/device/local";
import { pairedDeviceTasks } from "~/core/tasks/device/paired";

export const deviceTasks = [
  new StartSensorFromDeviceTask(),
  new StopSensorFromDeviceTask(),
  ...localDeviceTasks,
  ...pairedDeviceTasks
];
