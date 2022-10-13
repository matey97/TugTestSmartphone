import { Task, TaskParams, DispatchableEvent, TaskOutcome } from "@awarns/core/tasks";
import { getInMemoryRecordsStore } from "~/core/store/memory-records-store";

export class StoreRecordsTask extends Task {

  constructor() {
    super("storeRecordsTask");
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    const nodeId = invocationEvent.data.nodeId;
    const fileName = `${nodeId}_${Date.now()}.json`;

    await new Promise<void>(resolve => {
      setTimeout(async () => {
        await getInMemoryRecordsStore().store(fileName, true);
        resolve();
      }, 1000)
    });
  }

}
