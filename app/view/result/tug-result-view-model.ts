import { Observable } from "@nativescript/core";
import { TugResult } from "~/tug-test/result";
import { toLegibleDate, toLegibleDuration } from "~/view/utils";

export class TugResultViewModel extends Observable {

  private resultVM;

  constructor(tugResult: TugResult) {
    super();
    this.resultVM = this.toResultVM(tugResult);
    this.notifyPropertyChange("resultVM", this.resultVM);
  }

  private toResultVM(tugResult: TugResult): ResultVM {
    return {
      date: toLegibleDate(tugResult.startTime),
      duration: toLegibleDuration(tugResult.duration),
      standUp: toLegibleDuration(tugResult.activitiesDuration[0].duration),
      firstWalk: toLegibleDuration(tugResult.activitiesDuration[1].duration),
      firstTurn: toLegibleDuration(tugResult.activitiesDuration[2].duration),
      secondWalk: toLegibleDuration(tugResult.activitiesDuration[3].duration),
      secondTurn: toLegibleDuration(tugResult.activitiesDuration[4].duration),
      sitDown: toLegibleDuration(tugResult.activitiesDuration[5].duration)
    }
  }
}

interface ResultVM {
  date: string,
  duration: string,
  standUp: string,
  firstWalk: string,
  firstTurn: string,
  secondWalk: string,
  secondTurn: string,
  sitDown: string,
}
