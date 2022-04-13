import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { hasPermission, requestPermission } from "@master.technology/permissions";
import { android as androidApp } from "@nativescript/core/application";
import { getCollectionServiceIntent } from "~/core/collection";

const activityRecognitionMissingErr = new Error(
  "Activity recognition permission has not been granted"
);

export class StartLocalSensorServiceTask extends Task {

  constructor(
  ) {
    super("startLocalSensorServiceTask");
  }

  async checkIfCanRun(): Promise<void> {
    if (android.os.Build.VERSION.SDK_INT < android.os.Build.VERSION_CODES.Q) {
      return;
    }

    const granted = hasPermission(android.Manifest.permission.ACTIVITY_RECOGNITION);
    if (!granted) {
      throw activityRecognitionMissingErr;
    }
  }

  async prepare(): Promise<void> {
    if (android.os.Build.VERSION.SDK_INT < android.os.Build.VERSION_CODES.Q) {
      return;
    }

    const granted = hasPermission(android.Manifest.permission.ACTIVITY_RECOGNITION);
    if (granted) {
      return;
    }

    await requestPermission(android.Manifest.permission.ACTIVITY_RECOGNITION);
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const intent = getCollectionServiceIntent();
    androidx.core.content.ContextCompat.startForegroundService(androidApp.context, intent);
  }
}
