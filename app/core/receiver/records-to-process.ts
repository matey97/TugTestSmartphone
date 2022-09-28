import { TriAxialSample } from "@awarns/wear-os";

export interface RecordsToProcess {
  accelerometerRecords: TriAxialSample[],
  gyroscopeRecords: TriAxialSample[]
}
