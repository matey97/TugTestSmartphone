import { Delegate, TFLiteDelegate } from "~/core/recognition/model/delegates/index";
import CompatibilityList = org.tensorflow.lite.gpu.CompatibilityList;
import TFGpuDelegate = org.tensorflow.lite.gpu.GpuDelegate;

export class GPUDelegate implements Delegate {

  constructor(private compatibilityList: CompatibilityList = new CompatibilityList()) {}

  isSupported(): boolean {
    return this.compatibilityList.isDelegateSupportedOnThisDevice();
  }

  getDelegate(): TFLiteDelegate {
    if (!this.isSupported()) {
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
