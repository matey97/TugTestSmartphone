import {
  getPowerSavingsManager
} from "nativescript-task-dispatcher/internal/tasks/schedulers/time-based/android/alarms/power-savings-manager.android";
import { Dialogs } from "@nativescript/core";

export class PowerSavings {

  constructor(private manager = getPowerSavingsManager()) {
  }

  public areDisabled(): boolean {
    return this.manager.areDisabled();
  }

  public async requestDeactivationRationale(): Promise<void> {
    const agrees = await Dialogs.confirm(getRationaleMessage());

    if (!agrees) {
      return;
    }

    this.manager.requestDeactivation();
  }
}

function getRationaleMessage() {
  return {
    title: "Battery optimizations",
    message: "With the battery optimizations enabled the application might not work as expected. We would like to request you to disable these optimizations.",
    okButtonText: "Go ahead",
    cancelButtonText: "No",
    cancelable: false
  };
}
