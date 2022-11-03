import { DispatchableEvent, Task, TaskOutcome, TaskParams } from "@awarns/core/tasks";
import { Classification, Classifier, getModelManager, ModelType } from "@awarns/ml-kit";

const EVENT = 'humanActivityPredicted';

export class ActivityClassificationTask extends Task {

  constructor(private modelManager = getModelManager()) {
    super("activityClassificationTask", {
      outputEventNames: [EVENT]
    });
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
      const { modelName, inputData, timestamp } = invocationEvent.data;

      const model = await this.modelManager.getModel(modelName, ModelType.CLASSIFICATION);
      const classifier = new Classifier(model);
      const classificationResult = classifier.predict(inputData);
      const record = new Classification(classificationResult, 'human-activity');
      record.timestamp = new Date(timestamp);

      return {
        eventName: EVENT,
        result: record
      };
  }

}
