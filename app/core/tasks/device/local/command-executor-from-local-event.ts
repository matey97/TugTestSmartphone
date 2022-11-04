import { Command, CommandExecutor } from "~/core/tasks/device/command-executor";
import { DataSource } from "~/core/data-source";

export class CommandExecutorFromLocalEventTask extends CommandExecutor {
  constructor() {
    super("commandExecutorFromLocalEventTask");
  }

  protected commandFromInvocationEventData(data: any): Command {
    const { action, nodeId } = data;
    return {
      action,
      from: DataSource.LOCAL_DEVICE,
      nodeId,
    }
  }

}
