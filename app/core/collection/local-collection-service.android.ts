import { LocalSensorListener } from "~/core/collection/local-sensor-listener";

const CHANNEL_ID = "TugTest_Service";
const CHANNEL_NAME = "TugTest Collection Service";
const NOTIFICATION_ID = 53;

@NativeClass()
@JavaProxy("es.uji.geotec.tugtest.core.collection.LocalCollectionService")
export class LocalCollectionService extends android.app.Service {

  private sensorManager: android.hardware.SensorManager;
  private notificationManager: android.app.NotificationManager;
  private wakeLock: android.os.PowerManager.WakeLock;

  private sensorListener: LocalSensorListener;

  constructor() {
    super();
  }

  onCreate() {
    super.onCreate();

    this.sensorManager = this.getSystemService(
      android.content.Context.SENSOR_SERVICE
    ) as android.hardware.SensorManager;

    this.notificationManager = this.getSystemService(android.app.NotificationManager.class);

    const powerManager = this.getSystemService(
      android.content.Context.POWER_SERVICE
    ) as android.os.PowerManager;

    this.wakeLock = powerManager.newWakeLock(
      android.os.PowerManager.PARTIAL_WAKE_LOCK,
      "TugTestSmartphone:LocalCollectionService"
    );

    this.sensorListener = new LocalSensorListener();
  }

  onStartCommand(intent: android.content.Intent, flags: number, startId: number): number {
    this.wakeLock.acquire();
    this.runInForegroundWithNotification();
    this.registerListeners();

    return android.app.Service.START_STICKY;
  }

  onDestroy() {
    this.unregisterListeners();
    this.wakeLock.release();
    this.stopForeground(true);
  }

  private runInForegroundWithNotification() {
    this.startForeground(NOTIFICATION_ID, this.getForegroundNotification());
  }

  private getForegroundNotification(): android.app.Notification {
    this.setupNotificationChannelIfNeeded(CHANNEL_ID, CHANNEL_NAME);

    const notification = new android.app.Notification.Builder(this)
      .setOngoing(true)
      .setContentTitle("TugTest working")
      .setContentText("Inertial data is being collected")
      .setSmallIcon(this
        .getResources()
        .getIdentifier("ic_launcher_foreground", "drawable", this.getPackageName())
      );

    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O)
      notification.setChannelId(CHANNEL_ID);

    return notification.build();
  }

  private setupNotificationChannelIfNeeded(id: string, name: string): void {
    if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
      if (this.notificationManager.getNotificationChannel(id) !== null) {
        return;
      }

      const channel = new android.app.NotificationChannel(
        id,
        name,
        android.app.NotificationManager.IMPORTANCE_HIGH
      );
      channel.enableVibration(true);
      channel.setVibrationPattern([500, 500, 500, 500]);

      this.notificationManager.createNotificationChannel(channel);
    }
  }

  private registerListeners() {
    const accelerometer = this.sensorManager.getDefaultSensor(android.hardware.Sensor.TYPE_ACCELEROMETER);
    const gyroscope = this.sensorManager.getDefaultSensor(android.hardware.Sensor.TYPE_GYROSCOPE);
    this.sensorManager.registerListener(this.sensorListener.getListener(), accelerometer, 10000);
    this.sensorManager.registerListener(this.sensorListener.getListener(), gyroscope, 10000);
  }

  private unregisterListeners() {
    this.sensorManager.unregisterListener(this.sensorListener.getListener());
  }
}
