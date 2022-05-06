import { Utils } from "@nativescript/core";

export const INTENT_TYPE = "intent_type";
const COLLECTION_SERVICE_FULL_NAME = "es.uji.geotec.tugtest.core.collection.LocalCollectionService";

export function startCollectionService() {
  const intent = getCollectionServiceIntent(IntentType.START);
  androidx.core.content.ContextCompat.startForegroundService(Utils.android.getApplicationContext(), intent);
}

export function stopCollectionService() {
  const intent = getCollectionServiceIntent(IntentType.STOP);
  androidx.core.content.ContextCompat.startForegroundService(Utils.android.getApplicationContext(), intent);
}

export function getCollectionServiceIntent(type: IntentType): android.content.Intent {
  const intent = new android.content.Intent();
  intent.putExtra(INTENT_TYPE, type);
  const componentRef = new android.content.ComponentName(
    Utils.android.getApplicationContext(),
    COLLECTION_SERVICE_FULL_NAME
  );
  return intent.setComponent(componentRef);
}

export enum IntentType {
  START, STOP
}
