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
    // Start TUG execution (INFERENCE MODE) or data collection (DATA_COLLECTION MODE)
    on("startExecutionCommand", run("startTugTestRequestTask"));
    on("startCollectionCommand", run("startCollectionTask"));

    // Handle data collected: for INFERENCE or DATA_COLLECTION
    on("accelerometerRecordsAcquired", run("forwardRecordsTask"));
    on("gyroscopeRecordsAcquired", run("forwardRecordsTask"));

    //--------------------------
    // TUG execution (INFERENCE)
    //--------------------------
    on("tugTestStarted", run("accelerometerStartSensorTask"));
    on("tugTestStarted", run("gyroscopeStartSensorTask"));

    on("accelerometerRecordsForInference", run("recordsReceiverTask"));
    on("gyroscopeRecordsForInference", run("recordsReceiverTask"));

    // Feature extraction, recognition and evaluation of TUG status
    on("enoughRecordsAcquired", run("featureExtractionTask"));
    on("featuresExtracted", run("recognizerTask"));
    on("recognitionFinished", run("recognitionResultEvaluationTask"));

    // Automatically end TUG test
    //on("testEvaluationTaskFinished", run("evtLogger"));
    on("detectedTugTestEnding", run("endTugTestTask"));
    on("tugTestEnded", run("executionFinishedEmitter"));
    on("tugTestEnded", run("prepareSimpleResultTask"));
    on("tugTestEnded", run("evtLogger"));
    on("tugTestEnded", run("storeTugResult"));

    on("simpleResultPrepared", run("sendResultTask"));

    // Manual end TUG test
    on("stopExecutionCommand", run("endTugTestTask"));

    on("executionFinished", run("accelerometerStopSensorTask"));
    on("executionFinished", run("gyroscopeStopSensorTask"));
    on("executionFinished", run("recordsReceiverClearStateTask"));

    //----------------------
    // Data collection mode
    //----------------------
    on("collectionStarted", run("accelerometerStartSensorTask"));
    on("collectionStarted", run("gyroscopeStartSensorTask"));

    on("accelerometerRecordsForCollection", run("accumulatorTask"));
    on("gyroscopeRecordsForCollection", run("accumulatorTask"));

    on("stopCollectionCommand", run("accelerometerStopSensorTask"));
    on("stopCollectionCommand", run("gyroscopeStopSensorTask"));
    on("stopCollectionCommand", run("storeCollectedDataTask"));
  }
}

export const taskGraph = new TugTestTaskGraph();
