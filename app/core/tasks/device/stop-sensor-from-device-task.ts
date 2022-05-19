import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { getSensingDataSource } from "~/core/settings";
import { DataSource } from "~/core/data-source";

const STOP_LOCAL_DEVICE_SENSING = "stopSensorFromLocalDevice";
const STOP_PAIRED_DEVICE_SENSING = "stopSensorFromPairedDevice";

export class StopSensorFromDeviceTask extends Task {

  constructor() {
    super("stopSensorFromDeviceTask", {
      outputEventNames: [STOP_LOCAL_DEVICE_SENSING, STOP_PAIRED_DEVICE_SENSING]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const sensingDataSource = getSensingDataSource();

    return {
      eventName: sensingDataSource === DataSource.LOCAL_DEVICE
        ? STOP_LOCAL_DEVICE_SENSING
        : STOP_PAIRED_DEVICE_SENSING,
      result: invocationEvent.data
    }
  }

}
