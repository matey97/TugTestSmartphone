import { Observable, ObservableArray } from "@nativescript/core";
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

  private updateTugResults(changes?: string[]) {
    if (changes) {
      const newResults = changes.map((change) => this.tugResultsStore.getById(change));
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
      this.resultsVM.unshift({
        date: toLegibleDate(Date.now()),
        duration: toLegibleDuration(15231)
      });
      this.tugResults.unshift({
        deviceId: "fake",
        successful: true,
        startTime: Date.now(),
        duration: 15231,
        durationFromActivities: 15231,
        activitiesDuration: [
          {
            name: Activity.STANDING_UP,
            start: 0,
            end: 0,
            duration: 1200
          },
          {
            name: Activity.WALKING,
            start: 0,
            end: 0,
            duration: 3400
          },
          {
            name: Activity.TURNING,
            start: 0,
            end: 0,
            duration: 1600
          },
          {
            name: Activity.WALKING,
            start: 0,
            end: 0,
            duration: 3600
          },
          {
            name: Activity.TURNING,
            start: 0,
            end: 0,
            duration: 1400
          },
          {
            name: Activity.SITTING,
            start: 0,
            end: 0,
            duration: 900
          }
        ]
      })

      this.notifyPropertyChange("resultsVM", this.resultsVM);
    }, timeout);
  }
}

interface TugResultVM {
  date: string,
  duration: string
}
