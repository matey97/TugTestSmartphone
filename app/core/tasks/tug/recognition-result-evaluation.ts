import { Task, TaskOutcome, TaskParams, DispatchableEvent } from "@awarns/core/tasks";
import { RecognitionResult } from "~/core/recognition";
import { Activity, fromString } from "~/core/tug-test/activities";
import { getTugManager, TugManager } from "~/core/tug-test/manager";
import { Status } from "~/core/tug-test/execution";

const SIGNIFICANCE_THRESHOLD = 0.7;

const DEFAULT_EVENT = "testEvaluationTaskFinished";
const TEST_ENDING_EVENT = "detectedTugTestEnding";

export class RecognitionResultEvaluationTask extends Task {

  constructor(
    private tugManager: TugManager = getTugManager()
  ) {
    super("recognitionResultEvaluationTask", {
      outputEventNames: [DEFAULT_EVENT, TEST_ENDING_EVENT]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const currentExecution = this.tugManager.currentExecution;
    if (!currentExecution)
      throw new Error("There is no current TUG execution");

    const recognitionResult = invocationEvent.data as RecognitionResult;
    currentExecution.addNew(recognitionResult);

    const lastThree = currentExecution.recognitionResults.slice(-3);
    const activity = fromString(lastThree[0].inference.class);

    // If the last three estimations are the same activity and
    // that activity is different than the current one update the current activity
    if (
      areRecognitionsEqualAndSignificant(lastThree) &&
      activity !== currentExecution.current
    ) {
      const previous = currentExecution.current;
      currentExecution.current = activity;

      // If the previous activity was SIT, set the execution as started
      if (previous === Activity.SIT) {
        currentExecution.status = Status.STARTED
      }
    }

    // If the execution has started, the last three estimations are the same activity
    // and that activity is SIT, then finish the execution
    if (
      currentExecution.status === Status.STARTED &&
      areRecognitionsEqualAndSignificant(lastThree) &&
      activity === Activity.SIT
    ) {
      currentExecution.status = Status.FINISHED;
      return {
        eventName: TEST_ENDING_EVENT
      }
    }

    return {
      eventName: DEFAULT_EVENT
    }
  }
}

function areRecognitionsEqualAndSignificant(recognitions: RecognitionResult[]): boolean {
  return areRecognitionsEqual(recognitions) && areRecognitionsSignificant(recognitions);
}

function areRecognitionsEqual(recognitions: RecognitionResult[]): boolean {
  return recognitions
    .map((recognition) => fromString(recognition.inference.class))
    .every((recognition, i, recognitions) => recognition === recognitions[0]);
}

function areRecognitionsSignificant(recognitions: RecognitionResult[]): boolean {
  const meanProbabilities = recognitions
    .map((recognition) => recognition.inference.probability)
    .reduce((prev, curr) => prev + curr) / recognitions.length;

  return meanProbabilities > SIGNIFICANCE_THRESHOLD;
}
