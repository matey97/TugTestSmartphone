import { Task, TaskOutcome, TaskParams, DispatchableEvent } from "@awarns/core/tasks";
import { getTugManager, TugManager } from "~/core/tug-test/manager";
import { Vibrate } from "nativescript-vibrate";

export class EndTugTestTask extends Task {

  constructor(
    private tugManager: TugManager = getTugManager()
  ) {
    super("endTugTestTask", {
      outputEventNames: ["tugTestEnded"]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    if (!this.tugManager.ongoing)
      return;

    const tugResult = this.tugManager.endExecution();

    const vibrator = new Vibrate();
    vibrator.vibrate([500, 500, 500, 500]);

    return {
      eventName: this.outputEventNames[0],
      result: tugResult
    };
  }

}
