import { LocalSensorListener } from "~/core/collection/local-sensor-listener";
import { ApplicationMode, getApplicationMode } from "~/core/mode";
import { Vibrate } from "nativescript-vibrate";
import { INTENT_TYPE, IntentType } from "~/core/collection/index";
import { AndroidSensorManager, getAndroidSensorManager } from "~/core/collection/sensor-manager.android";

const CHANNEL_ID = "TugTest_Service";
const CHANNEL_NAME = "TugTest Collection Service";
const NOTIFICATION_ID = 53;

@NativeClass()
@JavaProxy("es.uji.geotec.tugtest.core.collection.LocalCollectionService")
export class LocalCollectionService extends android.app.Service {

  private static wakeLock: android.os.PowerManager.WakeLock;

  private sensorManager: AndroidSensorManager;
  private notificationManager: android.app.NotificationManager;

  private sensorListener: LocalSensorListener;

  constructor() {
    super();
  }

  onCreate() {
    super.onCreate();

    this.sensorManager = getAndroidSensorManager();

    this.notificationManager = this.getSystemService(android.app.NotificationManager.class);

    const powerManager = this.getSystemService(
      android.content.Context.POWER_SERVICE
    ) as android.os.PowerManager;

    LocalCollectionService.wakeLock = powerManager.newWakeLock(
      android.os.PowerManager.PARTIAL_WAKE_LOCK,
      "TugTestSmartphone:LocalCollectionService"
    );

    this.sensorListener = new LocalSensorListener();
  }

  onStartCommand(intent: android.content.Intent, flags: number, startId: number): number {
    const intentType = intent.getIntExtra(INTENT_TYPE, IntentType.START);

    if (intentType === IntentType.STOP) {
      this.unregisterListeners();
      this.vibrateToNotifyExecutionEnd();
      this.stopSelf();
    } else {
      if (!LocalCollectionService.wakeLock.isHeld()) {
        LocalCollectionService.wakeLock.acquire();
      }
      this.runInForegroundWithNotification();
      this.registerListeners();
    }

    return android.app.Service.START_STICKY;
  }

  onDestroy() {
    if (LocalCollectionService.wakeLock.isHeld()) {
      LocalCollectionService.wakeLock.release();
    }
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
      //channel.enableVibration(true);
      //channel.setVibrationPattern([500, 500, 500, 500]);

      this.notificationManager.createNotificationChannel(channel);
    }
  }

  private registerListeners() {
    this.sensorManager.registerListenerForSensors(this.sensorListener.getListener(), 10000);
  }

  private unregisterListeners() {
    this.sensorManager.unregisterListenerForSensors(this.sensorListener.getListener());
  }

  private vibrateToNotifyExecutionEnd() {
    const mode = getApplicationMode();
    if (mode === ApplicationMode.DATA_COLLECTION) {
      return;
    }

    const vibrator = new Vibrate();
    vibrator.vibrate([500, 500, 500, 500]);
  }
}
