import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { android as androidApp } from "@nativescript/core/application";
import { getCollectionServiceIntent } from "~/core/collection";

export class StartLocalSensorServiceTask extends Task {

  constructor(
  ) {
    super("startLocalSensorServiceTask");
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const intent = getCollectionServiceIntent();
    androidx.core.content.ContextCompat.startForegroundService(androidApp.context, intent);
  }
}
