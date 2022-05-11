import { TriAxialSensorRecord } from "nativescript-wearos-sensors/internal/sensors/triaxial/record";
import { SensorRecords } from "nativescript-wearos-sensors/internal/sensors/sensor-record";
import { SensorType } from "nativescript-wearos-sensors/sensors";
import { wearosSensors } from "nativescript-wearos-sensors";
import { RecordsToProcess } from "~/core/receiver/records-to-process";

const WINDOW_SIZE = 50;
const WINDOW_STEP = WINDOW_SIZE / 2;

const ENOUGH_RECORDS = "enoughRecordsAcquired";

export class RecordsReceiver {

  private seriesSynced = false;
  private accelerometerRecords: TriAxialSensorRecord[] = [];
  private gyroscopeRecords: TriAxialSensorRecord[] = [];

  constructor(
  ) {
  }

  onRecordsReceived(records: SensorRecords<TriAxialSensorRecord>) {
    if (records.records.length === 0)
      return;

    this.storeNewRecords(records.type, records.records);

    if (!this.seriesSynced)
      this.doSync();

    while (this.enoughRecords()) {
      wearosSensors.emitEvent(
        ENOUGH_RECORDS,
        this.getRecordsToProcess()
      )
    }
  }

  clear() {
    this.accelerometerRecords = [];
    this.gyroscopeRecords = [];
  }

  private storeNewRecords(type: SensorType, records: TriAxialSensorRecord[]) {
    switch (type) {
      case SensorType.ACCELEROMETER:
        this.accelerometerRecords.push(...records);
        break;
      case SensorType.GYROSCOPE:
        this.gyroscopeRecords.push(...records);
        break;
    }
  }

  private doSync() {
    if (this.accelerometerRecords.length === 0 || this.gyroscopeRecords.length === 0)
      return;

    const oldestAcc = this.accelerometerRecords[0].timestamp
    const oldestGyro = this.gyroscopeRecords[0].timestamp

    const matchingThreshold = Math.max(oldestAcc, oldestGyro);

    if (matchingThreshold === oldestAcc)
      this.gyroscopeRecords = this.remove(this.gyroscopeRecords, matchingThreshold);
    else
      this.accelerometerRecords = this.remove(this.accelerometerRecords, matchingThreshold);

    this.seriesSynced = true;
  }

  private remove(from: TriAxialSensorRecord[], threshold: number) {
    let i;
    for (i = 0; i < from.length; i++) {
      if (from[i].timestamp >= threshold) {
        break;
      }
    }

    return from.slice(i)
  }

  private enoughRecords(): boolean {
    return this.accelerometerRecords.length >= WINDOW_SIZE && this.gyroscopeRecords.length >= WINDOW_SIZE;
  }

  private getRecordsToProcess(): RecordsToProcess {
    const accRecordsToProcess = this.accelerometerRecords.slice(0, WINDOW_SIZE);
    const gyroRecordsToProcess = this.gyroscopeRecords.slice(0, WINDOW_SIZE);
    this.updateRemainingRecords();

    return {
      accelerometerRecords: accRecordsToProcess,
      gyroscopeRecords: gyroRecordsToProcess
    };
  }


  private updateRemainingRecords() {
    this.accelerometerRecords.splice(0, WINDOW_STEP);
    this.gyroscopeRecords.splice(0, WINDOW_STEP);
  }
}

let _instance;
export function getRecordsReceiver(): RecordsReceiver {
  if (!_instance)
    _instance = new RecordsReceiver();
  return _instance;
}
