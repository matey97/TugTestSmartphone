import { SensorType } from "nativescript-wearos-sensors/sensors";
import { TriAxialSensorRecord } from "nativescript-wearos-sensors/internal/sensors/triaxial/record";
import { wearosSensors } from "nativescript-wearos-sensors";
import { getNTPTime } from "~/core/utils/ntp-time";
import { getLocalDataSourceNode } from "~/core/data-source";

const ACC_EVENT = "accelerometerRecordsAcquired";
const GYR_EVENT = "gyroscopeRecordsAcquired";
const BATCH = 50;

export class LocalSensorListener {
  private deviceId: string = "";
  private accelerometerRecords: TriAxialSensorRecord[];
  private gyroscopeRecords: TriAxialSensorRecord[];

  private listener: android.hardware.SensorEventListener;

  constructor(private ntpTime = getNTPTime()) {
    getLocalDataSourceNode().then((node) => this.deviceId = node.id);
    this.accelerometerRecords = [];
    this.gyroscopeRecords = [];
  }

  getListener(): android.hardware.SensorEventListener {
    if (!this.listener) {
      this.listener = new android.hardware.SensorEventListener({
        onSensorChanged: (event: android.hardware.SensorEvent) => {
          const sensorRecord = this.buildSensorRecord(event);
          const recordType = this.getRecordType(event);

          const records = this.getRecordsForType(recordType);
          records.push(sensorRecord);

          this.emitRecordsIfEnough(recordType);
        },
        onAccuracyChanged: (sensor: android.hardware.Sensor, accuracy: number) => {
        }
      });
    }
    return this.listener;
  }

  private getRecordType(event: android.hardware.SensorEvent): SensorType {
    switch (event.sensor.getType()) {
      case android.hardware.Sensor.TYPE_ACCELEROMETER:
        return SensorType.ACCELEROMETER;
      case android.hardware.Sensor.TYPE_GYROSCOPE:
        return SensorType.GYROSCOPE;
      default:
        throw new Error(`Sensor record type not requested received: ${event.sensor.getStringType()}`)
    }
  }

  private buildSensorRecord(event: android.hardware.SensorEvent): TriAxialSensorRecord {
    return {
        x: event.values[0],
        y: event.values[1],
        z: event.values[2],
        deviceId: this.deviceId,
        timestamp: this.ntpTime.currentTime,
    };
  }

  private getRecordsForType(type: SensorType): TriAxialSensorRecord[] {
    return type === SensorType.ACCELEROMETER
      ? this.accelerometerRecords
      : this.gyroscopeRecords;
  }

  private emitRecordsIfEnough(type: SensorType) {
    const records = this.getRecordsForType(type);

    if (records.length !== BATCH) {
      return;
    }

    this.emitSensorRecords(records, type);
    this.clear(type);
  }

  private emitSensorRecords(records: TriAxialSensorRecord[], type: SensorType) {
    wearosSensors.emitEvent(
      type === SensorType.ACCELEROMETER ? ACC_EVENT : GYR_EVENT,
      {
        deviceId: records[0].deviceId,
        records: {
          type: type,
          records: records
        }
      }
    );
  }

  private clear(type: SensorType) {
    if (type === SensorType.ACCELEROMETER) {
      this.accelerometerRecords = [];
    } else {
      this.gyroscopeRecords = [];
    }
  }
}
