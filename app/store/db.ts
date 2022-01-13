import { Couchbase, Query, QueryMeta } from "nativescript-couchbase-plugin";

const DB_NAME = "tug-test"

class Database {
  private db: Couchbase;

  constructor() {
    this.db = new Couchbase(DB_NAME)
  }

  createDocument(doc: any, id?: string): number {
    return this.db.createDocument(doc, id);
  }

  query(q: Query = { select: [QueryMeta.ALL, QueryMeta.ID] }): Array<any> {
    return this.db.query(q);
  }

  listenForChanges(callback: (changes: any) => void) {
    this.db.addDatabaseChangeListener(callback);
  }
}

export const database = new Database();
