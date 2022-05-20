import {
  setNumber,
  getNumber,
  setString,
  getString,
  flush,
  setBoolean,
  getBoolean
} from "@nativescript/core/application-settings"
import { ApplicationMode } from "~/core/application-mode";
import { DataSource } from "~/core/data-source";
import { ModelType } from "~/core/recognition/model";

const APP_MODE_KEY = "app_mode";
const SENSING_DATA_SOURCE_KEY = "sensing_data_source";
function modelTypeKey(dataSource: DataSource): string {
  return `${dataSource.toLowerCase()}_model_type`;
}
const GPU_DELEGATE_KEY = "gpu_delegate_key";
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

export function setModelType(modelType: ModelType, dataSource: DataSource): void {
  setString(modelTypeKey(dataSource), modelType);
  flush();
}

export function getModelType(dataSource: DataSource): ModelType {
  return <ModelType>getString(modelTypeKey(dataSource), ModelType.CNN);
}

export function setGPUDelegateEnabled(enabled: boolean): void {
  setBoolean(GPU_DELEGATE_KEY, enabled);
  flush();
}

export function isGPUDelegateEnabled(): boolean {
  return getBoolean(GPU_DELEGATE_KEY, false);
}

export function setLocalDeviceStartCountdown(countdown: number): void {
  setNumber(LOCAL_START_COUNTDOWN, countdown);
  flush();
}

export function getLocalDeviceStartCountdown(): number {
  return getNumber(LOCAL_START_COUNTDOWN, 5);
}
