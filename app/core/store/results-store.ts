import { database } from "~/core/store/db";
import { TugResult } from "~/core/tug-test/result";
import { QueryMeta } from "@triniwiz/nativescript-couchbase";

export class ResultsStore {

  constructor(private db = database) {
  }

  store(result: TugResult) {
    this.db.createDocument(result);
  }

  getById(id: string): TugResult {
    const doc = this.db.getDocument(id);
    return doc as TugResult;
  }

  queryAll(): Array<TugResult> {
    const results = this.db.query({
      select: [QueryMeta.ALL],
      order: [{property: "startTime", direction: "desc"}]
    });

    return results as Array<TugResult>;
  }

  onChanges(callback: (changes: any) => void) {
    this.db.listenForChanges(callback);
  }

  clear(){
    this.db.clear();
  }
}

export const resultsStore = new ResultsStore();
