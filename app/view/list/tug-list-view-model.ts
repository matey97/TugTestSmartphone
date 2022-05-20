import { Dialogs, EventData, knownFolders, Label, Observable, ObservableArray } from "@nativescript/core";
import { TugResult } from "~/core/tug-test/result";
import { resultsStore } from "~/core/store/results-store";
import { toLegibleDate, toLegibleDuration } from "~/view/utils";
import { getNodeDiscoverer, Node, NodeDiscovered, NodeDiscoverer } from "nativescript-wearos-sensors/node";
import { ApplicationMode, getApplicationMode, setApplicationMode } from "~/core/mode";
import { wearosSensors } from "nativescript-wearos-sensors";
import { getNTPTime } from "~/core/utils/ntp-time";
import { Vibrate } from "nativescript-vibrate";
import { ToastDuration, Toasty } from "@triniwiz/nativescript-toasty";

const COUNTDOWN = 5; // Seconds

export class TugListViewModel extends Observable {

  tugSelectorLabel: Label;
  collectionSelectorLabel: Label;

  private nodeDiscoverer: NodeDiscoverer;
  private localNode: Node;
  private connectedNodes: Node[] = [];

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
    private tugResultsStore = resultsStore
  ) {
    super();
    setApplicationMode(ApplicationMode.INFERENCE);
    this.nodeDiscoverer = getNodeDiscoverer();
    this.getLocalNode();
    this.getConnectedNodes();
    this.updateTugResults();
    tugResultsStore.onChanges((changes) => this.updateTugResults(changes));
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

        const fileName = r.text + ".json";
        await knownFolders.documents().getFile(fileName)
          .writeText(JSON.stringify(this.tugResults))
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
          resultsStore.clear();
          this.tugResults = [];
          this.resultsVM = new ObservableArray([]);
          this.notifyPropertyChange("resultsVM", this.resultsVM);
        }
      });
  }

  modeSelected(evt: EventData) {
    if (this.runningLocal) {
      return;
    }

    const item = evt.object as Label;

    if (item.id === "tugSelector") {
      setApplicationMode(ApplicationMode.INFERENCE);
      this.modeSelectionChange(this.tugSelectorLabel, this.collectionSelectorLabel);
    } else {
      setApplicationMode(ApplicationMode.DATA_COLLECTION);
      this.modeSelectionChange(this.collectionSelectorLabel, this.tugSelectorLabel);
    }
  }

  async onStartInLocalDevice() {
    const succeed = await this.runNtpSync();
    if (!succeed && getApplicationMode() == ApplicationMode.DATA_COLLECTION) {
      const vibrator = new Vibrate();
      vibrator.vibrate([500, 500]);

      new Toasty({ text: "Unable to sync with NTP", duration: ToastDuration.LONG }).show();
      return;
    }

    this.runningLocal = true;
    this.runCountdown();
  }

  onStopInLocalDevice() {
    const event = this.buildLocalEvent("stop");
    wearosSensors.emitEvent(event, { deviceId: this.localNode.id });

    this.runningLocal = false;
  }

  private async getLocalNode() {
    this.localNode = await this.nodeDiscoverer.getLocalNode();
    this.notifyPropertyChange("localNode", this.localNode);
  }

  private getConnectedNodes() {
    this.connectedNodes = [];
    this.nodeDiscoverer.getConnectedNodes().subscribe({
      next: (nodeDiscovered: NodeDiscovered) => {
        if (nodeDiscovered.error) {
          return;
        }

        const node = nodeDiscovered.node;
        this.connectedNodes.push(node);
        this.notifyPropertyChange("connectedNodes", this.connectedNodes);
      }
    })
  }

  private updateTugResults(changes?: string[]) {
    if (changes) {
      const newResults = changes
        .map((change) => this.tugResultsStore.getById(change))
        .filter((result) => result !== null);
      if (newResults.length === 0)
        return;

      const newResultsVM = this.toResultVM(newResults);
      this.tugResults.unshift(...newResults);
      this.resultsVM.unshift(...newResultsVM);
    } else {
      this.tugResults = this.tugResultsStore.queryAll();
      if (this.tugResults.length > 0) {
        this.resultsVM = new ObservableArray(this.toResultVM(this.tugResults));
      }
    }

    this.notifyPropertyChange("resultsVM", this.resultsVM);
  }

  private toResultVM(results: TugResult[]): TugResultVM[] {
    return results.map((result) => {
      return {
        date: toLegibleDate(result.startTime),
        duration: toLegibleDuration(result.duration)
      }
    });
  }

  private modeSelectionChange(toSelect: Label, toUnselect: Label) {
    toSelect.addPseudoClass("active");
    toUnselect.deletePseudoClass("active");
  }

  private buildLocalEvent(action: "start" | "stop") {
    return getApplicationMode() === ApplicationMode.INFERENCE
      ? `${action}ExecutionCommand`
      : `${action}CollectionCommand`;
  }

  private async runNtpSync(): Promise<boolean> {
    this.ntpSyncing = true;
    const succeed = await getNTPTime().blockingSync();
    this.ntpSyncing = false;
    return succeed;
  }

  private runCountdown() {
    this.countdown = COUNTDOWN;
    this.runningCountdown = true;

    const id = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.runningCountdown = false;
        clearInterval(id);

        wearosSensors.emitEvent(this.buildLocalEvent("start"), { deviceId: this.localNode.id });
      }
    }, 1000);
  }
}

interface TugResultVM {
  date: string,
  duration: string
}
