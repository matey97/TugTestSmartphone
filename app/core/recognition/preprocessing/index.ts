import { Samples } from "~/core/recognition/recognizer/samples";
import { getSensingDataSource } from "~/core/settings";
import { DataSource } from "~/core/data-source";
import { getAndroidSensorManager } from "~/core/collection/sensor-manager.android";

export function normalize(samples: Samples): Samples {
  const { accMaxRange, gyroMaxRange } = normalizationRanges();

  return {
    accX: samples.accX.map(value => normalizeInRange(value, accMaxRange, -accMaxRange)),
    accY: samples.accY.map(value => normalizeInRange(value, accMaxRange, -accMaxRange)),
    accZ: samples.accZ.map(value => normalizeInRange(value, accMaxRange, -accMaxRange)),
    gyroX: samples.gyroX.map(value => normalizeInRange(value, gyroMaxRange, -gyroMaxRange)),
    gyroY: samples.gyroY.map(value => normalizeInRange(value, gyroMaxRange, -gyroMaxRange)),
    gyroZ: samples.gyroZ.map(value => normalizeInRange(value, gyroMaxRange, -gyroMaxRange)),
    timestampStart: samples.timestampStart,
    timestampEnd: samples.timestampEnd
  }
}

function normalizationRanges() {
  const dataSource = getSensingDataSource();

  return dataSource === DataSource.PAIRED_DEVICE
    ? pairedDeviceRanges()
    : localDeviceRanges();
}

function pairedDeviceRanges(): NormalizationRange {
  return {
    accMaxRange: 78.4532,
    gyroMaxRange: 34.906586
  };
}

let _localRanges;
function localDeviceRanges(): NormalizationRange {
  if (!_localRanges) {
    _localRanges = getAndroidSensorManager().getSensorsMaximumRange();
  }
  return _localRanges;
}

function normalizeInRange(value: number, max: number, min: number, range: number[] = [-1, 1]): number {
  return (range[1] - range[0]) * (value - min) / (max - min) + range[0];
}

export interface NormalizationRange {
  accMaxRange: number,
  gyroMaxRange: number
}
