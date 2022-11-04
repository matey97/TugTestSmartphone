import { DispatchableEvent, Task, TaskOutcome, TaskParams } from "@awarns/core/tasks";
import { createRecordsExporter, recordsStore } from "@awarns/persistence";
import { knownFolders } from "@nativescript/core";
import { getSensingDataSource } from "~/core/settings";
import { DataSource } from "~/core/data-source";

export class ExportRecordsTask extends Task {

  constructor(
    private store = recordsStore
  ) {
    super("exportRecordsTask");
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    const nodeId = invocationEvent.data.nodeId;
    const fileName = `${nodeId}_${Date.now()}`;
    const recordTypes = getSensingDataSource() == DataSource.LOCAL_DEVICE
      ? ["accelerometer", "gyroscope"]
      : ["watch-accelerometer", "watch-gyroscope"];
    const exporter = createRecordsExporter(knownFolders.documents(), 'json', {
      fileName,
      recordTypes
    });

    await new Promise<void>(resolve => {
      setTimeout(async () => {
        await exporter.export();
        await Promise.all(recordTypes.map(type => this.store.deleteBy(type)));
        resolve();
      }, 1000)
    });
  }
}
