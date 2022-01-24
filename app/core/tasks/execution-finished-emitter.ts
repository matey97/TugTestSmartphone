import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";

export class ExecutionFinishedEmitter extends Task {

  constructor() {
    super("executionFinishedEmitter", {
      outputEventNames: ["executionFinished"]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    return {
      eventName: this.outputEventNames[0],
      result: {
        deviceId: invocationEvent.data.deviceId
      },
    };
  }
}
