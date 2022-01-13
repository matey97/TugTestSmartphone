import {
  EventListenerGenerator,
  RunnableTaskDescriptor,
  TaskGraph
} from "nativescript-task-dispatcher/tasks/graph";

class TugTestTaskGraph implements TaskGraph {
  async describe(
    on: EventListenerGenerator,
    run: RunnableTaskDescriptor
  ): Promise<void> {
    // Start TUG test, data collection
    on("startTestCommand", run("startTugTestRequestTask"));

    on("tugTestStarted", run("accelerometerStartSensorTask"));
    on("tugTestStarted", run("gyroscopeStartSensorTask"));

    // Receive data collected
    on("accelerometerRecordsAcquired", run("recordsReceiverTask"));
    on("gyroscopeRecordsAcquired", run("recordsReceiverTask"));

    // Feature extraction, recognition and evaluation of TUG status
    on("enoughRecordsAcquired", run("featureExtractionTask"));
    on("featuresExtracted", run("recognizerTask"));
    on("recognitionFinished", run("recognitionResultEvaluationTask"));

    // Automatically end TUG test
    //on("testEvaluationTaskFinished", run("evtLogger"));
    on("detectedTugTestEnding", run("endTugTestTask"));
    on("tugTestEnded", run("stopTestCommandEmitter"));
    on("tugTestEnded", run("evtLogger"));
    on("tugTestEnded", run("storeTugResult"));

    // Manual end TUG test
    on("stopTestCommand", run("accelerometerStopSensorTask"));
    on("stopTestCommand", run("gyroscopeStopSensorTask"));
    on("stopTestCommand", run("recordsReceiverClearStateTask"));
  }
}

export const taskGraph = new TugTestTaskGraph();
