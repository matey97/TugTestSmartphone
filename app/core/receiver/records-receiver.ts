import { TriAxialSample, WatchRecord, WatchSensor } from "@awarns/wear-os";
import { awarns } from "@awarns/core";
import { RecordsToProcess } from "~/core/receiver/records-to-process";

const WINDOW_SIZE = 50;
const WINDOW_STEP = WINDOW_SIZE / 2;

const ENOUGH_RECORDS = "enoughRecordsAcquired";

export class RecordsReceiver {

  private seriesSynced = false;
  private accelerometerRecords: TriAxialSample[] = [];
  private gyroscopeRecords: TriAxialSample[] = [];

  constructor(
  ) {
  }

  onRecordReceived(record: WatchRecord) {
    if (record.samples.length === 0)
      return;

    const watchSensor = record.type.includes('accelerometer')
      ? WatchSensor.ACCELEROMETER
      : WatchSensor.GYROSCOPE;
    this.storeNewRecords(watchSensor, record.samples as TriAxialSample[]);

    if (!this.seriesSynced)
      this.doSync();

    while (this.enoughRecords()) {
      awarns.emitEvent(
        ENOUGH_RECORDS,
        this.getRecordsToProcess()
      )
    }
  }

  clear() {
    this.accelerometerRecords = [];
    this.gyroscopeRecords = [];
  }

  private storeNewRecords(type: WatchSensor, samples: TriAxialSample[]) {
    switch (type) {
      case WatchSensor.ACCELEROMETER:
        this.accelerometerRecords.push(...samples);
        break;
      case WatchSensor.GYROSCOPE:
        this.gyroscopeRecords.push(...samples);
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
      this.gyroscopeRecords = remove(this.gyroscopeRecords, matchingThreshold);
    else
      this.accelerometerRecords = remove(this.accelerometerRecords, matchingThreshold);

    this.seriesSynced = true;
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

function remove(from: TriAxialSample[], threshold: number) {
  let i;
  for (i = 0; i < from.length; i++) {
    if (from[i].timestamp >= threshold) {
      break;
    }
  }

  return from.slice(i)
}

let _instance;
export function getRecordsReceiver(): RecordsReceiver {
  if (!_instance)
    _instance = new RecordsReceiver();
  return _instance;
}
