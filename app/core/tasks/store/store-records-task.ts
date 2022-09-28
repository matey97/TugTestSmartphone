import { Task, TaskParams, DispatchableEvent, TaskOutcome } from "@awarns/core/tasks";
import { getStore } from "~/core/store/records-store";
import { ReceivedMessage } from "@awarns/wear-os";

export class StoreRecordsTask extends Task {

  constructor() {
    super("storeRecordsTask");
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    const receivedMessage = invocationEvent.data as ReceivedMessage;
    const sender = receivedMessage.senderNodeId;
    const fileName = `${sender}_${Date.now()}.json`;

    await new Promise<void>(resolve => {
      setTimeout(async () => {
        await getStore().store(fileName, true);
        resolve();
      }, 1000)
    });
  }

}
