import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";

export class StopTestCommandEmitterTask extends Task {

  constructor() {
    super("stopTestCommandEmitter", {
      outputEventNames: ["stopExecutionCommand"]
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
