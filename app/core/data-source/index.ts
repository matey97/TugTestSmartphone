import { getNodeDiscoverer } from "nativescript-wearos-sensors/node";

export enum DataSource {
  LOCAL_DEVICE = "LOCAL_DEVICE",
  PAIRED_DEVICE = "PAIRED_DEVICE",
}

export async function dataSourceFromDeviceId(deviceId: string): Promise<DataSource> {
  const localNode = await getNodeDiscoverer().getLocalNode();
  return deviceId === localNode.id
    ? DataSource.LOCAL_DEVICE
    : DataSource.PAIRED_DEVICE;
}
