import { Activity } from "~/core/tug-test/activities";
import { Classification } from "@awarns/ml-kit";
import { Record } from "@awarns/core/entities";

export const TUG_RECORD_TYPE = "tug-result";

export class TugResult extends Record {
  constructor(
    public deviceId: string,
    public startTime: number,
    public successful: boolean,
    public duration: number,
    public activitiesDuration: ActivityResult[],
    public classifications: Classification[]
  ) {
    super(TUG_RECORD_TYPE);
  }
}

export interface ActivityResult {
  name: Activity,
  start: number,
  end: number,
  duration: number
}
