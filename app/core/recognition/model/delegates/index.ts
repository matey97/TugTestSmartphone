export type TFLiteDelegate = org.tensorflow.lite.Delegate;

export interface Delegate {
  getDelegate(): TFLiteDelegate;
}
