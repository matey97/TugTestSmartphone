import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { TimedFeatures } from "~/core/feature-extraction";
import { Recognizer } from "~/core/recognition/recognizer";

const DEFAULT_EVENT = "recognitionFinished";

export class RecognitionTask extends Task {

  constructor(
    private source: string,
    private recognizer: Recognizer
  ) {
    super(`recognitionForDataFrom${source}DeviceTask`, {
      outputEventNames: [DEFAULT_EVENT]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const timedFeatures = invocationEvent.data as TimedFeatures;
    const recognitionResult = await this.recognizer.recognize(timedFeatures);

    console.log(`[RECOGNITION RESULT (${this.source})] --> ${JSON.stringify(recognitionResult)}`);

    return {
      eventName: DEFAULT_EVENT,
      result: recognitionResult
    }
  }

}
