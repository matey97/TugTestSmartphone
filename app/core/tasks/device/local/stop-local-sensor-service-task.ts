import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { stopCollectionService } from "~/core/collection";
import { getViewModel } from "~/view/list/tug-list-page";
import { getApplicationMode } from "~/core/settings";
import { ApplicationMode } from "~/core/application-mode";

export class StopLocalSensorServiceTask extends Task {

  constructor() {
    super("stopLocalSensorServiceTask");
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    stopCollectionService();

    const mode = getApplicationMode();
    if (mode === ApplicationMode.COLLECTION) {
      return;
    }

    getViewModel().runningLocal = false; // Update UI button
  }

}
