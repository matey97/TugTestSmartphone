import { CouchBase, Query, QueryMeta } from "@triniwiz/nativescript-couchbase";

const DB_NAME = "tug-test"

class Database {
  private db: CouchBase;

  constructor() {
    this.db = new CouchBase(DB_NAME)
  }

  createDocument(doc: any, id?: string): number {
    return this.db.createDocument(doc, id);
  }

  getDocument(id: string): any {
    return this.db.getDocument(id);
  }

  query(q: Query = { select: [QueryMeta.ALL, QueryMeta.ID] }): Array<any> {
    return this.db.query(q);
  }

  listenForChanges(callback: (changes: any) => void) {
    this.db.addDatabaseChangeListener(callback);
  }

  clear(){
    this.db.inBatch(() => {
      const all = this.query();
      all.map((doc) => this.db.deleteDocument(doc.id));
    })
  }
}

export const database = new Database();
