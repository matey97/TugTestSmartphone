import { Observable } from "@nativescript/core";
import { TugResult } from "~/core/tug-test/result";
import { toLegibleDate, toLegibleDuration } from "~/view/utils";
import { TugAction } from "~/core/tug-test/tug-action";

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
      standUp: toLegibleDuration(this.getDuration(tugResult.activitiesResults[TugAction.STANDING_UP])),
      firstWalk: toLegibleDuration(this.getDuration(tugResult.activitiesResults[TugAction.FIRST_WALK])),
      firstTurn: toLegibleDuration(this.getDuration(tugResult.activitiesResults[TugAction.FIRST_TURN])),
      secondWalk: toLegibleDuration(this.getDuration(tugResult.activitiesResults[TugAction.SECOND_WALK])),
      secondTurn: toLegibleDuration(this.getDuration(tugResult.activitiesResults[TugAction.SECOND_TURN])),
      sitDown: toLegibleDuration(this.getDuration(tugResult.activitiesResults[TugAction.SITTING_DOWN]))
    };
  }

  private getDuration(property) {
    return !!property ? property.duration : -1;
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
