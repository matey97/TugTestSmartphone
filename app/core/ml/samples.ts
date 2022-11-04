import { RecordsToProcess } from "~/core/receiver/records-to-process";

export type AxisData = number[];

export interface Samples {
  accX: AxisData,
  accY: AxisData,
  accZ: AxisData,
  gyroX: AxisData,
  gyroY: AxisData,
  gyroZ: AxisData,
  timestampStart: number,
  timestampEnd: number
}

export function toSamples(recordsToProcess: RecordsToProcess): Samples {
  return {
    accX: recordsToProcess.accelerometerRecords.map(value => value.x),
    accY: recordsToProcess.accelerometerRecords.map(value => value.y),
    accZ: recordsToProcess.accelerometerRecords.map(value => value.z),
    gyroX: recordsToProcess.gyroscopeRecords.map(value => value.x),
    gyroY: recordsToProcess.gyroscopeRecords.map(value => value.y),
    gyroZ: recordsToProcess.gyroscopeRecords.map(value => value.z),
    timestampStart: recordsToProcess.accelerometerRecords[0].timestamp,
    timestampEnd: recordsToProcess.accelerometerRecords[recordsToProcess.accelerometerRecords.length - 1].timestamp
  }
}
