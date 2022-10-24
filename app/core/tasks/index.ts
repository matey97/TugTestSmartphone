import { SimpleTask, Task } from "@awarns/core/tasks";
import { deviceTasks } from "~/core/tasks/device";
import { tugTestTasks } from "~/core/tasks/tug";
import { recordsTasks } from "~/core/tasks/records";
import { loggers } from "~/core/tasks/loggers";

import { getApplicationMode } from "~/core/settings";
import { getViewModel } from "~/view/list/tug-list-page";
import { ApplicationMode } from "~/core/application-mode";

export const appTasks: Array<Task> = [
  ...deviceTasks,     // Tasks to start/stop data collection from devices...
  ...tugTestTasks,    // Tasks related to the TUG test: start, ml, ending...
  ...recordsTasks,    // Tasks related to sensor records management: receive, forwarding, clear...
  ...loggers,         // Loggers for prediction results

  new SimpleTask('uiButtonUpdateTask', async () => {
    if (getApplicationMode() === ApplicationMode.TUG)
      getViewModel().runningLocal = false;
  }),
];
