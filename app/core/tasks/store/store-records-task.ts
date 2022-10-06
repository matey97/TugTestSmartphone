import { Task, TaskParams, DispatchableEvent, TaskOutcome } from "@awarns/core/tasks";
import { getStore } from "~/core/store/records-store";

export class StoreRecordsTask extends Task {

  constructor() {
    super("storeRecordsTask");
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    const nodeId = invocationEvent.data.nodeId;
    const fileName = `${nodeId}_${Date.now()}.json`;

    await new Promise<void>(resolve => {
      setTimeout(async () => {
        await getStore().store(fileName, true);
        resolve();
      }, 1000)
    });
  }

}
