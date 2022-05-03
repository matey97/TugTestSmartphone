import { Delegate, TFLiteDelegate } from "~/core/recognition/model/delegates/index";
import { setBoolean, getBoolean } from "@nativescript/core/application-settings";
import CompatibilityList = org.tensorflow.lite.gpu.CompatibilityList;
import TFGpuDelegate = org.tensorflow.lite.gpu.GpuDelegate;

const GPU_DELEGATE_KEY = "gpu_delegate_key";

export class GPUDelegate implements Delegate {

  private _enabled: boolean;
  set enabled(value: boolean) {
    this._enabled = value;
    setBoolean(GPU_DELEGATE_KEY, value);
  }
  get enabled(): boolean {
    if (this._enabled) {
      this._enabled = getBoolean(GPU_DELEGATE_KEY, false);
    }
    return this._enabled && this.supported;
  }

  private get supported(): boolean {
    return this.compatibilityList.isDelegateSupportedOnThisDevice();
  }

  constructor(private compatibilityList: CompatibilityList = new CompatibilityList()) {}

  getDelegate(): TFLiteDelegate {
    if (!this.supported) {
      return undefined;
    }

    const delegateOptions = this.compatibilityList.getBestOptionsForThisDevice();
    return new TFGpuDelegate(delegateOptions);
  }

}

let _instance;
export function getGPUDelegate(): GPUDelegate {
  if (!_instance) {
    _instance = new GPUDelegate();
  }
  return _instance;
}
