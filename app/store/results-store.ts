import { database } from "~/store/db";
import { TugResult } from "~/tug-test/result";
import { QueryMeta } from "nativescript-couchbase-plugin";

export class ResultsStore {

  constructor(private db = database) {
  }

  store(result: TugResult) {
    this.db.createDocument(result);
  }

  queryAllSuccessful(): Array<TugResult> {
    const results = this.db.query({
      select: [QueryMeta.ALL],
      where: [{property: "successful", comparison: "equalTo", value: true}],
      order: [{property: "startTime", direction: "desc"}]
    });

    return results as Array<TugResult>;
  }

  onChanges(callback: (changes: any) => void) {
    this.db.listenForChanges(callback);
  }
}

export const resultsStore = new ResultsStore();
