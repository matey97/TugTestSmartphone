import { DispatchableEvent, Task, TaskOutcome, TaskParams } from "@awarns/core/tasks";
import { MessageReceived, ReceivedMessage } from "@awarns/wear-os";
import { setApplicationMode, setSensingDataSource } from "~/core/settings";
import { ApplicationMode } from "~/core/application-mode";
import { getTugManager } from "~/core/tug-test/manager";
import { DataSource } from "~/core/data-source";

const START_COL_EVT = 'collectionStarted';
const STOP_COL_EVT = 'collectionStopped';
const START_TUG_EVT = 'tugStarted';
const STOP_TUG_EVT = 'tugStopped';

export class CommandExecutorFromMessageTask extends Task {

  constructor() {
    super("commandExecutorFromMessageTask", {
      outputEventNames: [START_COL_EVT, STOP_COL_EVT, START_TUG_EVT, STOP_TUG_EVT]
    });
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    const messageReceived = invocationEvent.data as MessageReceived;
    const content = messageReceived.content as ReceivedMessage;
    const message = content.plainMessage.message;

    setSensingDataSource(DataSource.PAIRED_DEVICE);
    let event;
    switch (message) {
      case 'start-collection':
        setApplicationMode(ApplicationMode.COLLECTION);
        event = START_COL_EVT;
        break;
      case 'stop-collection':
        event = STOP_COL_EVT;
        break;
      case 'start-execution':
        setApplicationMode(ApplicationMode.TUG);
        getTugManager().startExecution(content.senderNodeId);
        event = START_TUG_EVT;
        break;
      case 'stop-execution':
        event = STOP_TUG_EVT
        break;
    }

    return {
      eventName: event,
      result: content
    };
  }
}
