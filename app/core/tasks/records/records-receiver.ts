import { DispatchableEvent, Task, TaskOutcome, TaskParams } from "@awarns/core/tasks";
import { getRecordsReceiver, RecordsReceiver } from "~/core/receiver/records-receiver";
import { getTugManager, TugManager } from "~/core/tug-test/manager";
import { getSensingDataSource } from "~/core/settings";
import { DataSource } from "~/core/data-source";
import { TriAxial as PhoneTriAxial } from "@awarns/phone-sensors";
import { TriAxial as WatchTriAxial } from "@awarns/wear-os";

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

    const record = getSensingDataSource() === DataSource.LOCAL_DEVICE
      ? invocationEvent.data as PhoneTriAxial
      : invocationEvent.data as WatchTriAxial;
    this.receiver.onRecordReceived(record);
  }

}
