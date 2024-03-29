import {
  setNumber,
  getNumber,
  setString,
  getString,
  flush,
} from "@nativescript/core/application-settings"
import { ApplicationMode } from "~/core/application-mode";
import { DataSource } from "~/core/data-source";
import { ModelArchitecture } from "@awarns/ml-kit";

const APP_MODE_KEY = "app_mode";
const SENSING_DATA_SOURCE_KEY = "sensing_data_source";
function modelTypeKey(dataSource: DataSource): string {
  return `${dataSource.toLowerCase()}_model_type`;
}
const LOCAL_START_COUNTDOWN = "local_start_countdown_key";

export function setApplicationMode(mode: ApplicationMode): void {
  setNumber(APP_MODE_KEY, mode);
  flush();
}

export function getApplicationMode(): ApplicationMode {
  return getNumber(APP_MODE_KEY);
}

export function setSensingDataSource(source: DataSource): void {
  setString(SENSING_DATA_SOURCE_KEY, source);
  flush();
}

export function getSensingDataSource(): DataSource {
  return <DataSource>getString(SENSING_DATA_SOURCE_KEY);
}

export function setModelEnabledForDataSource(id: string, dataSource: DataSource): void {
  setString(modelTypeKey(dataSource), id);
  flush();
}

export function getModelEnabledForDataSource(dataSource: DataSource): string {
  return <ModelArchitecture>getString(modelTypeKey(dataSource));
}

export function setLocalDeviceStartCountdown(countdown: number): void {
  setNumber(LOCAL_START_COUNTDOWN, countdown);
  flush();
}

export function getLocalDeviceStartCountdown(): number {
  return getNumber(LOCAL_START_COUNTDOWN, 5);
}
