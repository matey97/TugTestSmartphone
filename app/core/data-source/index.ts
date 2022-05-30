import { getNodeDiscoverer, Node } from "nativescript-wearos-sensors/node";

export enum DataSource {
  LOCAL_DEVICE = "LOCAL_DEVICE",
  PAIRED_DEVICE = "PAIRED_DEVICE",
}

let _localNode;
export async function getLocalDataSourceNode(): Promise<Node> {
  if (!_localNode) {
    try {
      _localNode = await getNodeDiscoverer().getLocalNode();
    } catch (e) {
      _localNode = new Node(android.os.Build.ID, android.os.Build.MODEL);
    }
  }

  return _localNode;
}

export async function dataSourceFromDeviceId(deviceId: string): Promise<DataSource> {
  const localNode = await getLocalDataSourceNode();
  return deviceId === localNode.id
    ? DataSource.LOCAL_DEVICE
    : DataSource.PAIRED_DEVICE;
}
