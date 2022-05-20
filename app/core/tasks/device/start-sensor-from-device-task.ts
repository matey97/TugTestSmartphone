import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { getSensingDataSource } from "~/core/settings";
import { DataSource } from "~/core/data-source";

const START_LOCAL_DEVICE_SENSING = "startSensorFromLocalDevice";
const START_PAIRED_DEVICE_SENSING = "startSensorFromPairedDevice";

export class StartSensorFromDeviceTask extends Task {

  constructor() {
    super("startSensorFromDeviceTask", {
      outputEventNames: [START_LOCAL_DEVICE_SENSING, START_PAIRED_DEVICE_SENSING]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const sensingDataSource = getSensingDataSource();

    return {
      eventName: sensingDataSource === DataSource.LOCAL_DEVICE
        ? START_LOCAL_DEVICE_SENSING
        : START_PAIRED_DEVICE_SENSING,
      result: invocationEvent.data
    }
  }

}
