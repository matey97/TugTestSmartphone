import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { startCollectionService } from "~/core/collection";

export class StartLocalSensorServiceTask extends Task {

  constructor(
  ) {
    super("startLocalSensorServiceTask");
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    startCollectionService();
  }
}
