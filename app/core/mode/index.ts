import { setNumber, getNumber, setString, getString, flush } from "@nativescript/core/application-settings"
import { getNodeDiscoverer } from "nativescript-wearos-sensors/node";

const APP_MODE_KEY = "app_mode";
const SENSING_DATA_SOURCE_KEY = "sensing_data_source";
const MODEL_TYPE_KEY = "model_type";

export enum ApplicationMode {
  INFERENCE,
  DATA_COLLECTION,
}

export enum SensingDataSource {
  LOCAL_DEVICE = "LOCAL_DEVICE",
  PAIRED_DEVICE = "PAIRED_DEVICE",
}

export enum ModelType {
  MLP = "MLP",
  CNN = "CNN",
}

export function setApplicationMode(mode: ApplicationMode) {
  setNumber(APP_MODE_KEY, mode);
  flush();
}

export function getApplicationMode(): ApplicationMode {
  return getNumber(APP_MODE_KEY);
}

export function setSensingDataSource(source: SensingDataSource) {
  setString(SENSING_DATA_SOURCE_KEY, source);
  flush();
}

export function getSensingDataSource(): SensingDataSource {
  return <SensingDataSource>getString(SENSING_DATA_SOURCE_KEY);
}

export function setModelType(modelType: ModelType) {
  setString(MODEL_TYPE_KEY, modelType);
  flush();
}

export function getModelType(): ModelType {
  return <ModelType>getString(MODEL_TYPE_KEY, ModelType.MLP);
}

export async function dataSourceFromDeviceId(deviceId: string): Promise<SensingDataSource> {
  const localNode = await getNodeDiscoverer().getLocalNode();
  return deviceId === localNode.id
    ? SensingDataSource.LOCAL_DEVICE
    : SensingDataSource.PAIRED_DEVICE;
}
