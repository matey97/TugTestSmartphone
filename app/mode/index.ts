import { setNumber, getNumber, flush } from "@nativescript/core/application-settings"

const APP_MODE_KEY = "app_mode";

export enum ApplicationMode {
  INFERENCE,
  DATA_COLLECTION,
}

export function setApplicationMode(mode: ApplicationMode) {
  setNumber(APP_MODE_KEY, mode);
  flush();
}

export function getApplicationMode(): ApplicationMode {
  return getNumber(APP_MODE_KEY);
}
