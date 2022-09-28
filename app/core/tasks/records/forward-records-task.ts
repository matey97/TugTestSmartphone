import { Task, TaskOutcome, TaskParams, DispatchableEvent } from "@awarns/core/tasks";
import { getApplicationMode } from "~/core/settings";
import { ApplicationMode } from "~/core/application-mode";

const ACC_INF_EVT = "watchAccelerometerSamplesForInference";
const GYR_INF_EVT = "watchGyroscopeSamplesForInference";
const ACC_COL_EVT = "watchAccelerometerSamplesForCollection";
const GYR_COL_EVT = "watchGyroscopeSamplesForCollection";

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
    if (mode === ApplicationMode.TUG) {
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
