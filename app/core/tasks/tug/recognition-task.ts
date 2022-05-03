import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { getSensingDataSource } from "~/core/mode";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { toSamples } from "~/core/recognition/recognizer/samples";
import { getRecognizer } from "~/core/recognition/recognizer";
import { RecordsToProcess } from "~/core/receiver/records-to-process";
import { normalize } from "~/core/recognition/preprocessing";

const DEFAULT_EVENT = "recognitionFinished";

export class RecognitionTask extends Task {

  constructor(
  ) {
    super(`recognitionTask`, {
      outputEventNames: [DEFAULT_EVENT]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const records: RecordsToProcess = invocationEvent.data as RecordsToProcess;
    const samples = normalize(toSamples(records));

    const dataSource = getSensingDataSource();
    const recognizer = getRecognizer(dataSource);
    const recognitionResult = await recognizer.recognize(samples);

    return {
      eventName: DEFAULT_EVENT,
      result: recognitionResult
    }
  }
}
