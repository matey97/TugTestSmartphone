import { Activity } from "~/tug-test/activities";

export interface TugResult {
  deviceId: string,
  startTime: number,
  successful: boolean,
  duration: number
  activitiesDuration: ActivityResult[],
}

export interface ActivityResult {
  name: Activity,
  start: number,
  end: number,
  duration: number
}
