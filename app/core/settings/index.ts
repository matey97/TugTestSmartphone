import { setNumber, getNumber, setString, getString, flush } from "@nativescript/core/application-settings"
import { ApplicationMode } from "~/core/application-mode";
import { DataSource } from "~/core/data-source";
import { ModelType } from "~/core/recognition/model";

const APP_MODE_KEY = "app_mode";
const SENSING_DATA_SOURCE_KEY = "sensing_data_source";
function modelTypeKey(dataSource: DataSource): string {
  return `${dataSource.toLowerCase()}_model_type`;
}

export function setApplicationMode(mode: ApplicationMode) {
  setNumber(APP_MODE_KEY, mode);
  flush();
}

export function getApplicationMode(): ApplicationMode {
  return getNumber(APP_MODE_KEY);
}

export function setSensingDataSource(source: DataSource) {
  setString(SENSING_DATA_SOURCE_KEY, source);
  flush();
}

export function getSensingDataSource(): DataSource {
  return <DataSource>getString(SENSING_DATA_SOURCE_KEY);
}

export function setModelType(modelType: ModelType, dataSource: DataSource) {
  setString(modelTypeKey(dataSource), modelType);
  flush();
}

export function getModelType(dataSource: DataSource): ModelType {
  return <ModelType>getString(modelTypeKey(dataSource), ModelType.CNN);
}
