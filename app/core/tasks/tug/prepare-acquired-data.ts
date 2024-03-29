import { DispatchableEvent, Task, TaskOutcome, TaskParams } from "@awarns/core/tasks";
import { RecordsToProcess } from "~/core/receiver/records-to-process";
import { normalize } from "~/core/ml/normalization";
import { toSamples } from "~/core/ml/samples";
import { getSensingDataSource } from "~/core/settings";
import { InputData, ModelArchitecture } from "@awarns/ml-kit";
import { getAppModelManager } from "~/core/ml/model/app-model-manager";
import { extractFeaturesFrom } from "~/core/ml/feature-extraction";

const EVENT = 'dataForClassificationReady';

export class PrepareAcquiredDataForClassificationTask extends Task {
  constructor(
    private appModelManager = getAppModelManager()
  ) {
    super('prepareAcquiredDataForClassificationTask', {
      outputEventNames: [EVENT]
    });
  }
  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
    const records: RecordsToProcess = invocationEvent.data as RecordsToProcess;
    const samples = normalize(toSamples(records));

    const dataSource = getSensingDataSource();
    const model = this.appModelManager.getModelEnabledForDataSource(dataSource);

    const data: InputData = model.architecture === ModelArchitecture.CNN
      ? [
        samples.accX, samples.accY, samples.accZ, samples.gyroX, samples.gyroY, samples.gyroZ
      ].flat()
      : extractFeaturesFrom(samples);

    return {
      eventName: EVENT,
      result: {
        modelName: model.id,
        inputData: data,
        timestamp: Math.round((samples.timestampEnd + samples.timestampStart) / 2)
      }
    };
  }

}
