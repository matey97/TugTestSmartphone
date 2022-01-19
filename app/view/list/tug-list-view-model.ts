import { Dialogs, knownFolders, Observable, ObservableArray } from "@nativescript/core";
import { TugResult } from "~/tug-test/result";
import { resultsStore } from "~/store/results-store";
import { toLegibleDate, toLegibleDuration } from "~/view/utils";
import { Activity } from "~/tug-test/activities";

export class TugListViewModel extends Observable {

  private tugResults: TugResult[] = [];
  private resultsVM: ObservableArray<TugResultVM> = new ObservableArray([]);

  constructor(
    private tugResultsStore = resultsStore
  ) {
    super();
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

  addFakeExecution() {
    this.fakeDataIn(100);
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
      this.tugResults = this.tugResultsStore.queryAllSuccessful();
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

  private fakeDataIn(timeout: number) {
    setTimeout(() => {
      const fakeResult = generateFakeData();
      resultsStore.store(fakeResult);
      //this.resultsVM.unshift(...this.toResultVM([fakeResult]));
      //this.tugResults.unshift(fakeResult);

      //this.notifyPropertyChange("resultsVM", this.resultsVM);
    }, timeout);
  }
}

function generateFakeData() {
  return {
    deviceId: "fake",
    successful: true,
    startTime: Date.now(),
    duration: getRandomInt(12000, 16000),
    durationFromActivities: 15231,
    activitiesDuration: [
      {
        name: Activity.STANDING_UP,
        start: 0,
        end: 0,
        duration: getRandomInt(800, 1200)
      },
      {
        name: Activity.WALKING,
        start: 0,
        end: 0,
        duration: getRandomInt(2500, 3500)
      },
      {
        name: Activity.TURNING,
        start: 0,
        end: 0,
        duration: getRandomInt(1200, 1800)
      },
      {
        name: Activity.WALKING,
        start: 0,
        end: 0,
        duration: getRandomInt(2500, 3500)
      },
      {
        name: Activity.TURNING,
        start: 0,
        end: 0,
        duration: getRandomInt(1200, 1800)
      },
      {
        name: Activity.SITTING,
        start: 0,
        end: 0,
        duration: getRandomInt(800, 1200)
      }
    ]
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

interface TugResultVM {
  date: string,
  duration: string
}
