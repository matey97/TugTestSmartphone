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

    on("startSensorFromPairedDevice", run("accelerometerStartSensorTask"));
    on("startSensorFromPairedDevice", run("gyroscopeStartSensorTask"));

    on("stopSensorFromPairedDevice", run("accelerometerStopSensorTask"));
    on("stopSensorFromPairedDevice", run("gyroscopeStopSensorTask"));

    on("startSensorFromLocalDevice", run("startLocalSensorServiceTask"));
    on("stopSensorFromLocalDevice", run("stopLocalSensorServiceTask"));

    // Handle data collected: for INFERENCE or DATA_COLLECTION
    on("accelerometerRecordsAcquired", run("forwardRecordsTask"));
    on("gyroscopeRecordsAcquired", run("forwardRecordsTask"));

    //--------------------------
    // TUG execution (INFERENCE)
    //--------------------------
    on("tugTestStarted", run("startSensorFromDeviceTask"));

    on("accelerometerRecordsForInference", run("recordsReceiverTask"));
    on("gyroscopeRecordsForInference", run("recordsReceiverTask"));

    // Feature extraction, recognition and evaluation of TUG status
    on("enoughRecordsAcquired", run("forwardSamplesToRecognitionTask"));

    on("useLocalSourceDataCNNRecognizer", run("cnnRecognitionForDataFromLocalDeviceTask"));
    on("useLocalSourceDataMLPRecognizer", run("mlpRecognitionForDataFromLocalDeviceTask"));
    on("usePairedSourceDataCNNRecognizer", run("cnnRecognitionForDataFromPairedDeviceTask"));
    on("usePairedSourceDataMLPRecognizer", run("mlpRecognitionForDataFromPairedDeviceTask"));

    on("recognitionFinished", run("recognitionResultEvaluationTask"));

    // Automatically end TUG test
    //on("testEvaluationTaskFinished", run("evtLogger"));
    on("detectedTugTestEnding", run("endTugTestTask"));
    on("tugTestEnded", run("executionFinishedEmitter"));
    on("tugTestEnded", run("pairedDeviceResultSenderChecker"));
    on("tugTestEnded", run("evtLogger"));
    on("tugTestEnded", run("storeTugResult"));

    on("sendResultToPairedDevice", run("sendSingleMessageTask"));

    // Manual end TUG test
    on("stopExecutionCommand", run("endTugTestTask"));

    on("executionFinished", run("stopSensorFromDeviceTask"));
    on("executionFinished", run("recordsReceiverClearStateTask"));

    //----------------------
    // Data collection mode
    //----------------------
    on("collectionStarted", run("startSensorFromDeviceTask"));

    on("accelerometerRecordsForCollection", run("accumulatorTask"));
    on("gyroscopeRecordsForCollection", run("accumulatorTask"));

    on("stopCollectionCommand", run("stopSensorFromDeviceTask"));
    on("stopCollectionCommand", run("storeCollectedDataTask"));
  }
}

export const taskGraph = new TugTestTaskGraph();
