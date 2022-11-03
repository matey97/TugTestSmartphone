import { Activity } from "~/core/tug-test/activities";
import { TugAction } from "~/core/tug-test/tug-action";
import { ActivityResult, ActivityResults, TugResult } from "~/core/tug-test/result";
import { Classification, ClassificationPrediction, ClassificationResult } from "@awarns/ml-kit";
import { getNTPTimeProvider } from "@awarns/phone-sensors/internal/service/ntp/time-provider";

const EXECUTION_SEQUENCE = [
  Activity.SIT,
  Activity.STANDING_UP,
  Activity.WALKING,
  Activity.TURNING,
  Activity.WALKING,
  Activity.TURNING,
  Activity.SITTING,
  Activity.SIT,
];

const TUG_EXECUTION_SEQUENCE = [
  TugAction.STANDING_UP,
  TugAction.FIRST_WALK,
  TugAction.FIRST_TURN,
  TugAction.SECOND_WALK,
  TugAction.SECOND_TURN,
  TugAction.SITTING_DOWN
];

const LOOKUP_WINDOW = 3;

export class TugExecution {

  private _classifications: Classification[] = [];
  get classifications(): Classification[] {
    return this._classifications;
  }
  set classifications(classifications) {
    this._classifications = classifications;
  }

  private _current: Activity;
  get current(): Activity {
    return this._current;
  }
  set current(value) {
    this._current = value;
  }

  private _status: Status;
  get status(): Status {
    return this._status;
  }
  set status(value) {
    this._status = value;
  }

  constructor(
    private sourceDeviceId: string,
    private starTime = getNTPTimeProvider().getTimestamp()
  ) {
    this._current = Activity.SIT;
    this._status = Status.YET_TO_START;
  }

  addNew(classification: Classification) {
    this._classifications.push(classification);
  }

  computeResults(): TugResult {
    const predictions = this.classifications.map((classification) => highestScorePrediction(classification.classificationResult).label);
    const changes = this.computeChanges(predictions);
    const results: ActivityResults = {};

    if (changes.length < 2) {
      return this.buildTugResult(results);
    }

    for (let i = 0; i < changes.length - 1; i++) {
      const start = changes[i];
      const end = changes[i+1];

      if (!start || !end) continue;

      const previousConsistent = changes.slice(0, i).every(elem => (elem ?? start) <= start);
      if (!previousConsistent) continue;

      results[TUG_EXECUTION_SEQUENCE[i]] = {
        start,
        end,
        duration: this.computeMillisecondsBetween(start, end),
      };
    }

    const sittingFromForwards = results[TugAction.SITTING_DOWN];
    const sittingFromBackwards = this.findSitting(predictions);
    console.log(sittingFromBackwards);
    if (!sittingFromForwards) {
      results[TugAction.SITTING_DOWN] = sittingFromBackwards;
    }

    return this.buildTugResult(results);
  }


  private computeChanges(predictions): any[] {
    const changes: number[] = [];
    let startFrom = 0;
    for(let i = 0; i < EXECUTION_SEQUENCE.length - 1; i++) {
      const result = this.forwardSearch(predictions, EXECUTION_SEQUENCE[i], EXECUTION_SEQUENCE[i+1], startFrom);
      startFrom = result ?? 0;
      changes.push(result);
    }

    return changes;
  }

  private findSitting(predictions): ActivityResult {
    const sitStart = this.backwardSearch(predictions, Activity.SIT, Activity.SITTING, predictions.length - 1);
    const sittingStart = this.backwardSearch(predictions, Activity.SITTING, Activity.TURNING, sitStart);

    return !!sitStart && !!sittingStart ? {
      start: sittingStart,
      end: sitStart,
      duration: this.computeMillisecondsBetween(sittingStart, sitStart),
    } : undefined;
  }

  private forwardSearch(predictions, endOf: Activity, startOf: Activity, from: number) {
    for (let i = from; i < predictions.length - 1; i++) {
      const prediction = predictions[i];
      const after = predictions.slice(i, i + LOOKUP_WINDOW);

      if (prediction === endOf && prediction === predictions[i+1])
        continue;

      if (allDifferentThan(after, endOf) && someEqualThan(after, startOf)) {
        return i;
      }
    }
  }

  private backwardSearch(predictions, startOf: Activity, endOf: Activity, from: number) {
    for (let i = from; i > 0; i--) {
      const prediction = predictions[i];
      const before = predictions.slice(i - LOOKUP_WINDOW, i);

      if (prediction === startOf && prediction === predictions[i-1])
        continue;

      if (allDifferentThan(before, startOf) && someEqualThan(before, endOf)) {
        return i;
      }
    }
  }

  private computeMillisecondsBetween(start: number, end: number): number {
    const endResult = this.classifications[end].timestamp.getTime();
    const startResult = this.classifications[start].timestamp.getTime();
    return endResult - startResult;
  }

  private buildTugResult(results: ActivityResults): TugResult {
    if (!results[TugAction.STANDING_UP] || !results[TugAction.SITTING_DOWN]) {
      return this.buildUnsuccessfulResult(results);
    }

    const result = this.buildSuccessfulResult(results);
    if (result.duration * 0.6 < results[TugAction.STANDING_UP].duration + results[TugAction.SITTING_DOWN].duration) {
      return this.buildUnsuccessfulResult(results);
    }
    return result;
  }

  private buildSuccessfulResult(results: ActivityResults): TugResult {
    return new TugResult(
      this.sourceDeviceId,
      this.starTime,
      true,
      this.computeMillisecondsBetween(
        results[TugAction.STANDING_UP].start,
        results[TugAction.SITTING_DOWN].end
      ),
      results,
      this.classifications
    );
  }

  private buildUnsuccessfulResult(results: ActivityResults): TugResult {
    return new TugResult(
      this.sourceDeviceId,
      this.starTime,
      false,
      -1,
      results,
      this.classifications
    );
  }
}

export function highestScorePrediction(classificationResult: ClassificationResult): ClassificationPrediction {
  return classificationResult.prediction.sort((a, b) => b.score - a.score)[0];
}

function allDifferentThan(classifications, currentActivity: Activity): boolean {
  return classifications.every((classification) => classification !== currentActivity);
}

function someEqualThan(classifications, otherActivity: Activity): boolean {
  return classifications.some((classification) => classification === otherActivity);
}

export enum Status {
  YET_TO_START,
  STARTED,
  FINISHED,
}
