import { Activity } from "~/core/tug-test/activities";
import { Classification } from "@awarns/ml-kit";

export interface TugResult {
  deviceId: string,
  startTime: number,
  successful: boolean,
  duration: number
  activitiesDuration: ActivityResult[],
  classifications: Classification[]
}

export interface ActivityResult {
  name: Activity,
  start: number,
  end: number,
  duration: number
}
