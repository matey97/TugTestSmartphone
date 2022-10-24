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
    on("localDeviceCommand", run("commandExecutorFromLocalEventTask"));
    on("plainMessageReceived", run("commandExecutorFromMessageTask"));

    on("startSensorFromLocalDevice", run("startDetectingPhoneNTPSyncedAccelerometerChanges"));
    on("startSensorFromLocalDevice", run("startDetectingPhoneNTPSyncedGyroscopeChanges"));
    on("stopSensorFromLocalDevice", run("stopDetectingPhoneNTPSyncedAccelerometerChanges"));
    on("stopSensorFromLocalDevice", run("stopDetectingPhoneNTPSyncedGyroscopeChanges"));
    on("stopSensorFromLocalDevice", run("uiButtonUpdateTask"));

    on("startSensorFromPairedDevice", run("startDetectingWatchAccelerometerChanges"));
    on("startSensorFromPairedDevice", run("startDetectingWatchGyroscopeChanges"));
    on("stopSensorFromPairedDevice", run("stopDetectingWatchAccelerometerChanges"));
    on("stopSensorFromPairedDevice", run("stopDetectingWatchGyroscopeChanges"));

    on("accelerometerSamplesAcquired", run("forwardRecordsTask"));
    on("gyroscopeSamplesAcquired", run("forwardRecordsTask"));
    on("watchAccelerometerSamplesAcquired", run("forwardRecordsTask"));
    on("watchGyroscopeSamplesAcquired", run("forwardRecordsTask"));

    //--------------------------
    // TUG execution (INFERENCE)
    //--------------------------

    on("startTugCommand", run("startSensorFromDeviceTask"));

    on("accelerometerSamplesForInference", run("recordsReceiverTask"));
    on("gyroscopeSamplesForInference", run("recordsReceiverTask"));

    on("enoughRecordsAcquired", run("prepareAcquiredDataForClassificationTask"));

    on("localDeviceDataForClassificationReady", run("humanActivityClassificationFromLocalDeviceData"));
    on("pairedDeviceDataForClassificationReady", run("humanActivityClassificationFromPairedDeviceData"));

    on("humanActivityPredicted", run("predictionResultEvaluationTask"));
    on("humanActivityPredicted", run("predictionResultLogger"));

    on("detectedTugTestEnding", run("endTugTestTask"));
    on("stopTugCommand", run("endTugTestTask"));

    on("tugTestEnded", run("stopSensorFromDeviceTask"));
    on("tugTestEnded", run("recordsReceiverClearTask"));
    on("tugTestEnded", run("pairedDeviceResultSenderChecker"));
    on("tugTestEnded", run("tugResultLogger"));
    on("tugTestEnded", run("writeRecords"));

    on("sendResultToPairedDevice", run("sendPlainMessageToWatch"));

    //----------------------
    // Data collection mode
    //----------------------
    on("startCollectionCommand", run("startSensorFromDeviceTask"));

    on("accelerometerSamplesForCollection", run("writeRecords"));
    on("gyroscopeSamplesForCollection", run("writeRecords"));

    on("stopCollectionCommand", run("stopSensorFromDeviceTask"));
    on("stopCollectionCommand", run("exportRecordsTask"));
  }
}

export const taskGraph = new TugTestTaskGraph();
