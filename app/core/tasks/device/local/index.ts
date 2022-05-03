import { StartLocalSensorServiceTask } from "./start-local-sensor-service-task";
import { StopLocalSensorServiceTask } from "./stop-local-sensor-service-task";

export const localDeviceTasks = [
  new StartLocalSensorServiceTask(),
  new StopLocalSensorServiceTask()
];
