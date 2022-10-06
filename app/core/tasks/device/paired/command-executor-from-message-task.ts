import { Action, Command, CommandExecutor } from "~/core/tasks/device/command-executor";
import { MessageReceived, ReceivedMessage } from "@awarns/wear-os";
import { DataSource } from "~/core/data-source";

export class CommandExecutorFromMessageTask extends CommandExecutor {

  constructor() {
    super("commandExecutorFromMessageTask");
  }

  protected commandFromInvocationEventData(data: any): Command {
    const messageReceived = data as MessageReceived;
    const content = messageReceived.content as ReceivedMessage;
    const message = content.plainMessage.message as Action;

    return {
      action: message,
      from: DataSource.PAIRED_DEVICE,
      nodeId: content.senderNodeId
    }
  }
}
