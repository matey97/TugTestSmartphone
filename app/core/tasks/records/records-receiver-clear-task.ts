import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { getTugManager, TugManager } from "~/core/tug-test/manager";
import { getRecordsReceiver, RecordsReceiver } from "~/core/receiver/records-receiver";

export class RecordsReceiverClearTask extends Task {

  constructor(
    private tugManager: TugManager = getTugManager(),
    private receiver: RecordsReceiver = getRecordsReceiver()
  ) {
    super("recordsReceiverClearTask");
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    if (this.tugManager.ongoing)
      throw new Error("Could not clear records. There is an execution ongoing!");

    this.receiver.clear();
  }
}
