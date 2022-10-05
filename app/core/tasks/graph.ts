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

    on("plainMessageReceived", run("commandExecutorFromMessageTask"));

    on("watchAccelerometerSamplesAcquired", run("forwardRecordsTask"));
    on("watchGyroscopeSamplesAcquired", run("forwardRecordsTask"));

    //--------------------------
    // TUG execution (INFERENCE)
    //--------------------------

    on("tugStarted", run("startDetectingWatchAccelerometerChanges"));
    on("tugStarted", run("startDetectingWatchGyroscopeChanges"));

    on("watchAccelerometerSamplesForInference", run("recordsReceiverTask"));
    on("watchGyroscopeSamplesForInference", run("recordsReceiverTask"));

    on("enoughRecordsAcquired", run("prepareAcquiredDataForClassificationTask"));

    on("localDeviceDataForClassificationReady", run("humanActivityClassificationFromLocalDeviceData"));
    on("pairedDeviceDataForClassificationReady", run("humanActivityClassificationFromPairedDeviceData"));

    on("humanActivityPredicted", run("predictionResultEvaluationTask"));
    on("humanActivityPredicted", run("predictionResultLogger"));

    on("detectedTugTestEnding", run("endTugTestTask"));
    on("tugTestEnded", run("stopDetectingWatchAccelerometerChanges"));
    on("tugTestEnded", run("stopDetectingWatchGyroscopeChanges"));
    on("tugTestEnded", run("recordsReceiverClearTask"));
    on("tugTestEnded", run("pairedDeviceResultSenderChecker"));
    on("tugTestEnded", run("tugResultLogger"));
    on("tugTestEnded", run("storeTugResult"));

    on("sendResultToPairedDevice", run("sendPlainMessageToWatch"));

    on("tugStopped", run("endTugTestTask"));

    //----------------------
    // Data collection mode
    //----------------------
    on("collectionStarted", run("startDetectingWatchAccelerometerChanges"));
    on("collectionStarted", run("startDetectingWatchGyroscopeChanges"));

    on("watchAccelerometerSamplesForCollection", run("saveRecordTask"));
    on("watchGyroscopeSamplesForCollection", run("saveRecordTask"));

    on("collectionStopped", run("stopDetectingWatchAccelerometerChanges"));
    on("collectionStopped", run("stopDetectingWatchGyroscopeChanges"));

    on("collectionStopped", run("storeRecordsTask"));
  }
}

export const taskGraph = new TugTestTaskGraph();
