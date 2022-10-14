import { classificationTask } from "@awarns/ml-kit";
import { getModelEnabledForDataSource } from "~/core/settings";
import { DataSource } from "~/core/data-source";
import { PredictionResultEvaluationTask } from "~/core/tasks/tug/prediction-result-evaluation";
import { PrepareAcquiredDataForClassificationTask } from "~/core/tasks/tug/prepare-acquired-data";
import { EndTugTestTask } from "~/core/tasks/tug/end-tug-test";

export const tugTestTasks = [
  classificationTask('human-activity', () => getModelEnabledForDataSource(DataSource.LOCAL_DEVICE), 'FromLocalDeviceData'),
  classificationTask('human-activity', () => getModelEnabledForDataSource(DataSource.PAIRED_DEVICE), 'FromPairedDeviceData'),
  new PrepareAcquiredDataForClassificationTask(),
  new PredictionResultEvaluationTask(),
  new EndTugTestTask(),
];
