import { Activity } from "~/core/tug-test/activities";
import { RecognitionResult } from "~/core/recognition";

export interface TugResult {
  deviceId: string,
  startTime: number,
  successful: boolean,
  duration: number
  activitiesDuration: ActivityResult[],
  recognitionResults: RecognitionResult[]
}

export interface ActivityResult {
  name: Activity,
  start: number,
  end: number,
  duration: number
}
