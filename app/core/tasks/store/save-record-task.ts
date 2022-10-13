import { Task, TaskParams, DispatchableEvent, TaskOutcome } from "@awarns/core/tasks";
import { Record } from "@awarns/core/entities";
import { getInMemoryRecordsStore } from "~/core/store/memory-records-store";

export class SaveRecordTask extends Task {

  constructor() {
    super("saveRecordTask");
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    const record = invocationEvent.data as Record;
    getInMemoryRecordsStore().addRecord(record);
  }
}
