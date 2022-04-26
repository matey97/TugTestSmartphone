import { Observable } from "@nativescript/core";
import { TugResult } from "~/core/tug-test/result";
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
      successful: tugResult.duration !== -1,
      date: toLegibleDate(tugResult.startTime),
      duration: toLegibleDuration(tugResult.duration),
      standUp: toLegibleDuration(this.getDuration(tugResult.activitiesDuration[0])),
      firstWalk: toLegibleDuration(this.getDuration(tugResult.activitiesDuration[1])),
      firstTurn: toLegibleDuration(this.getDuration(tugResult.activitiesDuration[2])),
      secondWalk: toLegibleDuration(this.getDuration(tugResult.activitiesDuration[3])),
      secondTurn: toLegibleDuration(this.getDuration(tugResult.activitiesDuration[4])),
      sitDown: toLegibleDuration(this.getDuration(tugResult.activitiesDuration[5]))
    };
  }

  private getDuration(property) {
    return property ? property.duration : -1;
  }
}

interface ResultVM {
  successful: boolean,
  date: string,
  duration: string,
  standUp: string,
  firstWalk: string,
  firstTurn: string,
  secondWalk: string,
  secondTurn: string,
  sitDown: string,
}
