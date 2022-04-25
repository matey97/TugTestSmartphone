import { android as androidApp } from "@nativescript/core/application";

export const INTENT_TYPE = "intent_type";
const COLLECTION_SERVICE_FULL_NAME = "es.uji.geotec.tugtest.core.collection.LocalCollectionService";

export function startCollectionService() {
  const intent = getCollectionServiceIntent(IntentType.START);
  androidx.core.content.ContextCompat.startForegroundService(androidApp.context, intent);
}

export function stopCollectionService() {
  const intent = getCollectionServiceIntent(IntentType.STOP);
  androidx.core.content.ContextCompat.startForegroundService(androidApp.context, intent);
}

export function getCollectionServiceIntent(type: IntentType): android.content.Intent {
  const intent = new android.content.Intent();
  intent.putExtra(INTENT_TYPE, type);
  const componentRef = new android.content.ComponentName(
    androidApp.context,
    COLLECTION_SERVICE_FULL_NAME
  );
  return intent.setComponent(componentRef);
}

export enum IntentType {
  START, STOP
}
