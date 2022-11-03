import { Classification } from "@awarns/ml-kit";
import { Record } from "@awarns/core/entities";

export const TUG_RECORD_TYPE = "tug-result";
export type ActivityResults = {[key: string]: ActivityResult};

export class TugResult extends Record {
  constructor(
    public deviceId: string,
    public startTime: number,
    public successful: boolean,
    public duration: number,
    public activitiesResults: ActivityResults,
    public classifications: Classification[]
  ) {
    super(TUG_RECORD_TYPE);
  }
}

export interface ActivityResult {
  start: number,
  end: number,
  duration: number
}
