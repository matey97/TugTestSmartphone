import { Task, TaskOutcome, TaskParams, DispatchableEvent } from "@awarns/core/tasks";
import { Activity, fromString } from "~/core/tug-test/activities";
import { getTugManager, TugManager } from "~/core/tug-test/manager";
import { highestScorePrediction, Status } from "~/core/tug-test/execution";
import { Classification, ClassificationPrediction } from "@awarns/ml-kit";

const SIGNIFICANCE_THRESHOLD = 0.7;

const DEFAULT_EVENT = "testEvaluationTaskFinished";
const TEST_ENDING_EVENT = "detectedTugTestEnding";

export class PredictionResultEvaluationTask extends Task {

  constructor(
    private tugManager: TugManager = getTugManager()
  ) {
    super("predictionResultEvaluationTask", {
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

    const classification = invocationEvent.data as Classification;
    currentExecution.addNew(classification);

    const lastThree = currentExecution.classifications.slice(-3);
    const lastThreePredictions = lastThree.map((classification) => highestScorePrediction(classification.classificationResult))
    const activity = fromString(highestScorePrediction(lastThree[0].classificationResult).label);

    // If the last three estimations are the same activity and
    // that activity is different than the current one update the current activity
    if (
      areRecognitionsEqualAndSignificant(lastThreePredictions) &&
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
      areRecognitionsEqualAndSignificant(lastThreePredictions) &&
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

function areRecognitionsEqualAndSignificant(classificationPredictions: ClassificationPrediction[]): boolean {
  return areRecognitionsEqual(classificationPredictions) && areRecognitionsSignificant(classificationPredictions);
}

function areRecognitionsEqual(classificationPredictions: ClassificationPrediction[]): boolean {
  return classificationPredictions
    .map((classificationPrediction) => fromString(classificationPrediction.label))
    .every((prediction, i, predictions) => prediction === predictions[0]);
}

function areRecognitionsSignificant(classificationPredictions: ClassificationPrediction[]): boolean {
  const meanProbabilities = classificationPredictions
    .map((classificationPrediction) => classificationPrediction.score)
    .reduce((prev, curr) => prev + curr) / classificationPredictions.length;

  return meanProbabilities > SIGNIFICANCE_THRESHOLD;
}
