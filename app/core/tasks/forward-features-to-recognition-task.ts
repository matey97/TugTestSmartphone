import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { getSensingDataSource, SensingDataSource } from "~/core/mode";

export class ForwardFeaturesToRecognitionTask extends Task {

  constructor() {
    super("forwardFeaturesToRecognitionTask", {
      outputEventNames: ["useLocalSourceDataRecognizer", "usePairedSourceDataRecognizer"]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const dataSource = getSensingDataSource();

    return {
      eventName: dataSource === SensingDataSource.LOCAL_DEVICE
        ? this.outputEventNames[0]
        : this.outputEventNames[1],
      result: invocationEvent.data,
    }
  }
}
