import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { getRecognizer, Recognizer } from "~/ml-model/recognition/recognizer";
import { TimedFeatures } from "~/feature-extraction";

const DEFAULT_EVENT = "recognitionFinished";

export class RecognizerTask extends Task {

  constructor(private recognizer: Recognizer = getRecognizer()) {
    super("recognizerTask", {
      outputEventNames: [DEFAULT_EVENT]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const timedFeatures = invocationEvent.data as TimedFeatures;
    const recognitionResult = await this.recognizer.recognize(timedFeatures);

    console.log(`[RECOGNITION RESULT] --> ${JSON.stringify(recognitionResult)}`);

    return {
      eventName: DEFAULT_EVENT,
      result: recognitionResult
    }
  }

}
