import { RecognitionResult } from "~/ml-model/recognition";
import { Activity, fromString } from "~/tug-test/activities";
import { ActivityResult, TugResult } from "~/tug-test/result";

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

  private _recognitionResults: RecognitionResult[] = [];
  get recognitionResults(): RecognitionResult[] {
    return this._recognitionResults;
  }

  private _previous: Activity;
  get previous(): Activity {
    return this._previous;
  }

  private _current: Activity;
  get current(): Activity {
    return this._current;
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
    private starTime = Date.now()
  ) {
    this._current = Activity.SIT;
    this._status = Status.FIRST_PHASE;
  }

  addNew(recognitionResult: RecognitionResult) {
    this._recognitionResults.push(recognitionResult);
  }

  setCurrentActivity(activity: Activity) {
    this._previous = this.current;
    this._current = activity;
  }

  checkPreviousCurrentSequence(previous: Activity, current: Activity): boolean {
    return this.previous === previous && this.current === current;
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
    for (let i = 0; i < this.recognitionResults.length - 1; i++) {
      const result = this.recognitionResults[i];
      const after = this.recognitionResults.slice(i, i + 3);

      if (result.inference.class === EXECUTION_SEQUENCE[iCurrentActivity] && result.inference.class === this.recognitionResults[i+1].inference.class)
        continue;

      const allAfterDifferentThanCurrent = after.every((elem) => elem.inference.class !== EXECUTION_SEQUENCE[iCurrentActivity]);
      const someAfterEqualThanNext = after.some((elem) => elem.inference.class === EXECUTION_SEQUENCE[iCurrentActivity + 1]);

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
    const endResult = this.recognitionResults[end];
    const startResult = this.recognitionResults[start];
    return this.meanTime(endResult) - this.meanTime(startResult);
  }

  private meanTime(result: RecognitionResult): number {
    return Math.round((result.timestampEnd + result.timestampStart) / 2);
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
      activitiesDuration: results
    };
  }

  private buildUnsuccessfulResult(results: ActivityResult[]): TugResult {
    return {
      deviceId: this.sourceDeviceId,
      startTime: this.starTime,
      successful: false,
      duration: -1,
      activitiesDuration: results
    };
  }
}

export enum Status {
  FIRST_PHASE,
  SECOND_PHASE,
  FINISHED,
}
