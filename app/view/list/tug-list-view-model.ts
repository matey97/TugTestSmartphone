import { Dialogs, EventData, knownFolders, Label, Observable, ObservableArray } from "@nativescript/core";
import { TUG_RECORD_TYPE, TugResult } from "~/core/tug-test/result";
import { toLegibleDate, toLegibleDuration, toFailedStatus } from "~/view/utils";
import { getApplicationMode, getLocalDeviceStartCountdown, setApplicationMode } from "~/core/settings";
import { Vibrate } from "nativescript-vibrate";
import { ToastDuration, Toasty } from "@triniwiz/nativescript-toasty";
import { ApplicationMode } from "~/core/application-mode";
import { getLocalDataSourceNode } from "~/core/data-source";
import { getConnectedWatches, setWatchFeaturesState, useWatch, Watch } from "@awarns/wear-os";
import { Node } from "nativescript-wearos-sensors/node";
import { awarns } from "@awarns/core";
import { getNTPTimeProvider } from "@awarns/phone-sensors/internal/service/ntp/time-provider";
import { createRecordsExporter, recordsStore } from "@awarns/persistence";
import { Record } from "@awarns/core/entities";

const LOCAL_DEVICE_COMMAND_EVT = "localDeviceCommand";

export class TugListViewModel extends Observable {

  tugSelectorLabel: Label;
  collectionSelectorLabel: Label;

  private localNode: Node;
  private connectedWatches: Watch[] = [];

  private _runningLocal: boolean = false;
  get runningLocal(): boolean {
    return this._runningLocal;
  }

  set runningLocal(value: boolean) {
    this._runningLocal = value;
    this.notifyPropertyChange("runningLocal", this.runningLocal);
  }

  private _ntpSyncing: boolean = false;
  get ntpSyncing(): boolean {
    return this._ntpSyncing;
  }

  set ntpSyncing(value: boolean) {
    this._ntpSyncing = value;
    this.notifyPropertyChange("ntpSyncing", this.ntpSyncing);
  }

  private _runningCountdown: boolean = false;
  get runningCountdown(): boolean {
    return this._runningCountdown;
  }

  set runningCountdown(value: boolean) {
    this._runningCountdown = value;
    this.notifyPropertyChange("runningCountdown", this.runningCountdown);
  }

  private _countdown: number;
  get countdown(): number {
    return this._countdown;
  }

  set countdown(value: number) {
    this._countdown = value;
    this.notifyPropertyChange("countdown", this.countdown);
  }

  private tugResults: TugResult[] = [];
  private resultsVM: ObservableArray<TugResultVM> = new ObservableArray([]);

  constructor(
    private tugResultsStore = recordsStore
  ) {
    super();
    setApplicationMode(ApplicationMode.TUG);
    this.getLocalNode();
    this.getConnectedNodes();
    tugResultsStore.listBy(TUG_RECORD_TYPE, 'desc')
      .subscribe((records) => this.updateTugResults(records))
  }

  getTugResult(index: number): TugResult {
    if (index < 0 || index >= this.tugResults.length)
      return undefined;

    return this.tugResults[index];
  }

  onSaveExecutions() {
    Dialogs.prompt({
      title: "Export executions",
      message: "Enter a name for the file",
      defaultText: "tug-executions",
      okButtonText: "OK",
      cancelButtonText: "CANCEL",
    })
      .then(async (r) => {
        if (!r.result)
          return;

        const exporter = createRecordsExporter(knownFolders.documents(), 'json', {
          fileName: r.text,
          recordTypes: [TUG_RECORD_TYPE],
        });
        await exporter.export();
      });
  }

  onDeleteExecutions() {
    Dialogs.confirm({
      title: "Delete executions?",
      message: "This can not be undone",
      okButtonText: "YES",
      cancelButtonText: "NO"
    })
      .then((r) => {
        if (r) {
          this.tugResultsStore.clear().then(() => {
            this.tugResults = [];
            this.resultsVM = new ObservableArray([]);
            this.notifyPropertyChange("resultsVM", this.resultsVM);
          })
        }
      });
  }

  modeSelected(evt: EventData) {
    if (this.runningLocal) {
      return;
    }

    const item = evt.object as Label;

    if (item.id === "tugSelector") {
      setApplicationMode(ApplicationMode.TUG);
      this.modeSelectionChange(this.tugSelectorLabel, this.collectionSelectorLabel);
    } else {
      setApplicationMode(ApplicationMode.COLLECTION);
      this.modeSelectionChange(this.collectionSelectorLabel, this.tugSelectorLabel);
    }
  }

  async onStartInLocalDevice() {
    const succeed = await this.runNtpSync();
    if (!succeed && getApplicationMode() == ApplicationMode.COLLECTION) {
      const vibrator = new Vibrate();
      vibrator.vibrate([500, 500]);

      new Toasty({ text: "Unable to sync with NTP", duration: ToastDuration.LONG }).show();
      return;
    }

    this.runningLocal = true;
    this.runCountdown();
  }

  onStopInLocalDevice() {
    this.emitEvent("stop");
    this.runningLocal = false;
  }

  private async getLocalNode() {
    this.localNode = await getLocalDataSourceNode();

    this.notifyPropertyChange("localNode", this.localNode);
  }

  private getConnectedNodes() {
    this.connectedWatches = [];
    getConnectedWatches().then(watches => {
      if (watches.length === 0) {
        console.log('No WearOS watches connected!');
        setWatchFeaturesState(false);
        return;
      }

      setWatchFeaturesState(true);
      useWatch(watches[0]);
      this.connectedWatches = watches;
      this.notifyPropertyChange("connectedWatches", this.connectedWatches);
    });
  }

  private updateTugResults(records: Record[]) {
    this.tugResults = records as TugResult[];
    this.resultsVM = new ObservableArray<TugResultVM>(this.toResultVM(this.tugResults));
    this.notifyPropertyChange("resultsVM", this.resultsVM);
  }

  private toResultVM(results: TugResult[]): TugResultVM[] {
    return results.map((result) => {
      return {
        successful: result.successful,
        date: toLegibleDate(result.startTime),
        duration: toLegibleDuration(result.duration),
        failedStatusText: !result.successful ? toFailedStatus(result.duration) : undefined
      }
    });
  }

  private modeSelectionChange(toSelect: Label, toUnselect: Label) {
    toSelect.addPseudoClass("active");
    toUnselect.deletePseudoClass("active");
  }

  private async runNtpSync(): Promise<boolean> {
    this.ntpSyncing = true;
    const succeed = await getNTPTimeProvider().sync();
    this.ntpSyncing = false;
    return succeed;
  }

  private runCountdown() {
    this.countdown = getLocalDeviceStartCountdown();
    this.runningCountdown = true;

    if (this.countdown === 0) {
      this.runningCountdown = false;
      this.emitEvent("start");
      return;
    }

    const id = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.runningCountdown = false;
        clearInterval(id);

        this.emitEvent("start");
      }
    }, 1000);
  }

  private emitEvent(action: "start" | "stop"): void {
    awarns.emitEvent(LOCAL_DEVICE_COMMAND_EVT, {
      action: buildAction(action),
      nodeId: this.localNode.id
    });
  }
}

interface TugResultVM {
  successful: boolean,
  date: string,
  duration: string,
  failedStatusText?: string
}

function buildAction(action: "start" | "stop") {
  return getApplicationMode() === ApplicationMode.TUG
    ? `${action}-execution`
    : `${action}-collection`;
}
