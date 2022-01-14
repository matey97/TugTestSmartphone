import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { ApplicationMode, getApplicationMode } from "~/mode";

const ACC_INF_EVT = "accelerometerRecordsForInference";
const GYR_INF_EVT = "gyroscopeRecordsForInference";
const ACC_COL_EVT = "accelerometerRecordsForCollection";
const GYR_COL_EVT = "gyroscopeRecordsForCollection";

export class ForwardRecordsTask extends Task {

  constructor() {
    super("forwardRecordsTask", {
      outputEventNames: [
        ACC_INF_EVT,
        GYR_INF_EVT,
        ACC_COL_EVT,
        GYR_COL_EVT,
      ]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const mode = getApplicationMode();
    const sourceEvt = invocationEvent.name;

    let forwardEvent;
    if (mode === ApplicationMode.INFERENCE) {
      if (sourceEvt.includes("accelerometer"))
        forwardEvent = ACC_INF_EVT;
      else
        forwardEvent = GYR_INF_EVT;
    } else {
      if (sourceEvt.includes("accelerometer"))
        forwardEvent = ACC_COL_EVT;
      else
        forwardEvent = GYR_COL_EVT;
    }

    return {
      eventName: forwardEvent,
      result: invocationEvent.data,
    }
  }
}
