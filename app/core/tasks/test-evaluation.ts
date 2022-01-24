import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { RecognitionResult } from "~/core/ml-model/recognition";
import { Activity, fromString } from "~/core/tug-test/activities";
import { getTugManager, TugManager } from "~/core/tug-test/manager";
import { Status } from "~/core/tug-test/execution";

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

    const lastThree = currentExecution.recognitionResults
      .slice(-3)
      .map((recognitionResult) => fromString(recognitionResult.inference.class));

    if (this.areEqual(lastThree) && this.areDifferent(currentExecution.current, lastThree[0])) {
      currentExecution.setCurrentActivity(lastThree[0]);
    }

    if (currentExecution.checkPreviousCurrentSequence(Activity.TURNING,Activity.WALKING)) {
      currentExecution.status = Status.SECOND_PHASE;
    }

    if (
      currentExecution.checkPreviousCurrentSequence(Activity.SITTING,Activity.SIT) &&
      currentExecution.status === Status.SECOND_PHASE
    ) {
      return {
        eventName: TEST_ENDING_EVENT
      }
    }

    return {
      eventName: DEFAULT_EVENT
    }
  }

  private areEqual(array: string[]): boolean {
    return array.every((val, i, arr) => val === arr[0]);
  }

  private areDifferent(a: string, b: string): boolean {
    return a !== b;
  }

}
