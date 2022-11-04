import { DispatchableEvent, Task, TaskOutcome, TaskParams } from "@awarns/core/tasks";
import { getRecordsReceiver, RecordsReceiver } from "~/core/receiver/records-receiver";
import { getTugManager, TugManager } from "~/core/tug-test/manager";
import { Sensor } from "~/core/sensors";

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

    const record = invocationEvent.data;

    this.receiver.onRecordReceived({
      sensor: record.type.includes("accelerometer") ? Sensor.ACCELEROMETER : Sensor.GYROSCOPE,
      samples: record.samples
    });
  }

}
