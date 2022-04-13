export function getSensorListener(): android.hardware.SensorEventListener {
  return new android.hardware.SensorEventListener({
    onSensorChanged: event => {
      if (event.sensor.getType() === android.hardware.Sensor.TYPE_ACCELEROMETER) {
        console.log(`[${Date.now()}]: ACCELEROMETER RECEIVED!!!`);
        return;
      }

      if (event.sensor.getType() === android.hardware.Sensor.TYPE_GYROSCOPE) {
        console.log(`[${Date.now()}]: GYROSCOPE RECEIVED!!!`);
        return;
      }
    },
    onAccuracyChanged: (
      sensor: android.hardware.Sensor,
      accuracy: number
    ) => {
      console.log('AccuracyChanged:', accuracy);
    }
  });

}
