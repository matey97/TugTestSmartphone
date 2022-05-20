import { isGPUDelegateEnabled, setGPUDelegateEnabled } from "~/core/settings";
import { Delegate, TFLiteDelegate } from "~/core/recognition/model/delegates/index";
import CompatibilityList = org.tensorflow.lite.gpu.CompatibilityList;
import TFGpuDelegate = org.tensorflow.lite.gpu.GpuDelegate;

export class GPUDelegate implements Delegate {

  private _enabled: boolean;
  set enabled(value: boolean) {
    this._enabled = value;
    setGPUDelegateEnabled(value);
  }
  get enabled(): boolean {
    if (!this._enabled) {
      this._enabled = isGPUDelegateEnabled();
    }
    return this._enabled && this.supported;
  }

  get supported(): boolean {
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
