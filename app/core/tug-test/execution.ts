import { Activity } from "~/core/tug-test/activities";
import { ActivityResult, TugResult } from "~/core/tug-test/result";
import { getNTPTime } from "~/core/utils/ntp-time";
import { Classification, ClassificationResult } from "@awarns/ml-kit";

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

export class TugExecution {

  private _classifications: Classification[] = [];
  get classifications(): Classification[] {
    return this._classifications;
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
    private starTime = getNTPTime().currentTime
  ) {
    this._current = Activity.SIT;
    this._status = Status.YET_TO_START;
  }

  addNew(classification: Classification) {
    this._classifications.push(classification);
  }

  computeResults(): TugResult {
    const changes = this.computeChanges();
    if (changes.length < 2) {
      return this.buildTugResult([]);
    }

    const results: ActivityResult[] = [];
    for (let i = 0; i < changes.length - 1; i++) {
      const { name, start } = changes[i];
      const end = changes[i+1].start;
      results.push({
        name: name,
        start: start,
        end: end,
        duration: this.computeMillisecondsBetween(start, end),
      })
    }

    return this.buildTugResult(results);
  }


  private computeChanges(): any[] {
    let iCurrentActivity = 0;

    const changes = [];
    for (let i = 0; i < this.classifications.length - 1; i++) {
      const result = this.classifications[i].classificationResult;
      const prediction = highestScorePrediction(result);
      const after = this.classifications.slice(i, i + 3);

      if (prediction.label === EXECUTION_SEQUENCE[iCurrentActivity] && prediction.label === highestScorePrediction(this.classifications[i+1].classificationResult).label)
        continue;

      const allAfterDifferentThanCurrent = after.every((elem) => highestScorePrediction(elem.classificationResult).label !== EXECUTION_SEQUENCE[iCurrentActivity]);
      const someAfterEqualThanNext = after.some((elem) => highestScorePrediction(elem.classificationResult).label === EXECUTION_SEQUENCE[iCurrentActivity + 1]);

      if (allAfterDifferentThanCurrent && someAfterEqualThanNext) {
        iCurrentActivity++;
        changes.push({
          name: EXECUTION_SEQUENCE[iCurrentActivity],
          start: i,
        });
      }
    }

    return changes;
  }

  private computeMillisecondsBetween(start: number, end: number): number {
    const endResult = this.classifications[end].timestamp.getTime();
    const startResult = this.classifications[start].timestamp.getTime();
    return endResult - startResult;
  }

  private buildTugResult(results: ActivityResult[]): TugResult {
    return results.length === EXECUTION_SEQUENCE.length - 2
      ? this.buildSuccessfulResult(results)
      : this.buildUnsuccessfulResult(results);
  }

  private buildSuccessfulResult(results: ActivityResult[]): TugResult {
    return {
      deviceId: this.sourceDeviceId,
      startTime: this.starTime,
      successful: true,
      duration: this.computeMillisecondsBetween(
        results[0].start,
        results[results.length - 1].end
      ),
      activitiesDuration: results,
      classifications: this.classifications
    };
  }

  private buildUnsuccessfulResult(results: ActivityResult[]): TugResult {
    return {
      deviceId: this.sourceDeviceId,
      startTime: this.starTime,
      successful: false,
      duration: -1,
      activitiesDuration: results,
      classifications: this.classifications
    };
  }
}

export function highestScorePrediction(classificationResult: ClassificationResult) {
  return classificationResult.prediction.sort((a, b) => b.score - a.score)[0];
}

export enum Status {
  YET_TO_START,
  STARTED,
  FINISHED,
}
