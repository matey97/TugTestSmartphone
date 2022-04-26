import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { ModelType, SensingDataSource } from "~/core/mode";
import { AbstractRecognizer } from "~/core/recognition/recognizer/abstract-recognizer";
import { pascalCase } from "~/core/utils/strings";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { Samples } from "~/core/feature-extraction";

const DEFAULT_EVENT = "recognitionFinished";

export class RecognitionTask extends Task {

  constructor(
    private type: ModelType,
    private source: SensingDataSource,
    private recognizer: AbstractRecognizer
  ) {
    super(`${type.toLowerCase()}RecognitionForDataFrom${pascalCase(source)}Task`, {
      outputEventNames: [DEFAULT_EVENT]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const samples = invocationEvent.data as Samples;
    const recognitionResult = await this.recognizer.recognize(samples);

    console.log(`[RECOGNITION RESULT (${this.type}|${this.source})] --> ${JSON.stringify(recognitionResult)}`);

    return {
      eventName: DEFAULT_EVENT,
      result: recognitionResult
    }
  }
}
