import { TriAxialSample } from "~/core/receiver/index";

export interface RecordsToProcess {
  accelerometerRecords: TriAxialSample[],
  gyroscopeRecords: TriAxialSample[]
}
