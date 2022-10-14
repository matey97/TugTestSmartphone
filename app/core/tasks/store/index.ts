import { writeRecordsTask } from "@awarns/persistence";
import { SaveRecordTask } from "~/core/tasks/store/save-record-task";
import { StoreRecordsTask } from "~/core/tasks/store/store-records-task";

export const storeTasks = [
  writeRecordsTask(),
  new SaveRecordTask(),
  new StoreRecordsTask(),
];
