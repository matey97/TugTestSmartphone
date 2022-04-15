import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import {ApplicationMode, dataSourceFromDeviceId, setApplicationMode, setSensingDataSource} from "~/core/mode";

export class StartCollectionTask extends Task {

  constructor() {
    super("startCollectionTask", {
      outputEventNames: ["collectionStarted"]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    setApplicationMode(ApplicationMode.DATA_COLLECTION);

    const deviceId = invocationEvent.data.deviceId;
    const dataSource = await dataSourceFromDeviceId(deviceId);
    setSensingDataSource(dataSource);

    return {
      eventName: this.outputEventNames[0],
      result: invocationEvent.data
    }
  }



}
