import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { getTugManager, TugManager } from "~/tug-test/manager";

export class StartTugTestRequestTask extends Task {

  constructor(
    private tugManager: TugManager = getTugManager()
  ) {
    super("startTugTestRequestTask", {
      outputEventNames: ["tugTestStarted"]
    });
  }

  protected async  onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    this.tugManager.startExecution(invocationEvent.data.deviceId);

    return {
      eventName: this.outputEventNames[0],
      result: invocationEvent.data
    };
  }

}
