import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { TugResult } from "~/core/tug-test/result";

export class PrepareSimpleResultTask extends Task {

  constructor() {
    super("prepareSimpleResultTask", {
      outputEventNames: ["simpleResultPrepared"]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const results = invocationEvent.data as TugResult;

    return {
      eventName: this.outputEventNames[0],
      result: {
        nodeId: results.deviceId,
        result: results.duration.toString(),
        messagePath: "/result"
      }
    }
  }
}
