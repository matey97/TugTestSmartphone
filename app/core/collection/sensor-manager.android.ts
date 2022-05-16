import { Utils } from "@nativescript/core";
import { NormalizationRange } from "~/core/recognition/preprocessing";

const androidSensors = [
  android.hardware.Sensor.TYPE_ACCELEROMETER,
  android.hardware.Sensor.TYPE_GYROSCOPE,
]

export class AndroidSensorManager {

  private sensorManager: android.hardware.SensorManager;

  constructor() {
    this.sensorManager = Utils.android.getApplicationContext().getSystemService(
      android.content.Context.SENSOR_SERVICE
    ) as android.hardware.SensorManager;
  }

  registerListenerForSensors(listener: android.hardware.SensorEventListener, delayMicro: number) {
    androidSensors.forEach((androidSensor) => {
      const sensor = this.sensorManager.getDefaultSensor(androidSensor);
      this.sensorManager.registerListener(listener, sensor, delayMicro);
    })
  }

  unregisterListenerForSensors(listener: android.hardware.SensorEventListener) {
    this.sensorManager.unregisterListener(listener);
  }

  getSensorsMaximumRange(): NormalizationRange {
    const ranges = androidSensors.map((androidSensor) =>
      this.sensorManager.getDefaultSensor(androidSensor).getMaximumRange()
    );

    return {
      accMaxRange: ranges[0],
      gyroMaxRange: ranges[1]
    };
  }
}

let _instance;
export function getAndroidSensorManager(): AndroidSensorManager {
  if (!_instance) {
    _instance = new AndroidSensorManager();
  }
  return _instance;
}

