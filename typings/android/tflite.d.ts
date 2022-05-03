/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module tensorflow {
		export module lite {
			export class DataType {
				public static class: java.lang.Class<org.tensorflow.lite.DataType>;
				public static FLOAT32: org.tensorflow.lite.DataType;
				public static INT32: org.tensorflow.lite.DataType;
				public static UINT8: org.tensorflow.lite.DataType;
				public static INT64: org.tensorflow.lite.DataType;
				public static STRING: org.tensorflow.lite.DataType;
				public static INT8: org.tensorflow.lite.DataType;
				public byteSize(): number;
				public static values(): androidNative.Array<org.tensorflow.lite.DataType>;
				public static valueOf(param0: string): org.tensorflow.lite.DataType;
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export class Delegate {
				public static class: java.lang.Class<org.tensorflow.lite.Delegate>;
				/**
				 * Constructs a new instance of the org.tensorflow.lite.Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getNativeHandle(): number;
				});
				public constructor();
				public getNativeHandle(): number;
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export class Interpreter {
				public static class: java.lang.Class<org.tensorflow.lite.Interpreter>;
				public constructor(param0: java.nio.ByteBuffer);
				public getLastNativeInferenceDurationNanoseconds(): java.lang.Long;
				/** @deprecated */
				public setNumThreads(param0: number): void;
				/** @deprecated */
				public constructor(param0: java.nio.ByteBuffer, param1: number);
				public finalize(): void;
				public constructor(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.Interpreter.Options);
				public allocateTensors(): void;
				public getInputTensorCount(): number;
				public getOutputTensor(param0: number): org.tensorflow.lite.Tensor;
				public resizeInput(param0: number, param1: androidNative.Array<number>, param2: boolean): void;
				public run(param0: any, param1: any): void;
				public modifyGraphWithDelegate(param0: org.tensorflow.lite.Delegate): void;
				/** @deprecated */
				public setUseNNAPI(param0: boolean): void;
				/** @deprecated */
				public constructor(param0: java.io.File, param1: number);
				public getInputIndex(param0: string): number;
				public resetVariableTensors(): void;
				public getOutputTensorCount(): number;
				public close(): void;
				/** @deprecated */
				public constructor(param0: java.nio.MappedByteBuffer);
				public constructor(param0: java.io.File);
				public getInputTensor(param0: number): org.tensorflow.lite.Tensor;
				public constructor(param0: java.io.File, param1: org.tensorflow.lite.Interpreter.Options);
				public getOutputIndex(param0: string): number;
				public runForMultipleInputsOutputs(param0: androidNative.Array<any>, param1: java.util.Map<java.lang.Integer,any>): void;
				public resizeInput(param0: number, param1: androidNative.Array<number>): void;
			}
			export module Interpreter {
				export class Options {
					public static class: java.lang.Class<org.tensorflow.lite.Interpreter.Options>;
					public setUseNNAPI(param0: boolean): org.tensorflow.lite.Interpreter.Options;
					public constructor();
					public addDelegate(param0: org.tensorflow.lite.Delegate): org.tensorflow.lite.Interpreter.Options;
					public setNumThreads(param0: number): org.tensorflow.lite.Interpreter.Options;
					public setAllowBufferHandleOutput(param0: boolean): org.tensorflow.lite.Interpreter.Options;
					/** @deprecated */
					public setAllowFp16PrecisionForFp32(param0: boolean): org.tensorflow.lite.Interpreter.Options;
					public setUseXNNPACK(param0: boolean): org.tensorflow.lite.Interpreter.Options;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export class NativeInterpreterWrapper {
				public static class: java.lang.Class<org.tensorflow.lite.NativeInterpreterWrapper>;
				public close(): void;
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export class Tensor {
				public static class: java.lang.Class<org.tensorflow.lite.Tensor>;
				public name(): string;
				public shapeSignature(): androidNative.Array<number>;
				public numBytes(): number;
				public shape(): androidNative.Array<number>;
				public quantizationParams(): org.tensorflow.lite.Tensor.QuantizationParams;
				public dataType(): org.tensorflow.lite.DataType;
				public index(): number;
				public numDimensions(): number;
				public numElements(): number;
			}
			export module Tensor {
				export class QuantizationParams {
					public static class: java.lang.Class<org.tensorflow.lite.Tensor.QuantizationParams>;
					public getZeroPoint(): number;
					public getScale(): number;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export class TensorFlowLite {
				public static class: java.lang.Class<org.tensorflow.lite.TensorFlowLite>;
				public static init(): void;
				/** @deprecated */
				public static version(): string;
				public static nativeRuntimeVersion(): string;
				public static schemaVersion(): string;
				public static nativeSchemaVersion(): string;
				public static runtimeVersion(): string;
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module annotations {
				export class UsedByReflection {
					public static class: java.lang.Class<org.tensorflow.lite.annotations.UsedByReflection>;
					/**
					 * Constructs a new instance of the org.tensorflow.lite.annotations.UsedByReflection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						value(): string;
					});
					public constructor();
					public value(): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module nnapi {
				export class NnApiDelegate extends org.tensorflow.lite.Delegate {
					public static class: java.lang.Class<org.tensorflow.lite.nnapi.NnApiDelegate>;
					public constructor();
					public hasErrors(): boolean;
					public constructor(param0: org.tensorflow.lite.nnapi.NnApiDelegate.Options);
					public getNativeHandle(): number;
					public close(): void;
					public getNnapiErrno(): number;
				}
				export module NnApiDelegate {
					export class Options {
						public static class: java.lang.Class<org.tensorflow.lite.nnapi.NnApiDelegate.Options>;
						public static EXECUTION_PREFERENCE_UNDEFINED: number;
						public static EXECUTION_PREFERENCE_LOW_POWER: number;
						public static EXECUTION_PREFERENCE_FAST_SINGLE_ANSWER: number;
						public static EXECUTION_PREFERENCE_SUSTAINED_SPEED: number;
						public constructor();
						public setUseNnapiCpu(param0: boolean): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
						public setExecutionPreference(param0: number): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
						public setAcceleratorName(param0: string): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
						public setModelToken(param0: string): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
						public setMaxNumberOfDelegatedPartitions(param0: number): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
						public setAllowFp16(param0: boolean): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
						public setCacheDir(param0: string): org.tensorflow.lite.nnapi.NnApiDelegate.Options;
					}
				}
			}
		}
	}
}

//Generics information:

