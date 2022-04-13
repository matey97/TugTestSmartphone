import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { getCollectionServiceIntent } from "~/core/collection";
import { android as androidApp } from "@nativescript/core/application";

export class StopLocalSensorServiceTask extends Task {

  constructor() {
    super("stopLocalSensorServiceTask");
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const intent = getCollectionServiceIntent();
    androidApp.context.stopService(intent);
  }

}
