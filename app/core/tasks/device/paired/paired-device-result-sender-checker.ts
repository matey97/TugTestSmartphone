import { Task, TaskOutcome, TaskParams, DispatchableEvent } from "@awarns/core/tasks";
import { TugResult } from "~/core/tug-test/result";
import { getSensingDataSource } from "~/core/settings";
import { DataSource } from "~/core/data-source";

export class PairedDeviceResultSenderChecker extends Task {

  constructor() {
    super("pairedDeviceResultSenderChecker", {
      outputEventNames: ["pairedDeviceResultSenderCheckerFinished", "sendResultToPairedDevice"]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const dataSource = getSensingDataSource();
    if (dataSource === DataSource.LOCAL_DEVICE)
      return {
        eventName: this.outputEventNames[0]
      };

    const results = invocationEvent.data as TugResult;

    return {
      eventName: this.outputEventNames[1],
      result: {
        nodeId: results.deviceId,
        result: results.duration.toString(),
        messagePath: "/result"
      }
    }
  }
}
