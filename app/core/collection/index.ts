import { android as androidApp } from "@nativescript/core/application";

export const COLLECTION_SERVICE_FULL_NAME = "es.uji.geotec.tugtest.core.collection.LocalCollectionService";

export function getCollectionServiceIntent(): android.content.Intent {
  const intent = new android.content.Intent();
  const componentRef = new android.content.ComponentName(
    androidApp.context,
    COLLECTION_SERVICE_FULL_NAME
  );
  return intent.setComponent(componentRef);
}
