import { DispatchableEvent, Task, TaskOutcome, TaskParams } from "@awarns/core/tasks";
import { Classification, Classifier, getModelManager, ModelType } from "@awarns/ml-kit";
import { Record } from "@awarns/core/entities";
import { timedExecution } from "~/core/utils/time";
import { TimedClassification } from "~/core/tug-test/timed-classification";

const AIM = 'human-activity';
const EVENT = 'humanActivityPredicted';

export class ActivityClassificationTask extends Task {

  constructor(
    private enablePredictionMonitoring = false,
    private modelManager = getModelManager(),
  ) {
    super("activityClassificationTask", {
      outputEventNames: [EVENT]
    });
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void | TaskOutcome> {
      const { modelName, inputData, timestamp } = invocationEvent.data;

      const model = await this.modelManager.getModel(modelName, ModelType.CLASSIFICATION);
      const classifier = new Classifier(model);
      const predict = () => classifier.predict(inputData);

      let record: Record;
      if (this.enablePredictionMonitoring) {
        const { result, executionTime } = await timedExecution(predict);
        record = new TimedClassification(result, AIM, executionTime);
      } else {
        const result = predict();
        record = new Classification(result, AIM);
      }
      record.timestamp = new Date(timestamp);

      return {
        eventName: EVENT,
        result: record
      };
  }

}
