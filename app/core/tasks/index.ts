import { Task } from "nativescript-task-dispatcher/tasks";
import { deviceTasks } from "~/core/tasks/device";
import { tugTestTasks } from "~/core/tasks/tug";
import { collectionTasks } from "~/core/tasks/collection";
import { recordsTasks } from "~/core/tasks/records";
import { loggers } from "~/core/tasks/loggers";

export const appTasks: Array<Task> = [
  ...deviceTasks,     // Tasks related to the device as sensing unit: start/stop sensors, send information...
  ...tugTestTasks,    // Tasks related to the TUG test: start, recognition, ending...
  ...collectionTasks, // Tasks related to collection: start
  ...recordsTasks,    // Tasks related to sensor records management: receive, forwarding, clear...

  ...loggers
];
