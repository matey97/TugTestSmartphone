import { Samples } from "~/core/recognition/recognizer/samples";

const ACC_MAX_RANGE = 78.4532;
const GYRO_MAX_RANGE = 34.906586;

export function normalize(samples: Samples): Samples {
  return {
    accX: samples.accX.map(value => normalizeInRange(value, ACC_MAX_RANGE, -ACC_MAX_RANGE)),
    accY: samples.accY.map(value => normalizeInRange(value, ACC_MAX_RANGE, -ACC_MAX_RANGE)),
    accZ: samples.accZ.map(value => normalizeInRange(value, ACC_MAX_RANGE, -ACC_MAX_RANGE)),
    gyroX: samples.gyroX.map(value => normalizeInRange(value, GYRO_MAX_RANGE, -GYRO_MAX_RANGE)),
    gyroY: samples.gyroY.map(value => normalizeInRange(value, GYRO_MAX_RANGE, -GYRO_MAX_RANGE)),
    gyroZ: samples.gyroZ.map(value => normalizeInRange(value, GYRO_MAX_RANGE, -GYRO_MAX_RANGE)),
    timestampStart: samples.timestampStart,
    timestampEnd: samples.timestampEnd
  }
}

function normalizeInRange(value: number, max: number, min: number, range: number[] = [-1, 1]): number {
  return (range[1] - range[0]) * (value - min) / (max - min) + range[0];
}
