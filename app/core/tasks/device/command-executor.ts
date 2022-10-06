import { DispatchableEvent, Task, TaskOutcome, TaskParams } from "@awarns/core/tasks";
import { setApplicationMode, setSensingDataSource } from "~/core/settings";
import { DataSource } from "~/core/data-source";
import { ApplicationMode } from "~/core/application-mode";
import { getTugManager } from "~/core/tug-test/manager";

const START_COL_EVT = 'startCollectionCommand';
const STOP_COL_EVT = 'stopCollectionCommand';
const START_TUG_EVT = 'startTugCommand';
const STOP_TUG_EVT = 'stopTugCommand';

export type Action = 'start-execution' | 'stop-execution' | 'start-collection' | 'stop-collection';
export interface Command {
  action: Action
  from: DataSource,
  nodeId: string;
}

export abstract class CommandExecutor extends Task {
  protected constructor(name: string) {
    super(name, {
      outputEventNames: [
        START_COL_EVT, STOP_COL_EVT, START_TUG_EVT, STOP_TUG_EVT
      ]
    });
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    const command = this.commandFromInvocationEventData(invocationEvent.data);

    setSensingDataSource(command.from);
    let event;
    switch (command.action) {
      case 'start-collection':
        setApplicationMode(ApplicationMode.COLLECTION);
        event = START_COL_EVT;
        break;
      case 'stop-collection':
        event = STOP_COL_EVT;
        break;
      case 'start-execution':
        setApplicationMode(ApplicationMode.TUG);
        getTugManager().startExecution(command.nodeId);
        event = START_TUG_EVT;
        break;
      case 'stop-execution':
        event = STOP_TUG_EVT;
        break;
    }

    return {
      eventName: event,
      result: { nodeId: command.nodeId }
    };
  }

  protected abstract commandFromInvocationEventData(data: any): Command;
}
