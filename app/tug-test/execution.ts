import { RecognitionResult } from "~/ml-model/recognition";
import { Activity, fromString } from "~/tug-test/activities";
import { ActivityResult, TugResult } from "~/tug-test/result";

const EXECUTION_SEQUENCE = [
  Activity.STANDING_UP,
  Activity.WALKING,
  Activity.TURNING,
  Activity.WALKING,
  Activity.TURNING,
  Activity.SITTING,
];
const LAG_AND_LEAD = 2;

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
    let results: ActivityResult[] = [];
    let iActivity = 0;
    let tugStart, tugEnd;
    let start = 0, end = 0;
    for (let i = LAG_AND_LEAD; i <= this.recognitionResults.length - LAG_AND_LEAD; i++) {
      const recognitionResult = this.recognitionResults[i];
      if (
        this.isUnexpectedActivity(
          fromString(recognitionResult.inference.class),
          this.expectedActivities(iActivity)
        )
      )
        continue;

      if (this.isStarting(i) && this.areEqual(recognitionResult.inference.class, EXECUTION_SEQUENCE[iActivity])) {
        if (iActivity === 0) {
          tugStart = recognitionResult.timestampStart;
          console.log(`[START] --> ${tugStart}`);
        }
        start = i;
      }

      if (this.isEnding(i)) {
        if (iActivity === EXECUTION_SEQUENCE.length - 1) {
          tugEnd = recognitionResult.timestampEnd;
          console.log(`[END] --> ${tugEnd}`);
        }
        end = i;
        const msDuration = this.computeMillisecondsBetween(start, end - 1); // Por solapamiento de ventanas
        results.push({
          name: EXECUTION_SEQUENCE[iActivity],
          start: start,
          end: end,
          duration: msDuration,
        })
        iActivity += 1;
      }
    }

    return this.buildTugResult(tugEnd - tugStart, results);
  }

  private isUnexpectedActivity(current: Activity, expected: Activity[]): boolean {
    return expected.indexOf(current) === -1;
  }

  private expectedActivities(current: number): Activity[] {
    const expected = [EXECUTION_SEQUENCE[current]]

    const next = current + 1;
    if (next < EXECUTION_SEQUENCE.length)
      expected.push(EXECUTION_SEQUENCE[next]);

    return expected;
  }

  private isStarting(current: number) {
    return this.backAndForth(
      current,
      this.areDifferent,
      this.areEqual
    );
  }

  private isEnding(current: number) {
    return this.backAndForth(
      current,
      this.areEqual,
      this.areDifferent
    );
  }

  private areEqual(a, b) {
    return a === b;
  }

  private areDifferent(a, b) {
    return a !== b
  }

  private backAndForth(current, fPrev, fNext) {
    const start = current - LAG_AND_LEAD;
    const end = current + LAG_AND_LEAD;

    const previous = this.recognitionResults
      .slice(start, current)
      .every(value => fPrev(value.inference.class, this.recognitionResults[current].inference.class));

    const next = this.recognitionResults
      .slice(current + 1, end)
      .every(value => fNext(value.inference.class, this.recognitionResults[current].inference.class));

    return previous && next;
  }

  private computeMillisecondsBetween(start: number, end: number): number {
    return this.recognitionResults[end].timestampEnd - this.recognitionResults[start].timestampStart;
  }

  private buildTugResult(totalDuration: number, results: ActivityResult[]): TugResult {
    return {
      deviceId: this.sourceDeviceId,
      startTime: this.starTime,
      successful: results.length === EXECUTION_SEQUENCE.length,
      duration: totalDuration,
      durationFromActivities: results
        .map((result) => result.duration)
        .reduce((prev, curr) => prev + curr),
      activitiesDuration: results
    };
  }
}

export enum Status {
  FIRST_PHASE,
  SECOND_PHASE,
  FINISHED,
}
