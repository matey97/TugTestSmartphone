import { SimpleTask } from "@awarns/core/tasks";
import { RecognitionResult } from "~/core/recognition";
import { TugResult } from "~/core/tug-test/result";

export const loggers = [
  new SimpleTask("recognitionResultLogger", async({ evt }) => {
    const recognitionResult = evt.data as RecognitionResult;
    log("RECOGNITION RESULT LOGGER", JSON.stringify(recognitionResult));
  }),

  new SimpleTask("tugResultLogger", async({ evt }) => {
    const { deviceId, startTime, recognitionResults, ...toLog } = evt.data as TugResult;
    log("TUG RESULT LOGGER", JSON.stringify(toLog));
  })
];

function log(tag: string, message: string) {
  console.log(`[${tag}]: ${message}`);
}
