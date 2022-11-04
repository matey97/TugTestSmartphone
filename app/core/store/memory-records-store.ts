import { knownFolders } from "@nativescript/core";
import { Record } from "@awarns/core/entities";

export class InMemoryRecordsStore {
  private records: Record[] = [];

  public addRecord(record: Record): void {
    this.records.push(record);
  }

  public store(fileName: string, clearAfter: boolean = false): Promise<any> {
    if (this.records.length === 0) {
      throw new Error("Nothing to store!");
    }
    const folder = knownFolders.documents();
    const file = folder.getFile(fileName);

    const recordsToStore = this.records.slice();

    if (clearAfter) this.clear();

    return file.writeText(JSON.stringify(recordsToStore));
  }

  public clear() {
    this.records = [];
  }
}

let _instance;
export function getInMemoryRecordsStore(): InMemoryRecordsStore {
  if (!_instance)
    _instance = new InMemoryRecordsStore();
  return _instance;
}
