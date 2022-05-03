import { RecordsReceiverTask } from "~/core/tasks/records/records-receiver";
import { ForwardRecordsTask } from "~/core/tasks/records/forward-records-task";
import { RecordsReceiverClearTask } from "~/core/tasks/records/records-receiver-clear-task";

export const recordsTasks = [
  new RecordsReceiverTask(),
  new ForwardRecordsTask(),
  new RecordsReceiverClearTask()
];
