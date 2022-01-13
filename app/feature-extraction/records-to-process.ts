import { TriAxialSensorRecord } from "nativescript-wearos-sensors/internal/sensors/triaxial/record";

export interface RecordsToProcess {
  accelerometerRecords: TriAxialSensorRecord[],
  gyroscopeRecords: TriAxialSensorRecord[]
}
