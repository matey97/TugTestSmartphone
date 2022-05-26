import { getNodeDiscoverer, Node } from "nativescript-wearos-sensors/node";

export enum DataSource {
  LOCAL_DEVICE = "LOCAL_DEVICE",
  PAIRED_DEVICE = "PAIRED_DEVICE",
}

export async function getLocalDataSourceNode(): Promise<Node> {
  try {
    return await getNodeDiscoverer().getLocalNode();
  } catch (e) {
    return new Node(android.os.Build.ID, android.os.Build.MODEL);
  }
}

export async function dataSourceFromDeviceId(deviceId: string): Promise<DataSource> {
  const localNode = await getLocalDataSourceNode();
  return deviceId === localNode.id
    ? DataSource.LOCAL_DEVICE
    : DataSource.PAIRED_DEVICE;
}
