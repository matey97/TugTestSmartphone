import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { extractFeaturesFrom } from "~/core/feature-extraction";
import { RecordsToProcess } from "~/core/feature-extraction/records-to-process";

const DEFAULT_EVENT = "featuresExtracted";

export class FeatureExtractionTask extends Task {

  constructor() {
    super("featureExtractionTask", {
      outputEventNames: [DEFAULT_EVENT]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const records: RecordsToProcess = invocationEvent.data as RecordsToProcess;

    return {
      eventName: DEFAULT_EVENT,
      result: extractFeaturesFrom(records)
    }
  }

}
