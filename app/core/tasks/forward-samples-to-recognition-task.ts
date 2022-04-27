import { Task, TaskOutcome, TaskParams } from "nativescript-task-dispatcher/tasks";
import { DispatchableEvent } from "nativescript-task-dispatcher/events";
import { getModelType, getSensingDataSource, ModelType, SensingDataSource } from "~/core/mode";
import { RecordsToProcess } from "~/core/feature-extraction/records-to-process";
import { normalize } from "~/core/recognition/preprocessing";
import { toSamples } from "~/core/recognition/recognizer/samples";

const LOCAL_CNN = "useLocalSourceDataCNNRecognizer";
const LOCAL_MLP = "useLocalSourceDataMLPRecognizer";
const PAIRED_CNN = "usePairedSourceDataCNNRecognizer";
const PAIRED_MLP = "usePairedSourceDataMLPRecognizer";

export class ForwardSamplesToRecognitionTask extends Task {

  constructor() {
    super("forwardSamplesToRecognitionTask", {
      outputEventNames: [LOCAL_CNN, LOCAL_MLP, PAIRED_CNN, PAIRED_MLP]
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<void | TaskOutcome> {
    const records: RecordsToProcess = invocationEvent.data as RecordsToProcess;
    const samples = normalize(toSamples(records));

    const dataSource = getSensingDataSource();
    const modelType = getModelType();

    let event;
    if (dataSource === SensingDataSource.LOCAL_DEVICE) {
      if (modelType === ModelType.CNN) {
        event = LOCAL_CNN;
      } else {
        event = LOCAL_MLP;
      }
    } else {
      if (modelType === ModelType.CNN) {
        event = PAIRED_CNN;
      } else {
        event = PAIRED_MLP;
      }
    }

    return {
      eventName: event,
      result: samples,
    }
  }
}
