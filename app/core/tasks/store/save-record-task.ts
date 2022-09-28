import { Task, TaskParams, DispatchableEvent, TaskOutcome } from "@awarns/core/tasks";
import { WatchRecord } from "@awarns/wear-os";
import { getStore } from "~/core/store/records-store";

export class SaveRecordTask extends Task {

  constructor() {
    super("saveRecordTask");
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    const record = invocationEvent.data as WatchRecord;
    getStore().addRecord(record);
  }
}
