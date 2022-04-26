import { RecordsToProcess } from "~/core/feature-extraction/records-to-process";

type AxisData = number[];
type FeatureExtractionFunction = (data: AxisData, param?: number) => number;
export type Features = number[];

export interface TimedFeatures {
  features: Features,
  timestampStart: number,
  timestampEnd: number
}

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

const ACC_MAX_RANGE = 78.4532;
const GYRO_MAX_RANGE = 34.906586;

export function extractFeaturesFrom(samples: Samples): TimedFeatures {
  const [meanAccX, meanAccY, meanAccZ, meanGyroX, meanGyroY, meanGyroZ] = extractFeature(mean, samples);
  const [maxAccX, maxAccY, maxAccZ, maxGyroX, maxGyroY, maxGyroZ] = extractFeature(max, samples);
  const [minAccX, minAccY, minAccZ, minGyroX, minGyroY, minGyroZ] = extractFeature(min, samples);

  const features = [
    meanAccX, meanAccY, meanAccZ, meanGyroX, meanGyroY, meanGyroZ,
    ...extractFeature(median, samples),
    maxAccX, maxAccY, maxAccZ, maxGyroX, maxGyroY, maxGyroZ,
    minAccX, minAccY, minAccZ, minGyroX, minGyroY, minGyroZ,
    ...extractFeature(std, samples, [meanAccX, meanAccY, meanAccZ, meanGyroX, meanGyroY, meanGyroZ]),
    maxAccX - minAccX, maxAccY - minAccY, maxAccZ - minAccZ, maxGyroX - minGyroX, maxGyroY - minGyroY, maxGyroZ - minGyroZ,
    ...extractFeature(rms, samples),
    ...pitchAndRoll(samples),
    ...angle(samples)
  ]

  return {
    features,
    timestampStart: samples.timestampStart,
    timestampEnd: samples.timestampEnd
  }
}

export function toSamples(recordsToProcess: RecordsToProcess): Samples {
  return {
    accX: recordsToProcess.accelerometerRecords.map(value => value.x),
    accY: recordsToProcess.accelerometerRecords.map(value => value.y),
    accZ: recordsToProcess.accelerometerRecords.map(value => value.z),
    gyroX: recordsToProcess.gyroscopeRecords.map(value => value.x),
    gyroY: recordsToProcess.gyroscopeRecords.map(value => value.y),
    gyroZ: recordsToProcess.gyroscopeRecords.map(value => value.z),
    timestampStart: recordsToProcess.accelerometerRecords[0].timestamp.getTime(),
    timestampEnd: recordsToProcess.accelerometerRecords[recordsToProcess.accelerometerRecords.length - 1].timestamp.getTime()
  }
}

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

function extractFeature(feature: FeatureExtractionFunction, records: Samples, params?: number[]): Features {
  const xAccFeature = params ? feature(records.accX, params[0]) : feature(records.accX);
  const yAccFeature = params ? feature(records.accY, params[1]) : feature(records.accY);
  const zAccFeature = params ? feature(records.accZ, params[2]) : feature(records.accZ);
  const xGyroFeature = params ? feature(records.gyroX, params[3]) : feature(records.gyroX);
  const yGyroFeature = params ? feature(records.gyroY, params[4]) : feature(records.gyroY);
  const zGyroFeature = params ? feature(records.gyroZ, params[5]) : feature(records.gyroZ);

  return [xAccFeature, yAccFeature, zAccFeature, xGyroFeature, yGyroFeature, zGyroFeature];
}

function mean(array: AxisData): number {
  const sum = array.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum / array.length;
}

function median(array: AxisData): number {
  const copy = array.slice();
  copy.sort();
  const half = Math.floor(copy.length / 2.0);

  if (copy.length % 2)
    return copy[half];

  return (copy[half - 1] + copy[half]) / 2.0;
}

function max(array: AxisData): number {
  return Math.max(...array);
}

function min(array: AxisData): number {
  return Math.min(...array);
}

function std(array: AxisData, mean: number): number {
  return Math.sqrt(array.map(x => Math.pow(x - mean, 2))
    .reduce((a, b) => a + b) / array.length);
}

function rms(array: AxisData): number {
  return Math.sqrt(array.map(x => x * x)
    .reduce((a, b) => a + b) / array.length);
}

function pitchAndRoll(samples: Samples): Features {
  const angularFunction = (a: AxisData, b: AxisData): number => {
    const atanArray = [];
    for (let i = 0; i < a.length; i++) {
      atanArray.push(Math.atan2(a[i], b[i]) * 180 / Math.PI);
    }
    return mean(atanArray);
  }

  const { accX, accY, accZ } = samples;
  return [
    angularFunction(accY, accZ),
    angularFunction(
      accX.map(value => -value),
      Array.from(Array(accY.length).keys()).map((i) =>
        Math.sqrt(accY[i] * accY[i] + accZ[i] * accZ[i])
      )
    )
  ];
}

function angle(samples: Samples): Features {
  const simpleTrapz = (x: AxisData): number => {
    return x.reduce((prev, curr, i) => {
      if (i === x.length - 1)
        return prev;
      return prev + (curr + x[i+1]) / 2.0;
    }, 0)
  }

  return [
    simpleTrapz(samples.gyroX),
    simpleTrapz(samples.gyroY),
    simpleTrapz(samples.gyroZ)
  ];
}
