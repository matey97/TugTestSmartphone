import { CommandExecutorFromMessageTask } from "~/core/tasks/device/paired/command-executor-from-message-task";
import { PairedDeviceResultSenderChecker } from "~/core/tasks/device/paired/paired-device-result-sender-checker";

export const pairedDeviceTasks = [
  new CommandExecutorFromMessageTask(),
  new PairedDeviceResultSenderChecker(),
];
