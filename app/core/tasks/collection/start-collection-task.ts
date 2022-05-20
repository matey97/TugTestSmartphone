import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { setApplicationMode, setSensingDataSource } from "~/core/settings";
import { ApplicationMode } from "~/core/application-mode";
import { dataSourceFromDeviceId } from "~/core/data-source";

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
    setApplicationMode(ApplicationMode.COLLECTION);

    const deviceId = invocationEvent.data.deviceId;
    const dataSource = await dataSourceFromDeviceId(deviceId);
    setSensingDataSource(dataSource);

    return {
      eventName: this.outputEventNames[0],
      result: invocationEvent.data
    }
  }
}
