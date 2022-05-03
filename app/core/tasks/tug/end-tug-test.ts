import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { getTugManager, TugManager } from "~/core/tug-test/manager";
import { getRecognizer } from "~/core/recognition/recognizer";
import { getSensingDataSource } from "~/core/mode";

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

    const tugResults = this.tugManager.endExecution();

    const recognizer = getRecognizer(getSensingDataSource());
    recognizer.unloadModel();

    return {
      eventName: this.outputEventNames[0],
      result: tugResults
    };
  }

}
