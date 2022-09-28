import { Task, TaskOutcome, TaskParams, DispatchableEvent } from "@awarns/core/tasks";
import { getRecordsReceiver, RecordsReceiver } from "~/core/receiver/records-receiver";
import { getTugManager, TugManager } from "~/core/tug-test/manager";
import { WatchRecord } from "@awarns/wear-os";

export class RecordsReceiverTask extends Task {

  constructor(
    private tugManager: TugManager = getTugManager(),
    private receiver: RecordsReceiver = getRecordsReceiver()
  ) {
    super("recordsReceiverTask");
  }

  protected async  onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    if (!this.tugManager.ongoing)
      throw new Error("Could not receive records. No ongoing execution!");

    const record = invocationEvent.data as WatchRecord;
    this.receiver.onRecordReceived(record);
  }

}
