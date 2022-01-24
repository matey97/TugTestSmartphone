import { Status, TugExecution } from "~/core/tug-test/execution";
import { TugResult } from "~/core/tug-test/result";

export class TugManager {

  private _currentExecution: TugExecution;

  get ongoing() {
    return !!this.currentExecution;
  }

  get currentExecution() {
    return this._currentExecution
  }

  startExecution(sourceDevice: string) {
    if (this.ongoing)
      throw new Error("Could not create a TUG execution. Already ongoing!");

    console.log("[TUG MANAGER]: tug execution created!");
    this._currentExecution = new TugExecution(sourceDevice);
  }

  endExecution(): TugResult {
    const execution = this.currentExecution;
    execution.status = Status.FINISHED;

    this._currentExecution = undefined;

    return execution.computeResults();
  }

}

let _instance;
export function getTugManager() {
  if (!_instance)
    _instance = new TugManager();
  return _instance;
}
