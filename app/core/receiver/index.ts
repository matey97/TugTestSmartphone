import { Sensor } from "~/core/sensors";

export interface TriAxial {
  sensor: Sensor,
  samples: TriAxialSample[]
}

export type TriAxialSample = {
  x: number,
  y: number,
  z: number,
  timestamp: number,
};

