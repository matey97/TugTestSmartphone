import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { SensorRecords } from "nativescript-wearos-sensors/internal/sensors/sensor-record";
import { getRecordsReceiver, RecordsReceiver } from "~/receiver/records-receiver";
import { getTugManager, TugManager } from "~/tug-test/manager";

export class RecordsReceiverTask extends Task {

  constructor(
    private tugManager: TugManager = getTugManager(),
    private receiver: RecordsReceiver = getRecordsReceiver()
  ) {
    super("recordsReceiverTask");
  }

  protected async  onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    if (!this.tugManager.ongoing)
      throw new Error("Could not receive records. No ongoing execution!");

    const sensorRecords: SensorRecords<any> = invocationEvent.data.records as SensorRecords<any>;
    this.receiver.onRecordsReceived(sensorRecords);
  }

}
