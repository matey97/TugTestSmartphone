import { setNumber, getNumber, flush } from "@nativescript/core/application-settings"

const APP_MODE_KEY = "app_mode";
const SENSING_DATA_SOURCE_KEY = "sensing_data_source";

export enum ApplicationMode {
  INFERENCE,
  DATA_COLLECTION,
}

export enum SensingDataSource {
  LOCAL_DEVICE,
  PAIRED_DEVICE,
}

export function setApplicationMode(mode: ApplicationMode) {
  setNumber(APP_MODE_KEY, mode);
  flush();
}

export function getApplicationMode(): ApplicationMode {
  return getNumber(APP_MODE_KEY);
}

export function setSensingDataSource(source: SensingDataSource) {
  setNumber(SENSING_DATA_SOURCE_KEY, source);
  flush();
}

export function getSensingDataSource(): SensingDataSource {
  return getNumber(SENSING_DATA_SOURCE_KEY);
}
