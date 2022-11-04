import { SimpleTask } from "@awarns/core/tasks";
import { TugResult } from "~/core/tug-test/result";
import { Classification } from "@awarns/ml-kit";

export const loggers = [
  new SimpleTask("predictionResultLogger", async({ evt }) => {
    const classification = evt.data as Classification;
    log("PREDICTION RESULT LOGGER", JSON.stringify(classification.classificationResult));
  }),

  new SimpleTask("tugResultLogger", async({ evt }) => {
    const { deviceId, startTime, classifications, ...toLog } = evt.data as TugResult;
    log("TUG RESULT LOGGER", JSON.stringify(toLog));
  })
];

function log(tag: string, message: string) {
  console.log(`[${tag}]: ${message}`);
}
