import { RecordsReceiverTask } from "~/core/tasks/records/records-receiver";
import { ForwardRecordsTask } from "~/core/tasks/records/forward-records-task";
import { RecordsReceiverClearTask } from "~/core/tasks/records/records-receiver-clear-task";
import { writeRecordsTask } from "@awarns/persistence";
import { ExportRecordsTask } from "~/core/tasks/records/export-records-task";

export const recordsTasks = [
  new RecordsReceiverTask(),
  new ForwardRecordsTask(),
  new RecordsReceiverClearTask(),
  writeRecordsTask(),
  new ExportRecordsTask(),
];
