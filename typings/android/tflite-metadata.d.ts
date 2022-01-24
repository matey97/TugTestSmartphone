/// <reference path="android-declarations.d.ts"/>

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class AbsOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.AbsOptions>;
					public static endAbsOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static startAbsOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.AbsOptions;
					public static ValidateVersion(): void;
					public static getRootAsAbsOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.AbsOptions): org.tensorflow.lite.schema.AbsOptions;
					public static getRootAsAbsOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.AbsOptions;
				}
				export module AbsOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.AbsOptions.Vector>;
						public get(param0: org.tensorflow.lite.schema.AbsOptions, param1: number): org.tensorflow.lite.schema.AbsOptions;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.AbsOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.AbsOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ActivationFunctionType {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ActivationFunctionType>;
					public static NONE: number;
					public static RELU: number;
					public static RELU_N1_TO_1: number;
					public static RELU6: number;
					public static TANH: number;
					public static SIGN_BIT: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class AddNOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.AddNOptions>;
					public static getRootAsAddNOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.AddNOptions): org.tensorflow.lite.schema.AddNOptions;
					public constructor();
					public static endAddNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsAddNOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.AddNOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startAddNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.AddNOptions;
				}
				export module AddNOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.AddNOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.AddNOptions.Vector;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.AddNOptions, param1: number): org.tensorflow.lite.schema.AddNOptions;
						public get(param0: number): org.tensorflow.lite.schema.AddNOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class AddOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.AddOptions>;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createAddOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: boolean): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.AddOptions;
					public static startAddOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endAddOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsAddOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.AddOptions): org.tensorflow.lite.schema.AddOptions;
					public fusedActivationFunction(): number;
					public constructor();
					public static getRootAsAddOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.AddOptions;
					public potScaleInt16(): boolean;
					public static addPotScaleInt16(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
				}
				export module AddOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.AddOptions.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.AddOptions;
						public get(param0: org.tensorflow.lite.schema.AddOptions, param1: number): org.tensorflow.lite.schema.AddOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.AddOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ArgMaxOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ArgMaxOptions>;
					public outputType(): number;
					public static createArgMaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ArgMaxOptions;
					public static addOutputType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public constructor();
					public static startArgMaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static endArgMaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsArgMaxOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ArgMaxOptions;
					public static getRootAsArgMaxOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ArgMaxOptions): org.tensorflow.lite.schema.ArgMaxOptions;
				}
				export module ArgMaxOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ArgMaxOptions.Vector>;
						public get(param0: org.tensorflow.lite.schema.ArgMaxOptions, param1: number): org.tensorflow.lite.schema.ArgMaxOptions;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.ArgMaxOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ArgMaxOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ArgMinOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ArgMinOptions>;
					public outputType(): number;
					public static addOutputType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public constructor();
					public static getRootAsArgMinOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ArgMinOptions;
					public static endArgMinOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static startArgMinOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static createArgMinOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ArgMinOptions;
					public static getRootAsArgMinOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ArgMinOptions): org.tensorflow.lite.schema.ArgMinOptions;
				}
				export module ArgMinOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ArgMinOptions.Vector>;
						public get(param0: org.tensorflow.lite.schema.ArgMinOptions, param1: number): org.tensorflow.lite.schema.ArgMinOptions;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.ArgMinOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ArgMinOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class BatchMatMulOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.BatchMatMulOptions>;
					public static startBatchMatMulOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsBatchMatMulOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.BatchMatMulOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.BatchMatMulOptions;
					public static getRootAsBatchMatMulOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.BatchMatMulOptions): org.tensorflow.lite.schema.BatchMatMulOptions;
					public static createBatchMatMulOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean, param2: boolean): number;
					public static endBatchMatMulOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public adjY(): boolean;
					public static addAdjY(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public constructor();
					public static addAdjX(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public adjX(): boolean;
				}
				export module BatchMatMulOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.BatchMatMulOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.BatchMatMulOptions, param1: number): org.tensorflow.lite.schema.BatchMatMulOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.BatchMatMulOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.BatchMatMulOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class BatchToSpaceNDOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.BatchToSpaceNDOptions>;
					public static endBatchToSpaceNDOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.BatchToSpaceNDOptions;
					public constructor();
					public static getRootAsBatchToSpaceNDOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.BatchToSpaceNDOptions): org.tensorflow.lite.schema.BatchToSpaceNDOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsBatchToSpaceNDOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.BatchToSpaceNDOptions;
					public static startBatchToSpaceNDOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module BatchToSpaceNDOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.BatchToSpaceNDOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.BatchToSpaceNDOptions, param1: number): org.tensorflow.lite.schema.BatchToSpaceNDOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.BatchToSpaceNDOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.BatchToSpaceNDOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class BidirectionalSequenceLSTMOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions>;
					public static startBidirectionalSequenceLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public projClip(): number;
					public timeMajor(): boolean;
					public static createBidirectionalSequenceLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: boolean, param5: boolean, param6: boolean): number;
					public cellClip(): number;
					public static addTimeMajor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static endBidirectionalSequenceLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static ValidateVersion(): void;
					public asymmetricQuantizeInputs(): boolean;
					public static addProjClip(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addMergeOutputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public static getRootAsBidirectionalSequenceLSTMOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions;
					public static addCellClip(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public fusedActivationFunction(): number;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions;
					public static getRootAsBidirectionalSequenceLSTMOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions;
					public mergeOutputs(): boolean;
					public static addAsymmetricQuantizeInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
				}
				export module BidirectionalSequenceLSTMOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions, param1: number): org.tensorflow.lite.schema.BidirectionalSequenceLSTMOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class BidirectionalSequenceRNNOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions>;
					public static startBidirectionalSequenceRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public timeMajor(): boolean;
					public static addTimeMajor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public static endBidirectionalSequenceRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions;
					public asymmetricQuantizeInputs(): boolean;
					public static addMergeOutputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public static getRootAsBidirectionalSequenceRNNOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions;
					public fusedActivationFunction(): number;
					public constructor();
					public static createBidirectionalSequenceRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean, param2: number, param3: boolean, param4: boolean): number;
					public mergeOutputs(): boolean;
					public static addAsymmetricQuantizeInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public static getRootAsBidirectionalSequenceRNNOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions;
				}
				export module BidirectionalSequenceRNNOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions, param1: number): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.BidirectionalSequenceRNNOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class Buffer {
					public static class: java.lang.Class<org.tensorflow.lite.schema.Buffer>;
					public static createBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Buffer;
					public static getRootAsBuffer(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.Buffer): org.tensorflow.lite.schema.Buffer;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static createDataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public static startDataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public dataVector(): com.google.flatbuffers.ByteVector;
					public static getRootAsBuffer(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Buffer;
					public static endBuffer(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static addData(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public dataAsByteBuffer(): java.nio.ByteBuffer;
					public dataInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static startBuffer(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public data(param0: number): number;
					public static createDataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: java.nio.ByteBuffer): number;
					public dataLength(): number;
					public dataVector(param0: com.google.flatbuffers.ByteVector): com.google.flatbuffers.ByteVector;
				}
				export module Buffer {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.Buffer.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.Buffer;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.Buffer, param1: number): org.tensorflow.lite.schema.Buffer;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.Buffer.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class BuiltinOperator {
					public static class: java.lang.Class<org.tensorflow.lite.schema.BuiltinOperator>;
					public static ADD: number;
					public static AVERAGE_POOL_2D: number;
					public static CONCATENATION: number;
					public static CONV_2D: number;
					public static DEPTHWISE_CONV_2D: number;
					public static DEPTH_TO_SPACE: number;
					public static DEQUANTIZE: number;
					public static EMBEDDING_LOOKUP: number;
					public static FLOOR: number;
					public static FULLY_CONNECTED: number;
					public static HASHTABLE_LOOKUP: number;
					public static L2_NORMALIZATION: number;
					public static L2_POOL_2D: number;
					public static LOCAL_RESPONSE_NORMALIZATION: number;
					public static LOGISTIC: number;
					public static LSH_PROJECTION: number;
					public static LSTM: number;
					public static MAX_POOL_2D: number;
					public static MUL: number;
					public static RELU: number;
					public static RELU_N1_TO_1: number;
					public static RELU6: number;
					public static RESHAPE: number;
					public static RESIZE_BILINEAR: number;
					public static RNN: number;
					public static SOFTMAX: number;
					public static SPACE_TO_DEPTH: number;
					public static SVDF: number;
					public static TANH: number;
					public static CONCAT_EMBEDDINGS: number;
					public static SKIP_GRAM: number;
					public static CALL: number;
					public static CUSTOM: number;
					public static EMBEDDING_LOOKUP_SPARSE: number;
					public static PAD: number;
					public static UNIDIRECTIONAL_SEQUENCE_RNN: number;
					public static GATHER: number;
					public static BATCH_TO_SPACE_ND: number;
					public static SPACE_TO_BATCH_ND: number;
					public static TRANSPOSE: number;
					public static MEAN: number;
					public static SUB: number;
					public static DIV: number;
					public static SQUEEZE: number;
					public static UNIDIRECTIONAL_SEQUENCE_LSTM: number;
					public static STRIDED_SLICE: number;
					public static BIDIRECTIONAL_SEQUENCE_RNN: number;
					public static EXP: number;
					public static TOPK_V2: number;
					public static SPLIT: number;
					public static LOG_SOFTMAX: number;
					public static DELEGATE: number;
					public static BIDIRECTIONAL_SEQUENCE_LSTM: number;
					public static CAST: number;
					public static PRELU: number;
					public static MAXIMUM: number;
					public static ARG_MAX: number;
					public static MINIMUM: number;
					public static LESS: number;
					public static NEG: number;
					public static PADV2: number;
					public static GREATER: number;
					public static GREATER_EQUAL: number;
					public static LESS_EQUAL: number;
					public static SELECT: number;
					public static SLICE: number;
					public static SIN: number;
					public static TRANSPOSE_CONV: number;
					public static SPARSE_TO_DENSE: number;
					public static TILE: number;
					public static EXPAND_DIMS: number;
					public static EQUAL: number;
					public static NOT_EQUAL: number;
					public static LOG: number;
					public static SUM: number;
					public static SQRT: number;
					public static RSQRT: number;
					public static SHAPE: number;
					public static POW: number;
					public static ARG_MIN: number;
					public static FAKE_QUANT: number;
					public static REDUCE_PROD: number;
					public static REDUCE_MAX: number;
					public static PACK: number;
					public static LOGICAL_OR: number;
					public static ONE_HOT: number;
					public static LOGICAL_AND: number;
					public static LOGICAL_NOT: number;
					public static UNPACK: number;
					public static REDUCE_MIN: number;
					public static FLOOR_DIV: number;
					public static REDUCE_ANY: number;
					public static SQUARE: number;
					public static ZEROS_LIKE: number;
					public static FILL: number;
					public static FLOOR_MOD: number;
					public static RANGE: number;
					public static RESIZE_NEAREST_NEIGHBOR: number;
					public static LEAKY_RELU: number;
					public static SQUARED_DIFFERENCE: number;
					public static MIRROR_PAD: number;
					public static ABS: number;
					public static SPLIT_V: number;
					public static UNIQUE: number;
					public static CEIL: number;
					public static REVERSE_V2: number;
					public static ADD_N: number;
					public static GATHER_ND: number;
					public static COS: number;
					public static WHERE: number;
					public static RANK: number;
					public static ELU: number;
					public static REVERSE_SEQUENCE: number;
					public static MATRIX_DIAG: number;
					public static QUANTIZE: number;
					public static MATRIX_SET_DIAG: number;
					public static ROUND: number;
					public static HARD_SWISH: number;
					public static IF: number;
					public static WHILE: number;
					public static NON_MAX_SUPPRESSION_V4: number;
					public static NON_MAX_SUPPRESSION_V5: number;
					public static SCATTER_ND: number;
					public static SELECT_V2: number;
					public static DENSIFY: number;
					public static SEGMENT_SUM: number;
					public static BATCH_MATMUL: number;
					public static PLACEHOLDER_FOR_GREATER_OP_CODES: number;
					public static CUMSUM: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class BuiltinOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.BuiltinOptions>;
					public static NONE: number;
					public static Conv2DOptions: number;
					public static DepthwiseConv2DOptions: number;
					public static ConcatEmbeddingsOptions: number;
					public static LSHProjectionOptions: number;
					public static Pool2DOptions: number;
					public static SVDFOptions: number;
					public static RNNOptions: number;
					public static FullyConnectedOptions: number;
					public static SoftmaxOptions: number;
					public static ConcatenationOptions: number;
					public static AddOptions: number;
					public static L2NormOptions: number;
					public static LocalResponseNormalizationOptions: number;
					public static LSTMOptions: number;
					public static ResizeBilinearOptions: number;
					public static CallOptions: number;
					public static ReshapeOptions: number;
					public static SkipGramOptions: number;
					public static SpaceToDepthOptions: number;
					public static EmbeddingLookupSparseOptions: number;
					public static MulOptions: number;
					public static PadOptions: number;
					public static GatherOptions: number;
					public static BatchToSpaceNDOptions: number;
					public static SpaceToBatchNDOptions: number;
					public static TransposeOptions: number;
					public static ReducerOptions: number;
					public static SubOptions: number;
					public static DivOptions: number;
					public static SqueezeOptions: number;
					public static SequenceRNNOptions: number;
					public static StridedSliceOptions: number;
					public static ExpOptions: number;
					public static TopKV2Options: number;
					public static SplitOptions: number;
					public static LogSoftmaxOptions: number;
					public static CastOptions: number;
					public static DequantizeOptions: number;
					public static MaximumMinimumOptions: number;
					public static ArgMaxOptions: number;
					public static LessOptions: number;
					public static NegOptions: number;
					public static PadV2Options: number;
					public static GreaterOptions: number;
					public static GreaterEqualOptions: number;
					public static LessEqualOptions: number;
					public static SelectOptions: number;
					public static SliceOptions: number;
					public static TransposeConvOptions: number;
					public static SparseToDenseOptions: number;
					public static TileOptions: number;
					public static ExpandDimsOptions: number;
					public static EqualOptions: number;
					public static NotEqualOptions: number;
					public static ShapeOptions: number;
					public static PowOptions: number;
					public static ArgMinOptions: number;
					public static FakeQuantOptions: number;
					public static PackOptions: number;
					public static LogicalOrOptions: number;
					public static OneHotOptions: number;
					public static LogicalAndOptions: number;
					public static LogicalNotOptions: number;
					public static UnpackOptions: number;
					public static FloorDivOptions: number;
					public static SquareOptions: number;
					public static ZerosLikeOptions: number;
					public static FillOptions: number;
					public static BidirectionalSequenceLSTMOptions: number;
					public static BidirectionalSequenceRNNOptions: number;
					public static UnidirectionalSequenceLSTMOptions: number;
					public static FloorModOptions: number;
					public static RangeOptions: number;
					public static ResizeNearestNeighborOptions: number;
					public static LeakyReluOptions: number;
					public static SquaredDifferenceOptions: number;
					public static MirrorPadOptions: number;
					public static AbsOptions: number;
					public static SplitVOptions: number;
					public static UniqueOptions: number;
					public static ReverseV2Options: number;
					public static AddNOptions: number;
					public static GatherNdOptions: number;
					public static CosOptions: number;
					public static WhereOptions: number;
					public static RankOptions: number;
					public static ReverseSequenceOptions: number;
					public static MatrixDiagOptions: number;
					public static QuantizeOptions: number;
					public static MatrixSetDiagOptions: number;
					public static HardSwishOptions: number;
					public static IfOptions: number;
					public static WhileOptions: number;
					public static DepthToSpaceOptions: number;
					public static NonMaxSuppressionV4Options: number;
					public static NonMaxSuppressionV5Options: number;
					public static ScatterNdOptions: number;
					public static SelectV2Options: number;
					public static DensifyOptions: number;
					public static SegmentSumOptions: number;
					public static BatchMatMulOptions: number;
					public static CumsumOptions: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class CallOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.CallOptions>;
					public static addSubgraph(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public subgraph(): number;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.CallOptions;
					public static startCallOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsCallOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.CallOptions;
					public static getRootAsCallOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.CallOptions): org.tensorflow.lite.schema.CallOptions;
					public static createCallOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static endCallOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module CallOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.CallOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.CallOptions, param1: number): org.tensorflow.lite.schema.CallOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.CallOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.CallOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class CastOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.CastOptions>;
					public static getRootAsCastOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.CastOptions): org.tensorflow.lite.schema.CastOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static createCastOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
					public static startCastOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static addOutDataType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public inDataType(): number;
					public static addInDataType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public constructor();
					public static getRootAsCastOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.CastOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.CastOptions;
					public outDataType(): number;
					public static endCastOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module CastOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.CastOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.CastOptions;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.CastOptions, param1: number): org.tensorflow.lite.schema.CastOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.CastOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class CombinerType {
					public static class: java.lang.Class<org.tensorflow.lite.schema.CombinerType>;
					public static SUM: number;
					public static MEAN: number;
					public static SQRTN: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ConcatEmbeddingsOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ConcatEmbeddingsOptions>;
					public embeddingDimPerChannelInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public numColumnsPerChannelVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public embeddingDimPerChannelVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public embeddingDimPerChannelVector(): com.google.flatbuffers.IntVector;
					public embeddingDimPerChannelLength(): number;
					public static endConcatEmbeddingsOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public embeddingDimPerChannelAsByteBuffer(): java.nio.ByteBuffer;
					public static startEmbeddingDimPerChannelVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsConcatEmbeddingsOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ConcatEmbeddingsOptions;
					public numColumnsPerChannelLength(): number;
					public constructor();
					public numColumnsPerChannelAsByteBuffer(): java.nio.ByteBuffer;
					public embeddingDimPerChannel(param0: number): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static addNumColumnsPerChannel(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static ValidateVersion(): void;
					public static createNumColumnsPerChannelVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ConcatEmbeddingsOptions;
					public numChannels(): number;
					public numColumnsPerChannelInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public numColumnsPerChannel(param0: number): number;
					public static startConcatEmbeddingsOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public numColumnsPerChannelVector(): com.google.flatbuffers.IntVector;
					public static createEmbeddingDimPerChannelVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public static getRootAsConcatEmbeddingsOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ConcatEmbeddingsOptions): org.tensorflow.lite.schema.ConcatEmbeddingsOptions;
					public static addNumChannels(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addEmbeddingDimPerChannel(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startNumColumnsPerChannelVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createConcatEmbeddingsOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number): number;
				}
				export module ConcatEmbeddingsOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ConcatEmbeddingsOptions.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.ConcatEmbeddingsOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ConcatEmbeddingsOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.ConcatEmbeddingsOptions, param1: number): org.tensorflow.lite.schema.ConcatEmbeddingsOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ConcatenationOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ConcatenationOptions>;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ConcatenationOptions;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addAxis(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startConcatenationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsConcatenationOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ConcatenationOptions;
					public fusedActivationFunction(): number;
					public static createConcatenationOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
					public constructor();
					public axis(): number;
					public static endConcatenationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsConcatenationOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ConcatenationOptions): org.tensorflow.lite.schema.ConcatenationOptions;
				}
				export module ConcatenationOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ConcatenationOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.ConcatenationOptions, param1: number): org.tensorflow.lite.schema.ConcatenationOptions;
						public get(param0: number): org.tensorflow.lite.schema.ConcatenationOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ConcatenationOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class Conv2DOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.Conv2DOptions>;
					public static startConv2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static addStrideW(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addDilationWFactor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static endConv2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsConv2DOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Conv2DOptions;
					public static addDilationHFactor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public fusedActivationFunction(): number;
					public padding(): number;
					public static createConv2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public constructor();
					public strideH(): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Conv2DOptions;
					public static getRootAsConv2DOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.Conv2DOptions): org.tensorflow.lite.schema.Conv2DOptions;
					public static addPadding(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addStrideH(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public strideW(): number;
					public dilationWFactor(): number;
					public dilationHFactor(): number;
				}
				export module Conv2DOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.Conv2DOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.Conv2DOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.Conv2DOptions;
						public get(param0: org.tensorflow.lite.schema.Conv2DOptions, param1: number): org.tensorflow.lite.schema.Conv2DOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class CosOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.CosOptions>;
					public static endCosOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsCosOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.CosOptions): org.tensorflow.lite.schema.CosOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.CosOptions;
					public static getRootAsCosOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.CosOptions;
					public static startCosOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module CosOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.CosOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.CosOptions;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.CosOptions, param1: number): org.tensorflow.lite.schema.CosOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.CosOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class CumsumOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.CumsumOptions>;
					public static getRootAsCumsumOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.CumsumOptions): org.tensorflow.lite.schema.CumsumOptions;
					public static getRootAsCumsumOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.CumsumOptions;
					public static addReverse(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static addExclusive(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public reverse(): boolean;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.CumsumOptions;
					public static createCumsumOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean, param2: boolean): number;
					public constructor();
					public static endCumsumOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static startCumsumOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public exclusive(): boolean;
				}
				export module CumsumOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.CumsumOptions.Vector>;
						public get(param0: org.tensorflow.lite.schema.CumsumOptions, param1: number): org.tensorflow.lite.schema.CumsumOptions;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.CumsumOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.CumsumOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class CustomOptionsFormat {
					public static class: java.lang.Class<org.tensorflow.lite.schema.CustomOptionsFormat>;
					public static FLEXBUFFERS: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class CustomQuantization {
					public static class: java.lang.Class<org.tensorflow.lite.schema.CustomQuantization>;
					public customVector(): com.google.flatbuffers.ByteVector;
					public static startCustomQuantization(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public customLength(): number;
					public customVector(param0: com.google.flatbuffers.ByteVector): com.google.flatbuffers.ByteVector;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.CustomQuantization;
					public custom(param0: number): number;
					public static addCustom(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static createCustomQuantization(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static getRootAsCustomQuantization(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.CustomQuantization): org.tensorflow.lite.schema.CustomQuantization;
					public customAsByteBuffer(): java.nio.ByteBuffer;
					public constructor();
					public static getRootAsCustomQuantization(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.CustomQuantization;
					public static startCustomVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createCustomVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public static createCustomVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: java.nio.ByteBuffer): number;
					public static endCustomQuantization(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public customInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
				}
				export module CustomQuantization {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.CustomQuantization.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.CustomQuantization;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.CustomQuantization.Vector;
						public get(param0: org.tensorflow.lite.schema.CustomQuantization, param1: number): org.tensorflow.lite.schema.CustomQuantization;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class DensifyOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.DensifyOptions>;
					public static startDensifyOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public static getRootAsDensifyOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.DensifyOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.DensifyOptions;
					public static getRootAsDensifyOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.DensifyOptions): org.tensorflow.lite.schema.DensifyOptions;
					public static endDensifyOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module DensifyOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.DensifyOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.DensifyOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.DensifyOptions;
						public get(param0: org.tensorflow.lite.schema.DensifyOptions, param1: number): org.tensorflow.lite.schema.DensifyOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class DepthToSpaceOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.DepthToSpaceOptions>;
					public static getRootAsDepthToSpaceOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.DepthToSpaceOptions;
					public static addBlockSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static endDepthToSpaceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.DepthToSpaceOptions;
					public constructor();
					public static createDepthToSpaceOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public blockSize(): number;
					public static ValidateVersion(): void;
					public static getRootAsDepthToSpaceOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.DepthToSpaceOptions): org.tensorflow.lite.schema.DepthToSpaceOptions;
					public static startDepthToSpaceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module DepthToSpaceOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.DepthToSpaceOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.DepthToSpaceOptions, param1: number): org.tensorflow.lite.schema.DepthToSpaceOptions;
						public get(param0: number): org.tensorflow.lite.schema.DepthToSpaceOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.DepthToSpaceOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class DepthwiseConv2DOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.DepthwiseConv2DOptions>;
					public static addStrideW(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsDepthwiseConv2DOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.DepthwiseConv2DOptions;
					public static endDepthwiseConv2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static addDilationWFactor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static createDepthwiseConv2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.DepthwiseConv2DOptions;
					public static addDilationHFactor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public fusedActivationFunction(): number;
					public padding(): number;
					public constructor();
					public static startDepthwiseConv2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public depthMultiplier(): number;
					public strideH(): number;
					public static addPadding(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addDepthMultiplier(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addStrideH(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public strideW(): number;
					public dilationWFactor(): number;
					public static getRootAsDepthwiseConv2DOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.DepthwiseConv2DOptions): org.tensorflow.lite.schema.DepthwiseConv2DOptions;
					public dilationHFactor(): number;
				}
				export module DepthwiseConv2DOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.DepthwiseConv2DOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.DepthwiseConv2DOptions;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.DepthwiseConv2DOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.DepthwiseConv2DOptions, param1: number): org.tensorflow.lite.schema.DepthwiseConv2DOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class DequantizeOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.DequantizeOptions>;
					public static getRootAsDequantizeOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.DequantizeOptions;
					public static endDequantizeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.DequantizeOptions;
					public constructor();
					public static getRootAsDequantizeOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.DequantizeOptions): org.tensorflow.lite.schema.DequantizeOptions;
					public static startDequantizeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
				}
				export module DequantizeOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.DequantizeOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.DequantizeOptions, param1: number): org.tensorflow.lite.schema.DequantizeOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.DequantizeOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.DequantizeOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class DimensionMetadata {
					public static class: java.lang.Class<org.tensorflow.lite.schema.DimensionMetadata>;
					public static addFormat(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addArraySegmentsType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createDimensionMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public denseSize(): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.DimensionMetadata;
					public static addArrayIndicesType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addDenseSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public format(): number;
					public arrayIndices(param0: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
					public static startDimensionMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static addArrayIndices(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public arraySegments(param0: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
					public arraySegmentsType(): number;
					public static addArraySegments(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public constructor();
					public static getRootAsDimensionMetadata(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.DimensionMetadata): org.tensorflow.lite.schema.DimensionMetadata;
					public static getRootAsDimensionMetadata(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.DimensionMetadata;
					public static endDimensionMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public arrayIndicesType(): number;
				}
				export module DimensionMetadata {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.DimensionMetadata.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.DimensionMetadata.Vector;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.DimensionMetadata;
						public get(param0: org.tensorflow.lite.schema.DimensionMetadata, param1: number): org.tensorflow.lite.schema.DimensionMetadata;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class DimensionType {
					public static class: java.lang.Class<org.tensorflow.lite.schema.DimensionType>;
					public static DENSE: number;
					public static SPARSE_CSR: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class DivOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.DivOptions>;
					public static createDivOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static startDivOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsDivOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.DivOptions): org.tensorflow.lite.schema.DivOptions;
					public fusedActivationFunction(): number;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.DivOptions;
					public static endDivOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsDivOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.DivOptions;
				}
				export module DivOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.DivOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.DivOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.DivOptions, param1: number): org.tensorflow.lite.schema.DivOptions;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.DivOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class EmbeddingLookupSparseOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.EmbeddingLookupSparseOptions>;
					public combiner(): number;
					public static addCombiner(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startEmbeddingLookupSparseOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.EmbeddingLookupSparseOptions;
					public static createEmbeddingLookupSparseOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static getRootAsEmbeddingLookupSparseOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.EmbeddingLookupSparseOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static endEmbeddingLookupSparseOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsEmbeddingLookupSparseOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.EmbeddingLookupSparseOptions): org.tensorflow.lite.schema.EmbeddingLookupSparseOptions;
				}
				export module EmbeddingLookupSparseOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.EmbeddingLookupSparseOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.EmbeddingLookupSparseOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.EmbeddingLookupSparseOptions, param1: number): org.tensorflow.lite.schema.EmbeddingLookupSparseOptions;
						public get(param0: number): org.tensorflow.lite.schema.EmbeddingLookupSparseOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class EqualOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.EqualOptions>;
					public static endEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public static getRootAsEqualOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.EqualOptions): org.tensorflow.lite.schema.EqualOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.EqualOptions;
					public static getRootAsEqualOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.EqualOptions;
				}
				export module EqualOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.EqualOptions.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.EqualOptions;
						public get(param0: org.tensorflow.lite.schema.EqualOptions, param1: number): org.tensorflow.lite.schema.EqualOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.EqualOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ExpOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ExpOptions>;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ExpOptions;
					public static startExpOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static endExpOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsExpOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ExpOptions): org.tensorflow.lite.schema.ExpOptions;
					public static getRootAsExpOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ExpOptions;
				}
				export module ExpOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ExpOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.ExpOptions, param1: number): org.tensorflow.lite.schema.ExpOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ExpOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.ExpOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ExpandDimsOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ExpandDimsOptions>;
					public constructor();
					public static endExpandDimsOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ExpandDimsOptions;
					public static getRootAsExpandDimsOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ExpandDimsOptions;
					public static getRootAsExpandDimsOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ExpandDimsOptions): org.tensorflow.lite.schema.ExpandDimsOptions;
					public static startExpandDimsOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module ExpandDimsOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ExpandDimsOptions.Vector>;
						public get(param0: org.tensorflow.lite.schema.ExpandDimsOptions, param1: number): org.tensorflow.lite.schema.ExpandDimsOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ExpandDimsOptions.Vector;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.ExpandDimsOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class FakeQuantOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.FakeQuantOptions>;
					public static addNumBits(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsFakeQuantOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.FakeQuantOptions;
					public static startFakeQuantOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endFakeQuantOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static addMax(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static addNarrowRange(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public numBits(): number;
					public min(): number;
					public narrowRange(): boolean;
					public static addMin(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.FakeQuantOptions;
					public constructor();
					public max(): number;
					public static createFakeQuantOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: boolean): number;
					public static getRootAsFakeQuantOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.FakeQuantOptions): org.tensorflow.lite.schema.FakeQuantOptions;
				}
				export module FakeQuantOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.FakeQuantOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.FakeQuantOptions, param1: number): org.tensorflow.lite.schema.FakeQuantOptions;
						public get(param0: number): org.tensorflow.lite.schema.FakeQuantOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.FakeQuantOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class FillOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.FillOptions>;
					public static getRootAsFillOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.FillOptions): org.tensorflow.lite.schema.FillOptions;
					public static startFillOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsFillOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.FillOptions;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.FillOptions;
					public static endFillOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module FillOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.FillOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.FillOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.FillOptions, param1: number): org.tensorflow.lite.schema.FillOptions;
						public get(param0: number): org.tensorflow.lite.schema.FillOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class FloorDivOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.FloorDivOptions>;
					public static startFloorDivOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endFloorDivOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.FloorDivOptions;
					public static ValidateVersion(): void;
					public static getRootAsFloorDivOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.FloorDivOptions;
					public static getRootAsFloorDivOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.FloorDivOptions): org.tensorflow.lite.schema.FloorDivOptions;
				}
				export module FloorDivOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.FloorDivOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.FloorDivOptions.Vector;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.FloorDivOptions, param1: number): org.tensorflow.lite.schema.FloorDivOptions;
						public get(param0: number): org.tensorflow.lite.schema.FloorDivOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class FloorModOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.FloorModOptions>;
					public static startFloorModOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsFloorModOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.FloorModOptions): org.tensorflow.lite.schema.FloorModOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.FloorModOptions;
					public static endFloorModOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsFloorModOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.FloorModOptions;
				}
				export module FloorModOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.FloorModOptions.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.FloorModOptions;
						public get(param0: org.tensorflow.lite.schema.FloorModOptions, param1: number): org.tensorflow.lite.schema.FloorModOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.FloorModOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class FullyConnectedOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.FullyConnectedOptions>;
					public static addWeightsFormat(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public weightsFormat(): number;
					public keepNumDims(): boolean;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startFullyConnectedOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public asymmetricQuantizeInputs(): boolean;
					public static endFullyConnectedOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.FullyConnectedOptions;
					public static getRootAsFullyConnectedOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.FullyConnectedOptions): org.tensorflow.lite.schema.FullyConnectedOptions;
					public fusedActivationFunction(): number;
					public constructor();
					public static addKeepNumDims(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public static getRootAsFullyConnectedOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.FullyConnectedOptions;
					public static addAsymmetricQuantizeInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public static createFullyConnectedOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: boolean, param4: boolean): number;
				}
				export module FullyConnectedOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.FullyConnectedOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.FullyConnectedOptions.Vector;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.FullyConnectedOptions;
						public get(param0: org.tensorflow.lite.schema.FullyConnectedOptions, param1: number): org.tensorflow.lite.schema.FullyConnectedOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class FullyConnectedOptionsWeightsFormat {
					public static class: java.lang.Class<org.tensorflow.lite.schema.FullyConnectedOptionsWeightsFormat>;
					public static DEFAULT: number;
					public static SHUFFLED4x16INT8: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class GatherNdOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.GatherNdOptions>;
					public static getRootAsGatherNdOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.GatherNdOptions): org.tensorflow.lite.schema.GatherNdOptions;
					public static getRootAsGatherNdOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.GatherNdOptions;
					public constructor();
					public static startGatherNdOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static endGatherNdOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.GatherNdOptions;
				}
				export module GatherNdOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.GatherNdOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.GatherNdOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.GatherNdOptions, param1: number): org.tensorflow.lite.schema.GatherNdOptions;
						public get(param0: number): org.tensorflow.lite.schema.GatherNdOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class GatherOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.GatherOptions>;
					public static getRootAsGatherOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.GatherOptions): org.tensorflow.lite.schema.GatherOptions;
					public static addAxis(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public constructor();
					public static getRootAsGatherOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.GatherOptions;
					public axis(): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.GatherOptions;
					public static createGatherOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static startGatherOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endGatherOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module GatherOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.GatherOptions.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.GatherOptions;
						public get(param0: org.tensorflow.lite.schema.GatherOptions, param1: number): org.tensorflow.lite.schema.GatherOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.GatherOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class GreaterEqualOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.GreaterEqualOptions>;
					public static endGreaterEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsGreaterEqualOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.GreaterEqualOptions;
					public static getRootAsGreaterEqualOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.GreaterEqualOptions): org.tensorflow.lite.schema.GreaterEqualOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.GreaterEqualOptions;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startGreaterEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module GreaterEqualOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.GreaterEqualOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.GreaterEqualOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.GreaterEqualOptions;
						public get(param0: org.tensorflow.lite.schema.GreaterEqualOptions, param1: number): org.tensorflow.lite.schema.GreaterEqualOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class GreaterOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.GreaterOptions>;
					public static getRootAsGreaterOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.GreaterOptions): org.tensorflow.lite.schema.GreaterOptions;
					public static endGreaterOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public static startGreaterOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsGreaterOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.GreaterOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.GreaterOptions;
				}
				export module GreaterOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.GreaterOptions.Vector>;
						public get(param0: org.tensorflow.lite.schema.GreaterOptions, param1: number): org.tensorflow.lite.schema.GreaterOptions;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.GreaterOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.GreaterOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class HardSwishOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.HardSwishOptions>;
					public static endHardSwishOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsHardSwishOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.HardSwishOptions): org.tensorflow.lite.schema.HardSwishOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.HardSwishOptions;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startHardSwishOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsHardSwishOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.HardSwishOptions;
				}
				export module HardSwishOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.HardSwishOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.HardSwishOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.HardSwishOptions;
						public get(param0: org.tensorflow.lite.schema.HardSwishOptions, param1: number): org.tensorflow.lite.schema.HardSwishOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class IfOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.IfOptions>;
					public static createIfOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.IfOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsIfOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.IfOptions): org.tensorflow.lite.schema.IfOptions;
					public static addElseSubgraphIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public elseSubgraphIndex(): number;
					public static getRootAsIfOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.IfOptions;
					public static startIfOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public static addThenSubgraphIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static endIfOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public thenSubgraphIndex(): number;
				}
				export module IfOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.IfOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.IfOptions, param1: number): org.tensorflow.lite.schema.IfOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.IfOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.IfOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class Int32Vector {
					public static class: java.lang.Class<org.tensorflow.lite.schema.Int32Vector>;
					public static getRootAsInt32Vector(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.Int32Vector): org.tensorflow.lite.schema.Int32Vector;
					public valuesLength(): number;
					public valuesVector(): com.google.flatbuffers.IntVector;
					public static startInt32Vector(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startValuesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static endInt32Vector(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Int32Vector;
					public static addValues(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public valuesInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static getRootAsInt32Vector(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Int32Vector;
					public constructor();
					public valuesVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public static createInt32Vector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static createValuesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public valuesAsByteBuffer(): java.nio.ByteBuffer;
					public values(param0: number): number;
				}
				export module Int32Vector {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.Int32Vector.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.Int32Vector;
						public get(param0: org.tensorflow.lite.schema.Int32Vector, param1: number): org.tensorflow.lite.schema.Int32Vector;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.Int32Vector.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class L2NormOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.L2NormOptions>;
					public static getRootAsL2NormOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.L2NormOptions): org.tensorflow.lite.schema.L2NormOptions;
					public fusedActivationFunction(): number;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.L2NormOptions;
					public constructor();
					public static createL2NormOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsL2NormOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.L2NormOptions;
					public static startL2NormOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endL2NormOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module L2NormOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.L2NormOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.L2NormOptions;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.L2NormOptions, param1: number): org.tensorflow.lite.schema.L2NormOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.L2NormOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class LSHProjectionOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.LSHProjectionOptions>;
					public static endLSHProjectionOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsLSHProjectionOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.LSHProjectionOptions): org.tensorflow.lite.schema.LSHProjectionOptions;
					public static startLSHProjectionOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public type(): number;
					public static createLSHProjectionOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static addType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LSHProjectionOptions;
					public static getRootAsLSHProjectionOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.LSHProjectionOptions;
				}
				export module LSHProjectionOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.LSHProjectionOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.LSHProjectionOptions;
						public get(param0: org.tensorflow.lite.schema.LSHProjectionOptions, param1: number): org.tensorflow.lite.schema.LSHProjectionOptions;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.LSHProjectionOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class LSHProjectionType {
					public static class: java.lang.Class<org.tensorflow.lite.schema.LSHProjectionType>;
					public static UNKNOWN: number;
					public static SPARSE: number;
					public static DENSE: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class LSTMKernelType {
					public static class: java.lang.Class<org.tensorflow.lite.schema.LSTMKernelType>;
					public static FULL: number;
					public static BASIC: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class LSTMOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.LSTMOptions>;
					public static getRootAsLSTMOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.LSTMOptions;
					public static getRootAsLSTMOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.LSTMOptions): org.tensorflow.lite.schema.LSTMOptions;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public projClip(): number;
					public static createLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: boolean): number;
					public cellClip(): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public asymmetricQuantizeInputs(): boolean;
					public static addProjClip(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addCellClip(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static addKernelType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public fusedActivationFunction(): number;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LSTMOptions;
					public kernelType(): number;
					public static addAsymmetricQuantizeInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public static endLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module LSTMOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.LSTMOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.LSTMOptions, param1: number): org.tensorflow.lite.schema.LSTMOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.LSTMOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.LSTMOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class LeakyReluOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.LeakyReluOptions>;
					public static addAlpha(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsLeakyReluOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.LeakyReluOptions): org.tensorflow.lite.schema.LeakyReluOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LeakyReluOptions;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static startLeakyReluOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static ValidateVersion(): void;
					public static createLeakyReluOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static endLeakyReluOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public alpha(): number;
					public static getRootAsLeakyReluOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.LeakyReluOptions;
				}
				export module LeakyReluOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.LeakyReluOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.LeakyReluOptions.Vector;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.LeakyReluOptions, param1: number): org.tensorflow.lite.schema.LeakyReluOptions;
						public get(param0: number): org.tensorflow.lite.schema.LeakyReluOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class LessEqualOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.LessEqualOptions>;
					public static getRootAsLessEqualOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.LessEqualOptions;
					public static getRootAsLessEqualOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.LessEqualOptions): org.tensorflow.lite.schema.LessEqualOptions;
					public static endLessEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LessEqualOptions;
					public static ValidateVersion(): void;
					public static startLessEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module LessEqualOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.LessEqualOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.LessEqualOptions;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.LessEqualOptions, param1: number): org.tensorflow.lite.schema.LessEqualOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.LessEqualOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class LessOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.LessOptions>;
					public static startLessOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static endLessOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LessOptions;
					public static getRootAsLessOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.LessOptions): org.tensorflow.lite.schema.LessOptions;
					public static getRootAsLessOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.LessOptions;
				}
				export module LessOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.LessOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.LessOptions, param1: number): org.tensorflow.lite.schema.LessOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.LessOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.LessOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class LocalResponseNormalizationOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.LocalResponseNormalizationOptions>;
					public static addAlpha(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LocalResponseNormalizationOptions;
					public bias(): number;
					public alpha(): number;
					public static endLocalResponseNormalizationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public radius(): number;
					public static getRootAsLocalResponseNormalizationOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.LocalResponseNormalizationOptions;
					public constructor();
					public static addBeta(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsLocalResponseNormalizationOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.LocalResponseNormalizationOptions): org.tensorflow.lite.schema.LocalResponseNormalizationOptions;
					public beta(): number;
					public static createLocalResponseNormalizationOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number): number;
					public static addRadius(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startLocalResponseNormalizationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static addBias(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
				}
				export module LocalResponseNormalizationOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.LocalResponseNormalizationOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.LocalResponseNormalizationOptions, param1: number): org.tensorflow.lite.schema.LocalResponseNormalizationOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.LocalResponseNormalizationOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.LocalResponseNormalizationOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class LogSoftmaxOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.LogSoftmaxOptions>;
					public static getRootAsLogSoftmaxOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.LogSoftmaxOptions): org.tensorflow.lite.schema.LogSoftmaxOptions;
					public static endLogSoftmaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogSoftmaxOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static startLogSoftmaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static ValidateVersion(): void;
					public static getRootAsLogSoftmaxOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogSoftmaxOptions;
				}
				export module LogSoftmaxOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.LogSoftmaxOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.LogSoftmaxOptions, param1: number): org.tensorflow.lite.schema.LogSoftmaxOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogSoftmaxOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.LogSoftmaxOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class LogicalAndOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalAndOptions>;
					public constructor();
					public static endLogicalAndOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsLogicalAndOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.LogicalAndOptions): org.tensorflow.lite.schema.LogicalAndOptions;
					public static startLogicalAndOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsLogicalAndOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogicalAndOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogicalAndOptions;
				}
				export module LogicalAndOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalAndOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.LogicalAndOptions, param1: number): org.tensorflow.lite.schema.LogicalAndOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogicalAndOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.LogicalAndOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class LogicalNotOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalNotOptions>;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogicalNotOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startLogicalNotOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsLogicalNotOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.LogicalNotOptions): org.tensorflow.lite.schema.LogicalNotOptions;
					public static endLogicalNotOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsLogicalNotOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogicalNotOptions;
				}
				export module LogicalNotOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalNotOptions.Vector>;
						public get(param0: org.tensorflow.lite.schema.LogicalNotOptions, param1: number): org.tensorflow.lite.schema.LogicalNotOptions;
						public get(param0: number): org.tensorflow.lite.schema.LogicalNotOptions;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogicalNotOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class LogicalOrOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalOrOptions>;
					public static getRootAsLogicalOrOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogicalOrOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogicalOrOptions;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static startLogicalOrOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static ValidateVersion(): void;
					public static endLogicalOrOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsLogicalOrOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.LogicalOrOptions): org.tensorflow.lite.schema.LogicalOrOptions;
				}
				export module LogicalOrOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.LogicalOrOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.LogicalOrOptions, param1: number): org.tensorflow.lite.schema.LogicalOrOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.LogicalOrOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.LogicalOrOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class MatrixDiagOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.MatrixDiagOptions>;
					public static startMatrixDiagOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsMatrixDiagOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.MatrixDiagOptions;
					public static endMatrixDiagOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public static getRootAsMatrixDiagOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.MatrixDiagOptions): org.tensorflow.lite.schema.MatrixDiagOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.MatrixDiagOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
				}
				export module MatrixDiagOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.MatrixDiagOptions.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.MatrixDiagOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.MatrixDiagOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.MatrixDiagOptions, param1: number): org.tensorflow.lite.schema.MatrixDiagOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class MatrixSetDiagOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.MatrixSetDiagOptions>;
					public static endMatrixSetDiagOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public static getRootAsMatrixSetDiagOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.MatrixSetDiagOptions): org.tensorflow.lite.schema.MatrixSetDiagOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsMatrixSetDiagOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.MatrixSetDiagOptions;
					public static startMatrixSetDiagOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.MatrixSetDiagOptions;
				}
				export module MatrixSetDiagOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.MatrixSetDiagOptions.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.MatrixSetDiagOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.MatrixSetDiagOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.MatrixSetDiagOptions, param1: number): org.tensorflow.lite.schema.MatrixSetDiagOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class MaximumMinimumOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.MaximumMinimumOptions>;
					public static endMaximumMinimumOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public static getRootAsMaximumMinimumOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.MaximumMinimumOptions): org.tensorflow.lite.schema.MaximumMinimumOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.MaximumMinimumOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startMaximumMinimumOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsMaximumMinimumOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.MaximumMinimumOptions;
				}
				export module MaximumMinimumOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.MaximumMinimumOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.MaximumMinimumOptions, param1: number): org.tensorflow.lite.schema.MaximumMinimumOptions;
						public get(param0: number): org.tensorflow.lite.schema.MaximumMinimumOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.MaximumMinimumOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class Metadata {
					public static class: java.lang.Class<org.tensorflow.lite.schema.Metadata>;
					public buffer(): number;
					public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public name(): string;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Metadata;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsMetadata(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Metadata;
					public static createMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
					public constructor();
					public static addBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsMetadata(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.Metadata): org.tensorflow.lite.schema.Metadata;
					public static startMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public nameAsByteBuffer(): java.nio.ByteBuffer;
					public static endMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module Metadata {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.Metadata.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.Metadata.Vector;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.Metadata;
						public get(param0: org.tensorflow.lite.schema.Metadata, param1: number): org.tensorflow.lite.schema.Metadata;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class MirrorPadMode {
					public static class: java.lang.Class<org.tensorflow.lite.schema.MirrorPadMode>;
					public static REFLECT: number;
					public static SYMMETRIC: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class MirrorPadOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.MirrorPadOptions>;
					public static getRootAsMirrorPadOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.MirrorPadOptions;
					public static createMirrorPadOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static addMode(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsMirrorPadOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.MirrorPadOptions): org.tensorflow.lite.schema.MirrorPadOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.MirrorPadOptions;
					public mode(): number;
					public static startMirrorPadOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endMirrorPadOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module MirrorPadOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.MirrorPadOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.MirrorPadOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.MirrorPadOptions;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.MirrorPadOptions, param1: number): org.tensorflow.lite.schema.MirrorPadOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class Model {
					public static class: java.lang.Class<org.tensorflow.lite.schema.Model>;
					public static createOperatorCodesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public version(): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Model;
					public static startMetadataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createModel(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): number;
					public signatureDefsVector(param0: org.tensorflow.lite.schema.SignatureDef.Vector): org.tensorflow.lite.schema.SignatureDef.Vector;
					public static addDescription(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public metadata(param0: number): org.tensorflow.lite.schema.Metadata;
					public static addMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public subgraphsVector(param0: org.tensorflow.lite.schema.SubGraph.Vector): org.tensorflow.lite.schema.SubGraph.Vector;
					public static finishModelBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public constructor();
					public buffersVector(param0: org.tensorflow.lite.schema.Buffer.Vector): org.tensorflow.lite.schema.Buffer.Vector;
					public static createSignatureDefsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public static addSubgraphs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsModel(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.Model): org.tensorflow.lite.schema.Model;
					public static startOperatorCodesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createSubgraphsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public buffers(param0: number): org.tensorflow.lite.schema.Buffer;
					public static endModel(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static addMetadataBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public metadataBufferVector(): com.google.flatbuffers.IntVector;
					public operatorCodes(param0: org.tensorflow.lite.schema.OperatorCode, param1: number): org.tensorflow.lite.schema.OperatorCode;
					public subgraphsVector(): org.tensorflow.lite.schema.SubGraph.Vector;
					public subgraphs(param0: org.tensorflow.lite.schema.SubGraph, param1: number): org.tensorflow.lite.schema.SubGraph;
					public metadata(param0: org.tensorflow.lite.schema.Metadata, param1: number): org.tensorflow.lite.schema.Metadata;
					public metadataVector(): org.tensorflow.lite.schema.Metadata.Vector;
					public static createMetadataBufferVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public static ModelBufferHasIdentifier(param0: java.nio.ByteBuffer): boolean;
					public signatureDefsVector(): org.tensorflow.lite.schema.SignatureDef.Vector;
					public static startSubgraphsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startBuffersVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsModel(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Model;
					public static createBuffersVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public subgraphsLength(): number;
					public metadataBufferLength(): number;
					public signatureDefs(param0: number): org.tensorflow.lite.schema.SignatureDef;
					public static startMetadataBufferVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public signatureDefsLength(): number;
					public operatorCodesVector(param0: org.tensorflow.lite.schema.OperatorCode.Vector): org.tensorflow.lite.schema.OperatorCode.Vector;
					public static finishSizePrefixedModelBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public signatureDefs(param0: org.tensorflow.lite.schema.SignatureDef, param1: number): org.tensorflow.lite.schema.SignatureDef;
					public static addOperatorCodes(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public metadataBufferInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public operatorCodesVector(): org.tensorflow.lite.schema.OperatorCode.Vector;
					public static addSignatureDefs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public metadataLength(): number;
					public buffers(param0: org.tensorflow.lite.schema.Buffer, param1: number): org.tensorflow.lite.schema.Buffer;
					public buffersVector(): org.tensorflow.lite.schema.Buffer.Vector;
					public operatorCodes(param0: number): org.tensorflow.lite.schema.OperatorCode;
					public metadataBufferAsByteBuffer(): java.nio.ByteBuffer;
					public static addBuffers(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public descriptionAsByteBuffer(): java.nio.ByteBuffer;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public description(): string;
					public static createMetadataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public static ValidateVersion(): void;
					public buffersLength(): number;
					public metadataBufferVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public operatorCodesLength(): number;
					public static startModel(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static startSignatureDefsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public metadataBuffer(param0: number): number;
					public descriptionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public subgraphs(param0: number): org.tensorflow.lite.schema.SubGraph;
					public metadataVector(param0: org.tensorflow.lite.schema.Metadata.Vector): org.tensorflow.lite.schema.Metadata.Vector;
					public static addVersion(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
				}
				export module Model {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.Model.Vector>;
						public get(param0: org.tensorflow.lite.schema.Model, param1: number): org.tensorflow.lite.schema.Model;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.Model;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.Model.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class MulOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.MulOptions>;
					public static endMulOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static createMulOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public fusedActivationFunction(): number;
					public static startMulOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.MulOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsMulOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.MulOptions): org.tensorflow.lite.schema.MulOptions;
					public static getRootAsMulOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.MulOptions;
				}
				export module MulOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.MulOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.MulOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.MulOptions;
						public get(param0: org.tensorflow.lite.schema.MulOptions, param1: number): org.tensorflow.lite.schema.MulOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class NegOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.NegOptions>;
					public static getRootAsNegOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.NegOptions): org.tensorflow.lite.schema.NegOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.NegOptions;
					public constructor();
					public static endNegOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsNegOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.NegOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startNegOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module NegOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.NegOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.NegOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.NegOptions, param1: number): org.tensorflow.lite.schema.NegOptions;
						public get(param0: number): org.tensorflow.lite.schema.NegOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class NonMaxSuppressionV4Options {
					public static class: java.lang.Class<org.tensorflow.lite.schema.NonMaxSuppressionV4Options>;
					public static getRootAsNonMaxSuppressionV4Options(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.NonMaxSuppressionV4Options;
					public constructor();
					public static startNonMaxSuppressionV4Options(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.NonMaxSuppressionV4Options;
					public static endNonMaxSuppressionV4Options(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsNonMaxSuppressionV4Options(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.NonMaxSuppressionV4Options): org.tensorflow.lite.schema.NonMaxSuppressionV4Options;
				}
				export module NonMaxSuppressionV4Options {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.NonMaxSuppressionV4Options.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.NonMaxSuppressionV4Options.Vector;
						public get(param0: number): org.tensorflow.lite.schema.NonMaxSuppressionV4Options;
						public get(param0: org.tensorflow.lite.schema.NonMaxSuppressionV4Options, param1: number): org.tensorflow.lite.schema.NonMaxSuppressionV4Options;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class NonMaxSuppressionV5Options {
					public static class: java.lang.Class<org.tensorflow.lite.schema.NonMaxSuppressionV5Options>;
					public static getRootAsNonMaxSuppressionV5Options(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.NonMaxSuppressionV5Options;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.NonMaxSuppressionV5Options;
					public static endNonMaxSuppressionV5Options(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static startNonMaxSuppressionV5Options(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsNonMaxSuppressionV5Options(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.NonMaxSuppressionV5Options): org.tensorflow.lite.schema.NonMaxSuppressionV5Options;
				}
				export module NonMaxSuppressionV5Options {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.NonMaxSuppressionV5Options.Vector>;
						public get(param0: org.tensorflow.lite.schema.NonMaxSuppressionV5Options, param1: number): org.tensorflow.lite.schema.NonMaxSuppressionV5Options;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.NonMaxSuppressionV5Options;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.NonMaxSuppressionV5Options.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class NotEqualOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.NotEqualOptions>;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.NotEqualOptions;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsNotEqualOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.NotEqualOptions): org.tensorflow.lite.schema.NotEqualOptions;
					public static endNotEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsNotEqualOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.NotEqualOptions;
					public static startNotEqualOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module NotEqualOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.NotEqualOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.NotEqualOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.NotEqualOptions;
						public get(param0: org.tensorflow.lite.schema.NotEqualOptions, param1: number): org.tensorflow.lite.schema.NotEqualOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class OneHotOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.OneHotOptions>;
					public static createOneHotOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static startOneHotOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static addAxis(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public constructor();
					public axis(): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.OneHotOptions;
					public static ValidateVersion(): void;
					public static getRootAsOneHotOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.OneHotOptions;
					public static getRootAsOneHotOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.OneHotOptions): org.tensorflow.lite.schema.OneHotOptions;
					public static endOneHotOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module OneHotOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.OneHotOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.OneHotOptions, param1: number): org.tensorflow.lite.schema.OneHotOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.OneHotOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.OneHotOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class Operator {
					public static class: java.lang.Class<org.tensorflow.lite.schema.Operator>;
					public intermediatesVector(): com.google.flatbuffers.IntVector;
					public static addCustomOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public customOptionsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public customOptionsVector(): com.google.flatbuffers.ByteVector;
					public intermediatesAsByteBuffer(): java.nio.ByteBuffer;
					public inputsVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public inputsAsByteBuffer(): java.nio.ByteBuffer;
					public constructor();
					public customOptionsLength(): number;
					public static addBuiltinOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startMutatingVariableInputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startOperator(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static createCustomOptionsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: java.nio.ByteBuffer): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Operator;
					public mutatingVariableInputsAsByteBuffer(): java.nio.ByteBuffer;
					public outputsVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public static endOperator(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public inputsVector(): com.google.flatbuffers.IntVector;
					public builtinOptionsType(): number;
					public intermediatesVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public opcodeIndex(): number;
					public static startCustomOptionsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startIntermediatesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addOutputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public outputsLength(): number;
					public intermediatesLength(): number;
					public static addBuiltinOptionsType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public inputsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static addMutatingVariableInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addCustomOptionsFormat(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public mutatingVariableInputs(param0: number): boolean;
					public static addInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public mutatingVariableInputsVector(param0: com.google.flatbuffers.BooleanVector): com.google.flatbuffers.BooleanVector;
					public static addOpcodeIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public outputs(param0: number): number;
					public static createInputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public outputsAsByteBuffer(): java.nio.ByteBuffer;
					public static getRootAsOperator(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Operator;
					public static createMutatingVariableInputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<boolean>): number;
					public customOptionsFormat(): number;
					public static startInputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createOperator(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): number;
					public mutatingVariableInputsVector(): com.google.flatbuffers.BooleanVector;
					public inputsLength(): number;
					public customOptionsVector(param0: com.google.flatbuffers.ByteVector): com.google.flatbuffers.ByteVector;
					public mutatingVariableInputsLength(): number;
					public outputsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public intermediates(param0: number): number;
					public static createOutputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public customOptions(param0: number): number;
					public intermediatesInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public inputs(param0: number): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static createIntermediatesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public mutatingVariableInputsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public builtinOptions(param0: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
					public outputsVector(): com.google.flatbuffers.IntVector;
					public customOptionsAsByteBuffer(): java.nio.ByteBuffer;
					public static startOutputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addIntermediates(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsOperator(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.Operator): org.tensorflow.lite.schema.Operator;
					public static createCustomOptionsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
				}
				export module Operator {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.Operator.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.Operator.Vector;
						public get(param0: org.tensorflow.lite.schema.Operator, param1: number): org.tensorflow.lite.schema.Operator;
						public get(param0: number): org.tensorflow.lite.schema.Operator;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class OperatorCode {
					public static class: java.lang.Class<org.tensorflow.lite.schema.OperatorCode>;
					public customCodeInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static addBuiltinCode(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public version(): number;
					public builtinCode(): number;
					public static startOperatorCode(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endOperatorCode(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public customCode(): string;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.OperatorCode;
					public static addDeprecatedBuiltinCode(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static ValidateVersion(): void;
					public static getRootAsOperatorCode(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.OperatorCode;
					public static createOperatorCode(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number): number;
					public static addCustomCode(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public deprecatedBuiltinCode(): number;
					public constructor();
					public static getRootAsOperatorCode(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.OperatorCode): org.tensorflow.lite.schema.OperatorCode;
					public customCodeAsByteBuffer(): java.nio.ByteBuffer;
					public static addVersion(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
				}
				export module OperatorCode {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.OperatorCode.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.OperatorCode, param1: number): org.tensorflow.lite.schema.OperatorCode;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.OperatorCode.Vector;
						public get(param0: number): org.tensorflow.lite.schema.OperatorCode;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class PackOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.PackOptions>;
					public static addAxis(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsPackOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.PackOptions;
					public static getRootAsPackOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.PackOptions): org.tensorflow.lite.schema.PackOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static endPackOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static ValidateVersion(): void;
					public static startPackOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public static addValuesCount(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public axis(): number;
					public static createPackOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
					public valuesCount(): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.PackOptions;
				}
				export module PackOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.PackOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.PackOptions.Vector;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.PackOptions;
						public get(param0: org.tensorflow.lite.schema.PackOptions, param1: number): org.tensorflow.lite.schema.PackOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class PadOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.PadOptions>;
					public static startPadOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.PadOptions;
					public static endPadOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsPadOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.PadOptions): org.tensorflow.lite.schema.PadOptions;
					public constructor();
					public static getRootAsPadOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.PadOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
				}
				export module PadOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.PadOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.PadOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.PadOptions, param1: number): org.tensorflow.lite.schema.PadOptions;
						public get(param0: number): org.tensorflow.lite.schema.PadOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class PadV2Options {
					public static class: java.lang.Class<org.tensorflow.lite.schema.PadV2Options>;
					public static getRootAsPadV2Options(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.PadV2Options): org.tensorflow.lite.schema.PadV2Options;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.PadV2Options;
					public constructor();
					public static getRootAsPadV2Options(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.PadV2Options;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startPadV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endPadV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module PadV2Options {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.PadV2Options.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.PadV2Options.Vector;
						public get(param0: number): org.tensorflow.lite.schema.PadV2Options;
						public get(param0: org.tensorflow.lite.schema.PadV2Options, param1: number): org.tensorflow.lite.schema.PadV2Options;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class Padding {
					public static class: java.lang.Class<org.tensorflow.lite.schema.Padding>;
					public static SAME: number;
					public static VALID: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class Pool2DOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.Pool2DOptions>;
					public static createPool2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
					public static addStrideW(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startPool2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public filterHeight(): number;
					public static addFilterHeight(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public fusedActivationFunction(): number;
					public padding(): number;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Pool2DOptions;
					public strideH(): number;
					public static getRootAsPool2DOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Pool2DOptions;
					public static addFilterWidth(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addPadding(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static endPool2DOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public filterWidth(): number;
					public static getRootAsPool2DOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.Pool2DOptions): org.tensorflow.lite.schema.Pool2DOptions;
					public static addStrideH(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public strideW(): number;
				}
				export module Pool2DOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.Pool2DOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.Pool2DOptions, param1: number): org.tensorflow.lite.schema.Pool2DOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.Pool2DOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.Pool2DOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class PowOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.PowOptions>;
					public static endPowOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.PowOptions;
					public static getRootAsPowOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.PowOptions): org.tensorflow.lite.schema.PowOptions;
					public static startPowOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsPowOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.PowOptions;
				}
				export module PowOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.PowOptions.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.PowOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.PowOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.PowOptions, param1: number): org.tensorflow.lite.schema.PowOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class QuantizationDetails {
					public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizationDetails>;
					public static NONE: number;
					public static CustomQuantization: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class QuantizationParameters {
					public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizationParameters>;
					public maxAsByteBuffer(): java.nio.ByteBuffer;
					public static createQuantizationParameters(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): number;
					public static startMaxVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public detailsType(): number;
					public zeroPointInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static createScaleVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public scaleInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static startMinVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public maxVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
					public scaleLength(): number;
					public max(param0: number): number;
					public maxLength(): number;
					public minInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public constructor();
					public static startZeroPointVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createMaxVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public zeroPoint(param0: number): number;
					public static getRootAsQuantizationParameters(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.QuantizationParameters;
					public static createMinVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public scaleAsByteBuffer(): java.nio.ByteBuffer;
					public static getRootAsQuantizationParameters(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.QuantizationParameters): org.tensorflow.lite.schema.QuantizationParameters;
					public maxInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.QuantizationParameters;
					public static addZeroPoint(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public minLength(): number;
					public static addScale(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addMax(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startQuantizationParameters(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endQuantizationParameters(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public min(param0: number): number;
					public quantizedDimension(): number;
					public zeroPointVector(param0: com.google.flatbuffers.LongVector): com.google.flatbuffers.LongVector;
					public static addDetailsType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startScaleVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createZeroPointVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public zeroPointLength(): number;
					public static addDetails(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public maxVector(): com.google.flatbuffers.FloatVector;
					public static addQuantizedDimension(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public scaleVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
					public static ValidateVersion(): void;
					public details(param0: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
					public minVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
					public scale(param0: number): number;
					public static addMin(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public scaleVector(): com.google.flatbuffers.FloatVector;
					public minVector(): com.google.flatbuffers.FloatVector;
					public zeroPointVector(): com.google.flatbuffers.LongVector;
					public minAsByteBuffer(): java.nio.ByteBuffer;
					public zeroPointAsByteBuffer(): java.nio.ByteBuffer;
				}
				export module QuantizationParameters {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizationParameters.Vector>;
						public get(param0: org.tensorflow.lite.schema.QuantizationParameters, param1: number): org.tensorflow.lite.schema.QuantizationParameters;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.QuantizationParameters;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.QuantizationParameters.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class QuantizeOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizeOptions>;
					public static getRootAsQuantizeOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.QuantizeOptions;
					public constructor();
					public static getRootAsQuantizeOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.QuantizeOptions): org.tensorflow.lite.schema.QuantizeOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.QuantizeOptions;
					public static endQuantizeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static startQuantizeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module QuantizeOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.QuantizeOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.QuantizeOptions;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.QuantizeOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.QuantizeOptions, param1: number): org.tensorflow.lite.schema.QuantizeOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class RNNOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.RNNOptions>;
					public static getRootAsRNNOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.RNNOptions): org.tensorflow.lite.schema.RNNOptions;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: boolean): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static startRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static ValidateVersion(): void;
					public asymmetricQuantizeInputs(): boolean;
					public static getRootAsRNNOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.RNNOptions;
					public fusedActivationFunction(): number;
					public constructor();
					public static endRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.RNNOptions;
					public static addAsymmetricQuantizeInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
				}
				export module RNNOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.RNNOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.RNNOptions;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.RNNOptions, param1: number): org.tensorflow.lite.schema.RNNOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.RNNOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class RangeOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.RangeOptions>;
					public constructor();
					public static startRangeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.RangeOptions;
					public static ValidateVersion(): void;
					public static endRangeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsRangeOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.RangeOptions): org.tensorflow.lite.schema.RangeOptions;
					public static getRootAsRangeOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.RangeOptions;
				}
				export module RangeOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.RangeOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.RangeOptions.Vector;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.RangeOptions;
						public get(param0: org.tensorflow.lite.schema.RangeOptions, param1: number): org.tensorflow.lite.schema.RangeOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class RankOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.RankOptions>;
					public static endRankOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsRankOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.RankOptions): org.tensorflow.lite.schema.RankOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.RankOptions;
					public constructor();
					public static getRootAsRankOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.RankOptions;
					public static startRankOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
				}
				export module RankOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.RankOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.RankOptions, param1: number): org.tensorflow.lite.schema.RankOptions;
						public get(param0: number): org.tensorflow.lite.schema.RankOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.RankOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ReducerOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ReducerOptions>;
					public constructor();
					public static addKeepDims(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReducerOptions;
					public static endReducerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsReducerOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReducerOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsReducerOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ReducerOptions): org.tensorflow.lite.schema.ReducerOptions;
					public static createReducerOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): number;
					public static startReducerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public keepDims(): boolean;
				}
				export module ReducerOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ReducerOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReducerOptions.Vector;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.ReducerOptions;
						public get(param0: org.tensorflow.lite.schema.ReducerOptions, param1: number): org.tensorflow.lite.schema.ReducerOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ReshapeOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ReshapeOptions>;
					public newShapeInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static getRootAsReshapeOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReshapeOptions;
					public static startReshapeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public newShapeVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public static endReshapeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public newShapeAsByteBuffer(): java.nio.ByteBuffer;
					public newShapeVector(): com.google.flatbuffers.IntVector;
					public newShape(param0: number): number;
					public static startNewShapeVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsReshapeOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ReshapeOptions): org.tensorflow.lite.schema.ReshapeOptions;
					public newShapeLength(): number;
					public static createReshapeOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReshapeOptions;
					public constructor();
					public static addNewShape(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createNewShapeVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
				}
				export module ReshapeOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ReshapeOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReshapeOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.ReshapeOptions;
						public get(param0: org.tensorflow.lite.schema.ReshapeOptions, param1: number): org.tensorflow.lite.schema.ReshapeOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ResizeBilinearOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ResizeBilinearOptions>;
					public static addAlignCorners(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsResizeBilinearOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ResizeBilinearOptions;
					public static createResizeBilinearOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean, param2: boolean): number;
					public alignCorners(): boolean;
					public static getRootAsResizeBilinearOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ResizeBilinearOptions): org.tensorflow.lite.schema.ResizeBilinearOptions;
					public constructor();
					public static addHalfPixelCenters(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public static startResizeBilinearOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endResizeBilinearOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public halfPixelCenters(): boolean;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ResizeBilinearOptions;
				}
				export module ResizeBilinearOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ResizeBilinearOptions.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.ResizeBilinearOptions;
						public get(param0: org.tensorflow.lite.schema.ResizeBilinearOptions, param1: number): org.tensorflow.lite.schema.ResizeBilinearOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ResizeBilinearOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ResizeNearestNeighborOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ResizeNearestNeighborOptions>;
					public static addAlignCorners(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsResizeNearestNeighborOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ResizeNearestNeighborOptions): org.tensorflow.lite.schema.ResizeNearestNeighborOptions;
					public alignCorners(): boolean;
					public static endResizeNearestNeighborOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ResizeNearestNeighborOptions;
					public constructor();
					public static addHalfPixelCenters(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public halfPixelCenters(): boolean;
					public static getRootAsResizeNearestNeighborOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ResizeNearestNeighborOptions;
					public static createResizeNearestNeighborOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean, param2: boolean): number;
					public static startResizeNearestNeighborOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module ResizeNearestNeighborOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ResizeNearestNeighborOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.ResizeNearestNeighborOptions;
						public get(param0: org.tensorflow.lite.schema.ResizeNearestNeighborOptions, param1: number): org.tensorflow.lite.schema.ResizeNearestNeighborOptions;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ResizeNearestNeighborOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ReverseSequenceOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ReverseSequenceOptions>;
					public seqDim(): number;
					public static createReverseSequenceOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static addBatchDim(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static ValidateVersion(): void;
					public static getRootAsReverseSequenceOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ReverseSequenceOptions): org.tensorflow.lite.schema.ReverseSequenceOptions;
					public batchDim(): number;
					public static addSeqDim(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static endReverseSequenceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public static getRootAsReverseSequenceOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReverseSequenceOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReverseSequenceOptions;
					public static startReverseSequenceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module ReverseSequenceOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ReverseSequenceOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReverseSequenceOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.ReverseSequenceOptions;
						public get(param0: org.tensorflow.lite.schema.ReverseSequenceOptions, param1: number): org.tensorflow.lite.schema.ReverseSequenceOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ReverseV2Options {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ReverseV2Options>;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReverseV2Options;
					public static ValidateVersion(): void;
					public static startReverseV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsReverseV2Options(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReverseV2Options;
					public static getRootAsReverseV2Options(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ReverseV2Options): org.tensorflow.lite.schema.ReverseV2Options;
					public static endReverseV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module ReverseV2Options {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ReverseV2Options.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.ReverseV2Options;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ReverseV2Options.Vector;
						public get(param0: org.tensorflow.lite.schema.ReverseV2Options, param1: number): org.tensorflow.lite.schema.ReverseV2Options;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SVDFOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SVDFOptions>;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SVDFOptions;
					public rank(): number;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static endSVDFOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static startSVDFOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public asymmetricQuantizeInputs(): boolean;
					public static createSVDFOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: boolean): number;
					public static addRank(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public fusedActivationFunction(): number;
					public constructor();
					public static getRootAsSVDFOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SVDFOptions): org.tensorflow.lite.schema.SVDFOptions;
					public static getRootAsSVDFOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SVDFOptions;
					public static addAsymmetricQuantizeInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
				}
				export module SVDFOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SVDFOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SVDFOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.SVDFOptions;
						public get(param0: org.tensorflow.lite.schema.SVDFOptions, param1: number): org.tensorflow.lite.schema.SVDFOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ScatterNdOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ScatterNdOptions>;
					public static getRootAsScatterNdOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ScatterNdOptions;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static endScatterNdOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ScatterNdOptions;
					public static startScatterNdOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsScatterNdOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ScatterNdOptions): org.tensorflow.lite.schema.ScatterNdOptions;
				}
				export module ScatterNdOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ScatterNdOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.ScatterNdOptions;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.ScatterNdOptions, param1: number): org.tensorflow.lite.schema.ScatterNdOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ScatterNdOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SegmentSumOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SegmentSumOptions>;
					public static getRootAsSegmentSumOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SegmentSumOptions;
					public constructor();
					public static getRootAsSegmentSumOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SegmentSumOptions): org.tensorflow.lite.schema.SegmentSumOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SegmentSumOptions;
					public static ValidateVersion(): void;
					public static startSegmentSumOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endSegmentSumOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module SegmentSumOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SegmentSumOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SegmentSumOptions.Vector;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.SegmentSumOptions, param1: number): org.tensorflow.lite.schema.SegmentSumOptions;
						public get(param0: number): org.tensorflow.lite.schema.SegmentSumOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SelectOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SelectOptions>;
					public static endSelectOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static startSelectOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public static getRootAsSelectOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SelectOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsSelectOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SelectOptions): org.tensorflow.lite.schema.SelectOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SelectOptions;
				}
				export module SelectOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SelectOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SelectOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.SelectOptions;
						public get(param0: org.tensorflow.lite.schema.SelectOptions, param1: number): org.tensorflow.lite.schema.SelectOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SelectV2Options {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SelectV2Options>;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SelectV2Options;
					public constructor();
					public static getRootAsSelectV2Options(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SelectV2Options;
					public static getRootAsSelectV2Options(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SelectV2Options): org.tensorflow.lite.schema.SelectV2Options;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startSelectV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endSelectV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module SelectV2Options {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SelectV2Options.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.SelectV2Options, param1: number): org.tensorflow.lite.schema.SelectV2Options;
						public get(param0: number): org.tensorflow.lite.schema.SelectV2Options;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SelectV2Options.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SequenceRNNOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SequenceRNNOptions>;
					public static getRootAsSequenceRNNOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SequenceRNNOptions): org.tensorflow.lite.schema.SequenceRNNOptions;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SequenceRNNOptions;
					public timeMajor(): boolean;
					public static createSequenceRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean, param2: number, param3: boolean): number;
					public static addTimeMajor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public asymmetricQuantizeInputs(): boolean;
					public static endSequenceRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public fusedActivationFunction(): number;
					public static startSequenceRNNOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public static addAsymmetricQuantizeInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public static getRootAsSequenceRNNOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SequenceRNNOptions;
				}
				export module SequenceRNNOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SequenceRNNOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SequenceRNNOptions.Vector;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.SequenceRNNOptions;
						public get(param0: org.tensorflow.lite.schema.SequenceRNNOptions, param1: number): org.tensorflow.lite.schema.SequenceRNNOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ShapeOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ShapeOptions>;
					public static getRootAsShapeOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ShapeOptions): org.tensorflow.lite.schema.ShapeOptions;
					public static getRootAsShapeOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ShapeOptions;
					public constructor();
					public outType(): number;
					public static startShapeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endShapeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static createShapeOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ShapeOptions;
					public static addOutType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
				}
				export module ShapeOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ShapeOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ShapeOptions.Vector;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.ShapeOptions;
						public get(param0: org.tensorflow.lite.schema.ShapeOptions, param1: number): org.tensorflow.lite.schema.ShapeOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SignatureDef {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SignatureDef>;
					public inputsVector(param0: org.tensorflow.lite.schema.TensorMap.Vector): org.tensorflow.lite.schema.TensorMap.Vector;
					public outputsVector(): org.tensorflow.lite.schema.TensorMap.Vector;
					public static addInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public inputs(param0: org.tensorflow.lite.schema.TensorMap, param1: number): org.tensorflow.lite.schema.TensorMap;
					public inputsVector(): org.tensorflow.lite.schema.TensorMap.Vector;
					public static createInputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public methodNameAsByteBuffer(): java.nio.ByteBuffer;
					public keyAsByteBuffer(): java.nio.ByteBuffer;
					public methodName(): string;
					public static startSignatureDef(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static startInputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public outputs(param0: number): org.tensorflow.lite.schema.TensorMap;
					public inputs(param0: number): org.tensorflow.lite.schema.TensorMap;
					public inputsLength(): number;
					public constructor();
					public methodNameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SignatureDef;
					public static getRootAsSignatureDef(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SignatureDef): org.tensorflow.lite.schema.SignatureDef;
					public static createOutputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public static endSignatureDef(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static addMethodName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsSignatureDef(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SignatureDef;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public outputsVector(param0: org.tensorflow.lite.schema.TensorMap.Vector): org.tensorflow.lite.schema.TensorMap.Vector;
					public static createSignatureDef(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number): number;
					public static ValidateVersion(): void;
					public key(): string;
					public keyInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public outputs(param0: org.tensorflow.lite.schema.TensorMap, param1: number): org.tensorflow.lite.schema.TensorMap;
					public static addKey(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addOutputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public outputsLength(): number;
					public static startOutputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
				}
				export module SignatureDef {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SignatureDef.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.SignatureDef;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SignatureDef.Vector;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.SignatureDef, param1: number): org.tensorflow.lite.schema.SignatureDef;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SkipGramOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SkipGramOptions>;
					public includeAllNgrams(): boolean;
					public static startSkipGramOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static createSkipGramOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: boolean): number;
					public static ValidateVersion(): void;
					public static getRootAsSkipGramOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SkipGramOptions;
					public static addIncludeAllNgrams(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public static endSkipGramOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static addMaxSkipSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public maxSkipSize(): number;
					public static getRootAsSkipGramOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SkipGramOptions): org.tensorflow.lite.schema.SkipGramOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SkipGramOptions;
					public constructor();
					public ngramSize(): number;
					public static addNgramSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
				}
				export module SkipGramOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SkipGramOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SkipGramOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.SkipGramOptions;
						public get(param0: org.tensorflow.lite.schema.SkipGramOptions, param1: number): org.tensorflow.lite.schema.SkipGramOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SliceOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SliceOptions>;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static startSliceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static ValidateVersion(): void;
					public static getRootAsSliceOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SliceOptions;
					public static getRootAsSliceOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SliceOptions): org.tensorflow.lite.schema.SliceOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SliceOptions;
					public static endSliceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module SliceOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SliceOptions.Vector>;
						public get(param0: org.tensorflow.lite.schema.SliceOptions, param1: number): org.tensorflow.lite.schema.SliceOptions;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.SliceOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SliceOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SoftmaxOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SoftmaxOptions>;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SoftmaxOptions;
					public static createSoftmaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static getRootAsSoftmaxOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SoftmaxOptions;
					public constructor();
					public static addBeta(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsSoftmaxOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SoftmaxOptions): org.tensorflow.lite.schema.SoftmaxOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public beta(): number;
					public static endSoftmaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static startSoftmaxOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module SoftmaxOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SoftmaxOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SoftmaxOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.SoftmaxOptions, param1: number): org.tensorflow.lite.schema.SoftmaxOptions;
						public get(param0: number): org.tensorflow.lite.schema.SoftmaxOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SpaceToBatchNDOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SpaceToBatchNDOptions>;
					public static endSpaceToBatchNDOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsSpaceToBatchNDOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SpaceToBatchNDOptions): org.tensorflow.lite.schema.SpaceToBatchNDOptions;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SpaceToBatchNDOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startSpaceToBatchNDOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsSpaceToBatchNDOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SpaceToBatchNDOptions;
				}
				export module SpaceToBatchNDOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SpaceToBatchNDOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SpaceToBatchNDOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.SpaceToBatchNDOptions;
						public get(param0: org.tensorflow.lite.schema.SpaceToBatchNDOptions, param1: number): org.tensorflow.lite.schema.SpaceToBatchNDOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SpaceToDepthOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SpaceToDepthOptions>;
					public static addBlockSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsSpaceToDepthOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SpaceToDepthOptions): org.tensorflow.lite.schema.SpaceToDepthOptions;
					public static startSpaceToDepthOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public static createSpaceToDepthOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static endSpaceToDepthOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public blockSize(): number;
					public static ValidateVersion(): void;
					public static getRootAsSpaceToDepthOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SpaceToDepthOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SpaceToDepthOptions;
				}
				export module SpaceToDepthOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SpaceToDepthOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.SpaceToDepthOptions, param1: number): org.tensorflow.lite.schema.SpaceToDepthOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SpaceToDepthOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.SpaceToDepthOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SparseIndexVector {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SparseIndexVector>;
					public static NONE: number;
					public static Int32Vector: number;
					public static Uint16Vector: number;
					public static Uint8Vector: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SparseToDenseOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SparseToDenseOptions>;
					public static startSparseToDenseOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SparseToDenseOptions;
					public static getRootAsSparseToDenseOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SparseToDenseOptions): org.tensorflow.lite.schema.SparseToDenseOptions;
					public constructor();
					public static createSparseToDenseOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static addValidateIndices(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public static endSparseToDenseOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public validateIndices(): boolean;
					public static getRootAsSparseToDenseOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SparseToDenseOptions;
				}
				export module SparseToDenseOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SparseToDenseOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SparseToDenseOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.SparseToDenseOptions, param1: number): org.tensorflow.lite.schema.SparseToDenseOptions;
						public get(param0: number): org.tensorflow.lite.schema.SparseToDenseOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SparsityParameters {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SparsityParameters>;
					public dimMetadata(param0: org.tensorflow.lite.schema.DimensionMetadata, param1: number): org.tensorflow.lite.schema.DimensionMetadata;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SparsityParameters;
					public static createSparsityParameters(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number): number;
					public blockMap(param0: number): number;
					public blockMapVector(): com.google.flatbuffers.IntVector;
					public traversalOrderVector(): com.google.flatbuffers.IntVector;
					public static addDimMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public traversalOrder(param0: number): number;
					public constructor();
					public traversalOrderInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public traversalOrderAsByteBuffer(): java.nio.ByteBuffer;
					public static startDimMetadataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public blockMapInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static createDimMetadataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public traversalOrderLength(): number;
					public static getRootAsSparsityParameters(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SparsityParameters): org.tensorflow.lite.schema.SparsityParameters;
					public static addTraversalOrder(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addBlockMap(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public blockMapAsByteBuffer(): java.nio.ByteBuffer;
					public static startTraversalOrderVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public dimMetadataVector(): org.tensorflow.lite.schema.DimensionMetadata.Vector;
					public traversalOrderVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public blockMapLength(): number;
					public dimMetadataLength(): number;
					public static getRootAsSparsityParameters(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SparsityParameters;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static createTraversalOrderVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public blockMapVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public dimMetadataVector(param0: org.tensorflow.lite.schema.DimensionMetadata.Vector): org.tensorflow.lite.schema.DimensionMetadata.Vector;
					public static endSparsityParameters(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public dimMetadata(param0: number): org.tensorflow.lite.schema.DimensionMetadata;
					public static startBlockMapVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createBlockMapVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public static startSparsityParameters(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module SparsityParameters {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SparsityParameters.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.SparsityParameters, param1: number): org.tensorflow.lite.schema.SparsityParameters;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SparsityParameters.Vector;
						public get(param0: number): org.tensorflow.lite.schema.SparsityParameters;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SplitOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SplitOptions>;
					public static getRootAsSplitOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SplitOptions): org.tensorflow.lite.schema.SplitOptions;
					public static getRootAsSplitOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SplitOptions;
					public static startSplitOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SplitOptions;
					public static endSplitOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public numSplits(): number;
					public static createSplitOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static addNumSplits(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
				}
				export module SplitOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SplitOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.SplitOptions, param1: number): org.tensorflow.lite.schema.SplitOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SplitOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.SplitOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SplitVOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SplitVOptions>;
					public static getRootAsSplitVOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SplitVOptions;
					public constructor();
					public static getRootAsSplitVOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SplitVOptions): org.tensorflow.lite.schema.SplitVOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static endSplitVOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static ValidateVersion(): void;
					public numSplits(): number;
					public static addNumSplits(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static startSplitVOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SplitVOptions;
					public static createSplitVOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
				}
				export module SplitVOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SplitVOptions.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.SplitVOptions, param1: number): org.tensorflow.lite.schema.SplitVOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SplitVOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.SplitVOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SquareOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SquareOptions>;
					public static endSquareOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsSquareOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SquareOptions): org.tensorflow.lite.schema.SquareOptions;
					public constructor();
					public static getRootAsSquareOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SquareOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SquareOptions;
					public static startSquareOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module SquareOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SquareOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SquareOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.SquareOptions, param1: number): org.tensorflow.lite.schema.SquareOptions;
						public get(param0: number): org.tensorflow.lite.schema.SquareOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SquaredDifferenceOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SquaredDifferenceOptions>;
					public static endSquaredDifferenceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SquaredDifferenceOptions;
					public static getRootAsSquaredDifferenceOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SquaredDifferenceOptions): org.tensorflow.lite.schema.SquaredDifferenceOptions;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsSquaredDifferenceOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SquaredDifferenceOptions;
					public static startSquaredDifferenceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module SquaredDifferenceOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SquaredDifferenceOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SquaredDifferenceOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.SquaredDifferenceOptions;
						public get(param0: org.tensorflow.lite.schema.SquaredDifferenceOptions, param1: number): org.tensorflow.lite.schema.SquaredDifferenceOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SqueezeOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SqueezeOptions>;
					public static createSqueezeOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static getRootAsSqueezeOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SqueezeOptions): org.tensorflow.lite.schema.SqueezeOptions;
					public static addSqueezeDims(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public squeezeDimsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static startSqueezeDimsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public squeezeDimsVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public squeezeDimsAsByteBuffer(): java.nio.ByteBuffer;
					public squeezeDims(param0: number): number;
					public static endSqueezeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public static getRootAsSqueezeOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SqueezeOptions;
					public static createSqueezeDimsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public static startSqueezeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public squeezeDimsLength(): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SqueezeOptions;
					public squeezeDimsVector(): com.google.flatbuffers.IntVector;
				}
				export module SqueezeOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SqueezeOptions.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.SqueezeOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SqueezeOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.SqueezeOptions, param1: number): org.tensorflow.lite.schema.SqueezeOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class StridedSliceOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.StridedSliceOptions>;
					public shrinkAxisMask(): number;
					public static startStridedSliceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public newAxisMask(): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.StridedSliceOptions;
					public static getRootAsStridedSliceOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.StridedSliceOptions): org.tensorflow.lite.schema.StridedSliceOptions;
					public static addBeginMask(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addNewAxisMask(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addShrinkAxisMask(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static endStridedSliceOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static addEndMask(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public ellipsisMask(): number;
					public constructor();
					public static addEllipsisMask(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static getRootAsStridedSliceOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.StridedSliceOptions;
					public beginMask(): number;
					public endMask(): number;
					public static createStridedSliceOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number): number;
				}
				export module StridedSliceOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.StridedSliceOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.StridedSliceOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.StridedSliceOptions;
						public get(param0: org.tensorflow.lite.schema.StridedSliceOptions, param1: number): org.tensorflow.lite.schema.StridedSliceOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SubGraph {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SubGraph>;
					public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public name(): string;
					public static endSubGraph(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static addInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public outputs(param0: number): number;
					public static createInputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public outputsAsByteBuffer(): java.nio.ByteBuffer;
					public tensorsVector(param0: org.tensorflow.lite.schema.Tensor.Vector): org.tensorflow.lite.schema.Tensor.Vector;
					public static startSubGraph(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static createTensorsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public static startInputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public inputsVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public operators(param0: number): org.tensorflow.lite.schema.Operator;
					public inputsLength(): number;
					public inputsAsByteBuffer(): java.nio.ByteBuffer;
					public constructor();
					public static startTensorsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public outputsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public nameAsByteBuffer(): java.nio.ByteBuffer;
					public tensors(param0: org.tensorflow.lite.schema.Tensor, param1: number): org.tensorflow.lite.schema.Tensor;
					public static createOutputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SubGraph;
					public outputsVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public inputs(param0: number): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public inputsVector(): com.google.flatbuffers.IntVector;
					public static ValidateVersion(): void;
					public tensorsLength(): number;
					public static getRootAsSubGraph(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SubGraph;
					public operatorsLength(): number;
					public operatorsVector(): org.tensorflow.lite.schema.Operator.Vector;
					public static startOperatorsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public operatorsVector(param0: org.tensorflow.lite.schema.Operator.Vector): org.tensorflow.lite.schema.Operator.Vector;
					public static getRootAsSubGraph(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SubGraph): org.tensorflow.lite.schema.SubGraph;
					public static addOutputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addOperators(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createOperatorsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public outputsLength(): number;
					public outputsVector(): com.google.flatbuffers.IntVector;
					public inputsInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public operators(param0: org.tensorflow.lite.schema.Operator, param1: number): org.tensorflow.lite.schema.Operator;
					public static startOutputsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createSubGraph(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number): number;
					public static addTensors(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public tensors(param0: number): org.tensorflow.lite.schema.Tensor;
					public tensorsVector(): org.tensorflow.lite.schema.Tensor.Vector;
				}
				export module SubGraph {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SubGraph.Vector>;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.SubGraph, param1: number): org.tensorflow.lite.schema.SubGraph;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SubGraph.Vector;
						public get(param0: number): org.tensorflow.lite.schema.SubGraph;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class SubOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.SubOptions>;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.SubOptions;
					public static startSubOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public fusedActivationFunction(): number;
					public constructor();
					public static endSubOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public potScaleInt16(): boolean;
					public static getRootAsSubOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.SubOptions;
					public static getRootAsSubOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.SubOptions): org.tensorflow.lite.schema.SubOptions;
					public static createSubOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: boolean): number;
					public static addPotScaleInt16(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
				}
				export module SubOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.SubOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.SubOptions;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.SubOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.SubOptions, param1: number): org.tensorflow.lite.schema.SubOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class Tensor {
					public static class: java.lang.Class<org.tensorflow.lite.schema.Tensor>;
					public buffer(): number;
					public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public name(): string;
					public sparsity(param0: org.tensorflow.lite.schema.SparsityParameters): org.tensorflow.lite.schema.SparsityParameters;
					public static createShapeVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public static endTensor(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public static startTensor(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public quantization(param0: org.tensorflow.lite.schema.QuantizationParameters): org.tensorflow.lite.schema.QuantizationParameters;
					public static startShapeSignatureVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public nameAsByteBuffer(): java.nio.ByteBuffer;
					public shapeVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public shapeSignatureLength(): number;
					public shapeSignatureVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
					public static addShape(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public shapeSignatureAsByteBuffer(): java.nio.ByteBuffer;
					public static addType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public shapeSignature(param0: number): number;
					public shapeAsByteBuffer(): java.nio.ByteBuffer;
					public sparsity(): org.tensorflow.lite.schema.SparsityParameters;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public quantization(): org.tensorflow.lite.schema.QuantizationParameters;
					public static addShapeSignature(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static ValidateVersion(): void;
					public isVariable(): boolean;
					public static createShapeSignatureVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public static getRootAsTensor(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Tensor;
					public static addSparsity(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public shapeSignatureVector(): com.google.flatbuffers.IntVector;
					public shapeSignatureInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static addIsVariable(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public shapeVector(): com.google.flatbuffers.IntVector;
					public static addQuantization(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public type(): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Tensor;
					public static addBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createTensor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number, param6: boolean, param7: number, param8: number): number;
					public static getRootAsTensor(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.Tensor): org.tensorflow.lite.schema.Tensor;
					public shape(param0: number): number;
					public shapeLength(): number;
					public shapeInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static startShapeVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
				}
				export module Tensor {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.Tensor.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.Tensor;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.Tensor.Vector;
						public get(param0: org.tensorflow.lite.schema.Tensor, param1: number): org.tensorflow.lite.schema.Tensor;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class TensorMap {
					public static class: java.lang.Class<org.tensorflow.lite.schema.TensorMap>;
					public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public name(): string;
					public tensorIndex(): number;
					public static getRootAsTensorMap(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.TensorMap;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.TensorMap;
					public static startTensorMap(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public static getRootAsTensorMap(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.TensorMap): org.tensorflow.lite.schema.TensorMap;
					public static endTensorMap(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static createTensorMap(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
					public static addTensorIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public nameAsByteBuffer(): java.nio.ByteBuffer;
				}
				export module TensorMap {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.TensorMap.Vector>;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.TensorMap;
						public get(param0: org.tensorflow.lite.schema.TensorMap, param1: number): org.tensorflow.lite.schema.TensorMap;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.TensorMap.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class TensorType {
					public static class: java.lang.Class<org.tensorflow.lite.schema.TensorType>;
					public static FLOAT32: number;
					public static FLOAT16: number;
					public static INT32: number;
					public static UINT8: number;
					public static INT64: number;
					public static STRING: number;
					public static BOOL: number;
					public static INT16: number;
					public static COMPLEX64: number;
					public static INT8: number;
					public static FLOAT64: number;
					public static COMPLEX128: number;
					public static names: native.Array<string>;
					public static name(param0: number): string;
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class TileOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.TileOptions>;
					public static startTileOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.TileOptions;
					public static endTileOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static getRootAsTileOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.TileOptions;
					public static getRootAsTileOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.TileOptions): org.tensorflow.lite.schema.TileOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
				}
				export module TileOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.TileOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.TileOptions;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.TileOptions, param1: number): org.tensorflow.lite.schema.TileOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.TileOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class TopKV2Options {
					public static class: java.lang.Class<org.tensorflow.lite.schema.TopKV2Options>;
					public static startTopKV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public static getRootAsTopKV2Options(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.TopKV2Options;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsTopKV2Options(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.TopKV2Options): org.tensorflow.lite.schema.TopKV2Options;
					public static endTopKV2Options(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.TopKV2Options;
				}
				export module TopKV2Options {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.TopKV2Options.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.TopKV2Options.Vector;
						public get(param0: number): org.tensorflow.lite.schema.TopKV2Options;
						public get(param0: org.tensorflow.lite.schema.TopKV2Options, param1: number): org.tensorflow.lite.schema.TopKV2Options;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class TransposeConvOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.TransposeConvOptions>;
					public static endTransposeConvOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static addStrideW(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsTransposeConvOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.TransposeConvOptions;
					public padding(): number;
					public constructor();
					public static startTransposeConvOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public strideH(): number;
					public static createTransposeConvOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.TransposeConvOptions;
					public static addPadding(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addStrideH(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public strideW(): number;
					public static getRootAsTransposeConvOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.TransposeConvOptions): org.tensorflow.lite.schema.TransposeConvOptions;
				}
				export module TransposeConvOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.TransposeConvOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.TransposeConvOptions;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.TransposeConvOptions, param1: number): org.tensorflow.lite.schema.TransposeConvOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.TransposeConvOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class TransposeOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.TransposeOptions>;
					public constructor();
					public static endTransposeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.TransposeOptions;
					public static getRootAsTransposeOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.TransposeOptions): org.tensorflow.lite.schema.TransposeOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsTransposeOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.TransposeOptions;
					public static startTransposeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
				}
				export module TransposeOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.TransposeOptions.Vector>;
						public get(param0: org.tensorflow.lite.schema.TransposeOptions, param1: number): org.tensorflow.lite.schema.TransposeOptions;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.TransposeOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.TransposeOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class Uint16Vector {
					public static class: java.lang.Class<org.tensorflow.lite.schema.Uint16Vector>;
					public valuesLength(): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static startUint16Vector(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static startValuesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static createUint16Vector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Uint16Vector;
					public static endUint16Vector(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static addValues(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public valuesInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static getRootAsUint16Vector(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.Uint16Vector): org.tensorflow.lite.schema.Uint16Vector;
					public constructor();
					public static getRootAsUint16Vector(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Uint16Vector;
					public valuesVector(param0: com.google.flatbuffers.ShortVector): com.google.flatbuffers.ShortVector;
					public static createValuesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public valuesAsByteBuffer(): java.nio.ByteBuffer;
					public values(param0: number): number;
					public valuesVector(): com.google.flatbuffers.ShortVector;
				}
				export module Uint16Vector {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.Uint16Vector.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.Uint16Vector;
						public constructor();
						public get(param0: org.tensorflow.lite.schema.Uint16Vector, param1: number): org.tensorflow.lite.schema.Uint16Vector;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.Uint16Vector.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class Uint8Vector {
					public static class: java.lang.Class<org.tensorflow.lite.schema.Uint8Vector>;
					public valuesLength(): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static startUint8Vector(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static ValidateVersion(): void;
					public static getRootAsUint8Vector(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.Uint8Vector): org.tensorflow.lite.schema.Uint8Vector;
					public static startValuesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public valuesVector(param0: com.google.flatbuffers.ByteVector): com.google.flatbuffers.ByteVector;
					public static addValues(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static endUint8Vector(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public valuesInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
					public static createValuesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: java.nio.ByteBuffer): number;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.Uint8Vector;
					public valuesVector(): com.google.flatbuffers.ByteVector;
					public static createUint8Vector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static createValuesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
					public valuesAsByteBuffer(): java.nio.ByteBuffer;
					public values(param0: number): number;
					public static getRootAsUint8Vector(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.Uint8Vector;
				}
				export module Uint8Vector {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.Uint8Vector.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.Uint8Vector.Vector;
						public get(param0: org.tensorflow.lite.schema.Uint8Vector, param1: number): org.tensorflow.lite.schema.Uint8Vector;
						public get(param0: number): org.tensorflow.lite.schema.Uint8Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class UnidirectionalSequenceLSTMOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions>;
					public static createUnidirectionalSequenceLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: boolean, param5: boolean): number;
					public static addFusedActivationFunction(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions;
					public projClip(): number;
					public timeMajor(): boolean;
					public static startUnidirectionalSequenceLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public cellClip(): number;
					public static addTimeMajor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
					public static endUnidirectionalSequenceLSTMOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public asymmetricQuantizeInputs(): boolean;
					public static addProjClip(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static addCellClip(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public fusedActivationFunction(): number;
					public static getRootAsUnidirectionalSequenceLSTMOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions;
					public constructor();
					public static getRootAsUnidirectionalSequenceLSTMOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions;
					public static addAsymmetricQuantizeInputs(param0: com.google.flatbuffers.FlatBufferBuilder, param1: boolean): void;
				}
				export module UnidirectionalSequenceLSTMOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions.Vector>;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions.Vector;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions;
						public get(param0: org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions, param1: number): org.tensorflow.lite.schema.UnidirectionalSequenceLSTMOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class UniqueOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.UniqueOptions>;
					public static endUniqueOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.UniqueOptions;
					public static getRootAsUniqueOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.UniqueOptions): org.tensorflow.lite.schema.UniqueOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public idxOutType(): number;
					public static getRootAsUniqueOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.UniqueOptions;
					public static createUniqueOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
					public static startUniqueOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static addIdxOutType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
				}
				export module UniqueOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.UniqueOptions.Vector>;
						public get(param0: number): org.tensorflow.lite.schema.UniqueOptions;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.UniqueOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.UniqueOptions, param1: number): org.tensorflow.lite.schema.UniqueOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class UnpackOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.UnpackOptions>;
					public static getRootAsUnpackOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.UnpackOptions;
					public static addAxis(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.UnpackOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsUnpackOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.UnpackOptions): org.tensorflow.lite.schema.UnpackOptions;
					public num(): number;
					public static startUnpackOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static addNum(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public static endUnpackOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public axis(): number;
					public static createUnpackOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
				}
				export module UnpackOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.UnpackOptions.Vector>;
						public get(param0: org.tensorflow.lite.schema.UnpackOptions, param1: number): org.tensorflow.lite.schema.UnpackOptions;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.UnpackOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.UnpackOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class WhereOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.WhereOptions>;
					public static getRootAsWhereOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.WhereOptions): org.tensorflow.lite.schema.WhereOptions;
					public static startWhereOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static ValidateVersion(): void;
					public static getRootAsWhereOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.WhereOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.WhereOptions;
					public static endWhereOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
				}
				export module WhereOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.WhereOptions.Vector>;
						public get(param0: org.tensorflow.lite.schema.WhereOptions, param1: number): org.tensorflow.lite.schema.WhereOptions;
						public constructor();
						public get(param0: number): org.tensorflow.lite.schema.WhereOptions;
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.WhereOptions.Vector;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class WhileOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.WhileOptions>;
					public static addBodySubgraphIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.WhileOptions;
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public condSubgraphIndex(): number;
					public static createWhileOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
					public static ValidateVersion(): void;
					public static addCondSubgraphIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
					public bodySubgraphIndex(): number;
					public static startWhileOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static endWhileOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public constructor();
					public static getRootAsWhileOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.WhileOptions;
					public static getRootAsWhileOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.WhileOptions): org.tensorflow.lite.schema.WhileOptions;
				}
				export module WhileOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.WhileOptions.Vector>;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.WhileOptions.Vector;
						public get(param0: org.tensorflow.lite.schema.WhileOptions, param1: number): org.tensorflow.lite.schema.WhileOptions;
						public get(param0: number): org.tensorflow.lite.schema.WhileOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module schema {
				export class ZerosLikeOptions {
					public static class: java.lang.Class<org.tensorflow.lite.schema.ZerosLikeOptions>;
					public constructor();
					public __init(param0: number, param1: java.nio.ByteBuffer): void;
					public static endZerosLikeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
					public static ValidateVersion(): void;
					public static startZerosLikeOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
					public static getRootAsZerosLikeOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.schema.ZerosLikeOptions;
					public static getRootAsZerosLikeOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.schema.ZerosLikeOptions): org.tensorflow.lite.schema.ZerosLikeOptions;
					public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.schema.ZerosLikeOptions;
				}
				export module ZerosLikeOptions {
					export class Vector {
						public static class: java.lang.Class<org.tensorflow.lite.schema.ZerosLikeOptions.Vector>;
						public get(param0: org.tensorflow.lite.schema.ZerosLikeOptions, param1: number): org.tensorflow.lite.schema.ZerosLikeOptions;
						public constructor();
						public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.schema.ZerosLikeOptions.Vector;
						public get(param0: number): org.tensorflow.lite.schema.ZerosLikeOptions;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export class BoundedInputStream {
						public static class: java.lang.Class<org.tensorflow.lite.support.metadata.BoundedInputStream>;
						public read(): number;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public available(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export class ByteBufferChannel extends org.tensorflow.lite.support.metadata.SeekableByteChannelCompat {
						public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ByteBufferChannel>;
						public write(param0: java.nio.ByteBuffer): number;
						public position(param0: number): org.tensorflow.lite.support.metadata.SeekableByteChannelCompat;
						public close(): void;
						public read(param0: java.nio.ByteBuffer): number;
						public position(): number;
						public position(param0: number): org.tensorflow.lite.support.metadata.ByteBufferChannel;
						public constructor(param0: java.nio.ByteBuffer);
						public truncate(param0: number): org.tensorflow.lite.support.metadata.SeekableByteChannelCompat;
						public isOpen(): boolean;
						public size(): number;
						public truncate(param0: number): org.tensorflow.lite.support.metadata.ByteBufferChannel;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export class MetadataExtractor {
						public static class: java.lang.Class<org.tensorflow.lite.support.metadata.MetadataExtractor>;
						public getInputTensorShape(param0: number): native.Array<number>;
						public getOutputTensorQuantizationParams(param0: number): org.tensorflow.lite.support.metadata.MetadataExtractor.QuantizationParams;
						public getOutputTensorShape(param0: number): native.Array<number>;
						public getModelMetadata(): org.tensorflow.lite.support.metadata.schema.ModelMetadata;
						public getOutputTensorMetadata(param0: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
						public getInputTensorCount(): number;
						public hasMetadata(): boolean;
						public constructor(param0: java.nio.ByteBuffer);
						public getOutputTensorCount(): number;
						public getInputTensorMetadata(param0: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
						public getInputTensorType(param0: number): number;
						public getInputTensorQuantizationParams(param0: number): org.tensorflow.lite.support.metadata.MetadataExtractor.QuantizationParams;
						public getOutputTensorType(param0: number): number;
						public getAssociatedFile(param0: string): java.io.InputStream;
						public isMinimumParserVersionSatisfied(): boolean;
						public getAssociatedFileNames(): java.util.Set<string>;
					}
					export module MetadataExtractor {
						export class QuantizationParams {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.MetadataExtractor.QuantizationParams>;
							public getScale(): number;
							public constructor(param0: number, param1: number);
							public getZeroPoint(): number;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export class MetadataParser {
						public static class: java.lang.Class<org.tensorflow.lite.support.metadata.MetadataParser>;
						public static VERSION: string;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export class ModelInfo {
						public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ModelInfo>;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export class ModelMetadataInfo {
						public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ModelMetadataInfo>;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export class Preconditions {
						public static class: java.lang.Class<org.tensorflow.lite.support.metadata.Preconditions>;
						public static checkNotNull(param0: any): any;
						public static checkArgument(param0: boolean, param1: any): void;
						public static checkNotEmpty(param0: string): string;
						public static checkArgument(param0: boolean): void;
						public static checkNotNull(param0: any, param1: any): any;
						public static checkNotEmpty(param0: string, param1: any): string;
						public static checkElementIndex(param0: number, param1: number): number;
						public static checkElementIndex(param0: number, param1: number, param2: string): number;
						public static checkState(param0: boolean): void;
						public static checkState(param0: boolean, param1: any): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export class SeekableByteChannelCompat {
						public static class: java.lang.Class<org.tensorflow.lite.support.metadata.SeekableByteChannelCompat>;
						/**
						 * Constructs a new instance of the org.tensorflow.lite.support.metadata.SeekableByteChannelCompat interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							read(param0: java.nio.ByteBuffer): number;
							write(param0: java.nio.ByteBuffer): number;
							position(): number;
							position(param0: number): org.tensorflow.lite.support.metadata.SeekableByteChannelCompat;
							size(): number;
							truncate(param0: number): org.tensorflow.lite.support.metadata.SeekableByteChannelCompat;
						});
						public constructor();
						public write(param0: java.nio.ByteBuffer): number;
						public position(param0: number): org.tensorflow.lite.support.metadata.SeekableByteChannelCompat;
						public read(param0: java.nio.ByteBuffer): number;
						public position(): number;
						public truncate(param0: number): org.tensorflow.lite.support.metadata.SeekableByteChannelCompat;
						public size(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export class ZipFile {
						public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ZipFile>;
						public close(): void;
						public static createFrom(param0: org.tensorflow.lite.support.metadata.ByteBufferChannel): org.tensorflow.lite.support.metadata.ZipFile;
						public getRawInputStream(param0: string): java.io.InputStream;
						public getFileNames(): java.util.Set<string>;
					}
					export module ZipFile {
						export class ZipConstants {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ZipFile.ZipConstants>;
						}
						export class ZipEntry {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ZipFile.ZipEntry>;
							public getSize(): number;
							public getDataOffset(): number;
							public getName(): string;
							public setDataOffset(param0: number): void;
							public setSize(param0: number): void;
							public setName(param0: string): void;
							public setLocalHeaderOffset(param0: number): void;
							public getLocalHeaderOffset(): number;
						}
						export class ZipParser {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.ZipFile.ZipParser>;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class AssociatedFile {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.AssociatedFile>;
							public constructor();
							public static ValidateVersion(): void;
							public description(): string;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public localeInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public nameAsByteBuffer(): java.nio.ByteBuffer;
							public locale(): string;
							public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static addDescription(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static addType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public descriptionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public static createAssociatedFile(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number): number;
							public static startAssociatedFile(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public localeAsByteBuffer(): java.nio.ByteBuffer;
							public static addLocale(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static getRootAsAssociatedFile(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public name(): string;
							public static getRootAsAssociatedFile(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.AssociatedFile): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public type(): number;
							public descriptionAsByteBuffer(): java.nio.ByteBuffer;
							public static endAssociatedFile(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
						}
						export module AssociatedFile {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector>;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
								public get(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile, param1: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
								public constructor();
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class AssociatedFileType {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.AssociatedFileType>;
							public static UNKNOWN: number;
							public static DESCRIPTIONS: number;
							public static TENSOR_AXIS_LABELS: number;
							public static TENSOR_VALUE_LABELS: number;
							public static TENSOR_AXIS_SCORE_CALIBRATION: number;
							public static VOCABULARY: number;
							public static names: native.Array<string>;
							public static name(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class BertTokenizerOptions {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions>;
							public constructor();
							public static ValidateVersion(): void;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public static endBertTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public static createVocabFileVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public vocabFile(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public static addVocabFile(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static startBertTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public vocabFileVector(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public vocabFile(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile, param1: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public vocabFileLength(): number;
							public static createBertTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
							public static getRootAsBertTokenizerOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions;
							public static getRootAsBertTokenizerOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions;
							public vocabFileVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public static startVocabFileVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
						}
						export module BertTokenizerOptions {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions.Vector>;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions.Vector;
								public get(param0: org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions, param1: number): org.tensorflow.lite.support.metadata.schema.BertTokenizerOptions;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class BoundingBoxProperties {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties>;
							public constructor();
							public static ValidateVersion(): void;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties;
							public indexLength(): number;
							public indexInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public static startBoundingBoxProperties(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public static getRootAsBoundingBoxProperties(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties): org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties;
							public index(param0: number): number;
							public static addType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public indexVector(param0: com.google.flatbuffers.IntVector): com.google.flatbuffers.IntVector;
							public static endBoundingBoxProperties(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public static createBoundingBoxProperties(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number): number;
							public static startIndexVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public coordinateType(): number;
							public static getRootAsBoundingBoxProperties(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties;
							public static createIndexVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public static addCoordinateType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static addIndex(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public indexVector(): com.google.flatbuffers.IntVector;
							public type(): number;
							public indexAsByteBuffer(): java.nio.ByteBuffer;
						}
						export module BoundingBoxProperties {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties.Vector>;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties;
								public constructor();
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties.Vector;
								public get(param0: org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties, param1: number): org.tensorflow.lite.support.metadata.schema.BoundingBoxProperties;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class BoundingBoxType {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.BoundingBoxType>;
							public static UNKNOWN: number;
							public static BOUNDARIES: number;
							public static UPPER_LEFT: number;
							public static CENTER: number;
							public static names: native.Array<string>;
							public static name(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class ColorSpaceType {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ColorSpaceType>;
							public static UNKNOWN: number;
							public static RGB: number;
							public static GRAYSCALE: number;
							public static names: native.Array<string>;
							public static name(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class Content {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.Content>;
							public constructor();
							public static ValidateVersion(): void;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public static getRootAsContent(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.Content): org.tensorflow.lite.support.metadata.schema.Content;
							public static createContent(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number): number;
							public range(): org.tensorflow.lite.support.metadata.schema.ValueRange;
							public contentProperties(param0: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
							public static addContentProperties(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static startContent(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public static addContentPropertiesType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public range(param0: org.tensorflow.lite.support.metadata.schema.ValueRange): org.tensorflow.lite.support.metadata.schema.ValueRange;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.Content;
							public static endContent(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public static getRootAsContent(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.Content;
							public contentPropertiesType(): number;
							public static addRange(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
						}
						export module Content {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.Content.Vector>;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.Content;
								public get(param0: org.tensorflow.lite.support.metadata.schema.Content, param1: number): org.tensorflow.lite.support.metadata.schema.Content;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.Content.Vector;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class ContentProperties {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ContentProperties>;
							public static NONE: number;
							public static FeatureProperties: number;
							public static ImageProperties: number;
							public static BoundingBoxProperties: number;
							public static names: native.Array<string>;
							public static name(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class CoordinateType {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.CoordinateType>;
							public static RATIO: number;
							public static PIXEL: number;
							public static names: native.Array<string>;
							public static name(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class FeatureProperties {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.FeatureProperties>;
							public constructor();
							public static ValidateVersion(): void;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.FeatureProperties;
							public static startFeatureProperties(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public static getRootAsFeatureProperties(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.FeatureProperties;
							public static getRootAsFeatureProperties(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.FeatureProperties): org.tensorflow.lite.support.metadata.schema.FeatureProperties;
							public static endFeatureProperties(param0: com.google.flatbuffers.FlatBufferBuilder): number;
						}
						export module FeatureProperties {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.FeatureProperties.Vector>;
								public get(param0: org.tensorflow.lite.support.metadata.schema.FeatureProperties, param1: number): org.tensorflow.lite.support.metadata.schema.FeatureProperties;
								public constructor();
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.FeatureProperties.Vector;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.FeatureProperties;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class ImageProperties {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ImageProperties>;
							public constructor();
							public static ValidateVersion(): void;
							public static addColorSpace(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public static getRootAsImageProperties(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.ImageProperties): org.tensorflow.lite.support.metadata.schema.ImageProperties;
							public static createImageProperties(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
							public defaultSize(): org.tensorflow.lite.support.metadata.schema.ImageSize;
							public static endImageProperties(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public defaultSize(param0: org.tensorflow.lite.support.metadata.schema.ImageSize): org.tensorflow.lite.support.metadata.schema.ImageSize;
							public static startImageProperties(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public static addDefaultSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static getRootAsImageProperties(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ImageProperties;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ImageProperties;
							public colorSpace(): number;
						}
						export module ImageProperties {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ImageProperties.Vector>;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.ImageProperties;
								public get(param0: org.tensorflow.lite.support.metadata.schema.ImageProperties, param1: number): org.tensorflow.lite.support.metadata.schema.ImageProperties;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ImageProperties.Vector;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class ImageSize {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ImageSize>;
							public constructor();
							public static ValidateVersion(): void;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public static endImageSize(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public static addWidth(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static createImageSize(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
							public height(): number;
							public static getRootAsImageSize(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.ImageSize): org.tensorflow.lite.support.metadata.schema.ImageSize;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ImageSize;
							public static addHeight(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static startImageSize(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public width(): number;
							public static getRootAsImageSize(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ImageSize;
						}
						export module ImageSize {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ImageSize.Vector>;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.ImageSize;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ImageSize.Vector;
								public constructor();
								public get(param0: org.tensorflow.lite.support.metadata.schema.ImageSize, param1: number): org.tensorflow.lite.support.metadata.schema.ImageSize;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class ModelMetadata {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ModelMetadata>;
							public associatedFiles(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public subgraphMetadataVector(): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata.Vector;
							public nameAsByteBuffer(): java.nio.ByteBuffer;
							public subgraphMetadata(param0: number): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
							public subgraphMetadataLength(): number;
							public static startAssociatedFilesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public authorAsByteBuffer(): java.nio.ByteBuffer;
							public static addSubgraphMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static addMinParserVersion(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static finishSizePrefixedModelMetadataBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static createModelMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): number;
							public versionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public name(): string;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ModelMetadata;
							public associatedFiles(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile, param1: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public static getRootAsModelMetadata(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ModelMetadata;
							public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public subgraphMetadataVector(param0: org.tensorflow.lite.support.metadata.schema.SubGraphMetadata.Vector): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata.Vector;
							public authorInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public associatedFilesVector(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public associatedFilesLength(): number;
							public descriptionAsByteBuffer(): java.nio.ByteBuffer;
							public static ValidateVersion(): void;
							public associatedFilesVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public descriptionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public static ModelMetadataBufferHasIdentifier(param0: java.nio.ByteBuffer): boolean;
							public license(): string;
							public static addVersion(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public constructor();
							public description(): string;
							public static createSubgraphMetadataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public static createAssociatedFilesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public version(): string;
							public versionAsByteBuffer(): java.nio.ByteBuffer;
							public licenseInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public licenseAsByteBuffer(): java.nio.ByteBuffer;
							public minParserVersionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public static addAssociatedFiles(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public subgraphMetadata(param0: org.tensorflow.lite.support.metadata.schema.SubGraphMetadata, param1: number): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
							public author(): string;
							public static addDescription(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static addLicense(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static startSubgraphMetadataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static finishModelMetadataBuffer(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static startModelMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public minParserVersionAsByteBuffer(): java.nio.ByteBuffer;
							public static endModelMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public static getRootAsModelMetadata(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.ModelMetadata): org.tensorflow.lite.support.metadata.schema.ModelMetadata;
							public minParserVersion(): string;
							public static addAuthor(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
						}
						export module ModelMetadata {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ModelMetadata.Vector>;
								public get(param0: org.tensorflow.lite.support.metadata.schema.ModelMetadata, param1: number): org.tensorflow.lite.support.metadata.schema.ModelMetadata;
								public constructor();
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ModelMetadata.Vector;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.ModelMetadata;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class NormalizationOptions {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.NormalizationOptions>;
							public static ValidateVersion(): void;
							public static createMeanVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public meanLength(): number;
							public stdLength(): number;
							public meanVector(): com.google.flatbuffers.FloatVector;
							public static createStdVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.NormalizationOptions;
							public mean(param0: number): number;
							public stdAsByteBuffer(): java.nio.ByteBuffer;
							public stdVector(): com.google.flatbuffers.FloatVector;
							public static startNormalizationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public constructor();
							public static startMeanVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public stdVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
							public std(param0: number): number;
							public meanVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
							public static getRootAsNormalizationOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.NormalizationOptions;
							public static createNormalizationOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
							public meanAsByteBuffer(): java.nio.ByteBuffer;
							public stdInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public static addMean(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static startStdVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public meanInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public static addStd(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static getRootAsNormalizationOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.NormalizationOptions): org.tensorflow.lite.support.metadata.schema.NormalizationOptions;
							public static endNormalizationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
						}
						export module NormalizationOptions {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.NormalizationOptions.Vector>;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.NormalizationOptions.Vector;
								public get(param0: org.tensorflow.lite.support.metadata.schema.NormalizationOptions, param1: number): org.tensorflow.lite.support.metadata.schema.NormalizationOptions;
								public constructor();
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.NormalizationOptions;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class ProcessUnit {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ProcessUnit>;
							public constructor();
							public static ValidateVersion(): void;
							public static getRootAsProcessUnit(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.ProcessUnit): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public options(param0: com.google.flatbuffers.Table): com.google.flatbuffers.Table;
							public static startProcessUnit(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public static getRootAsProcessUnit(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
							public static createProcessUnit(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
							public static addOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public optionsType(): number;
							public static endProcessUnit(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public static addOptionsType(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
						}
						export module ProcessUnit {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector>;
								public get(param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit, param1: number): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
								public constructor();
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class ProcessUnitOptions {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ProcessUnitOptions>;
							public static NONE: number;
							public static NormalizationOptions: number;
							public static ScoreCalibrationOptions: number;
							public static ScoreThresholdingOptions: number;
							public static BertTokenizerOptions: number;
							public static SentencePieceTokenizerOptions: number;
							public static RegexTokenizerOptions: number;
							public static names: native.Array<string>;
							public static name(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class RegexTokenizerOptions {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions>;
							public constructor();
							public static ValidateVersion(): void;
							public static getRootAsRegexTokenizerOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions;
							public static startRegexTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public static getRootAsRegexTokenizerOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public static createVocabFileVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public static addDelimRegexPattern(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public vocabFile(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public static addVocabFile(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static endRegexTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public vocabFileVector(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public vocabFile(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile, param1: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public delimRegexPatternInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public vocabFileLength(): number;
							public delimRegexPattern(): string;
							public delimRegexPatternAsByteBuffer(): java.nio.ByteBuffer;
							public static createRegexTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
							public vocabFileVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public static startVocabFileVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
						}
						export module RegexTokenizerOptions {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions.Vector>;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions.Vector;
								public constructor();
								public get(param0: org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions, param1: number): org.tensorflow.lite.support.metadata.schema.RegexTokenizerOptions;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class ScoreCalibrationOptions {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions>;
							public constructor();
							public static ValidateVersion(): void;
							public defaultScore(): number;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions;
							public static getRootAsScoreCalibrationOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions;
							public static addScoreTransformation(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static getRootAsScoreCalibrationOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions;
							public static startScoreCalibrationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public static createScoreCalibrationOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
							public static addDefaultScore(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static endScoreCalibrationOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public scoreTransformation(): number;
						}
						export module ScoreCalibrationOptions {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions.Vector>;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions.Vector;
								public get(param0: org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions, param1: number): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.ScoreCalibrationOptions;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class ScoreThresholdingOptions {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions>;
							public constructor();
							public static ValidateVersion(): void;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public globalScoreThreshold(): number;
							public static addGlobalScoreThreshold(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static getRootAsScoreThresholdingOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions;
							public static getRootAsScoreThresholdingOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions;
							public static endScoreThresholdingOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions;
							public static createScoreThresholdingOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): number;
							public static startScoreThresholdingOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
						}
						export module ScoreThresholdingOptions {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions.Vector>;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions.Vector;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions;
								public constructor();
								public get(param0: org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions, param1: number): org.tensorflow.lite.support.metadata.schema.ScoreThresholdingOptions;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class ScoreTransformationType {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ScoreTransformationType>;
							public static IDENTITY: number;
							public static LOG: number;
							public static INVERSE_LOGISTIC: number;
							public static names: native.Array<string>;
							public static name(param0: number): string;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class SentencePieceTokenizerOptions {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions>;
							public static ValidateVersion(): void;
							public sentencePieceModel(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile, param1: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions;
							public static createSentencePieceModelVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public static createVocabFileVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public static addVocabFile(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static getRootAsSentencePieceTokenizerOptions(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions;
							public static endSentencePieceTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public vocabFile(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile, param1: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public sentencePieceModelLength(): number;
							public static startSentencePieceModelVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public sentencePieceModel(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public vocabFileVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public constructor();
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public static createSentencePieceTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
							public sentencePieceModelVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public vocabFile(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public vocabFileVector(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public static getRootAsSentencePieceTokenizerOptions(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions;
							public vocabFileLength(): number;
							public sentencePieceModelVector(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public static addSentencePieceModel(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static startSentencePieceTokenizerOptions(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public static startVocabFileVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
						}
						export module SentencePieceTokenizerOptions {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions.Vector>;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions.Vector;
								public constructor();
								public get(param0: org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions, param1: number): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.SentencePieceTokenizerOptions;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class Stats {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.Stats>;
							public static ValidateVersion(): void;
							public static getRootAsStats(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.Stats): org.tensorflow.lite.support.metadata.schema.Stats;
							public static createMinVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public minVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
							public static addMin(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static getRootAsStats(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.Stats;
							public maxInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public maxAsByteBuffer(): java.nio.ByteBuffer;
							public minLength(): number;
							public static startStats(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public maxLength(): number;
							public max(param0: number): number;
							public static endStats(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public constructor();
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public static createMaxVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.Stats;
							public static startMinVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static addMax(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public minAsByteBuffer(): java.nio.ByteBuffer;
							public static createStats(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
							public minInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public maxVector(param0: com.google.flatbuffers.FloatVector): com.google.flatbuffers.FloatVector;
							public maxVector(): com.google.flatbuffers.FloatVector;
							public minVector(): com.google.flatbuffers.FloatVector;
							public static startMaxVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public min(param0: number): number;
						}
						export module Stats {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.Stats.Vector>;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.Stats.Vector;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.Stats;
								public get(param0: org.tensorflow.lite.support.metadata.schema.Stats, param1: number): org.tensorflow.lite.support.metadata.schema.Stats;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class SubGraphMetadata {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.SubGraphMetadata>;
							public static createOutputTensorMetadataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public associatedFiles(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public static addOutputProcessUnits(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public nameAsByteBuffer(): java.nio.ByteBuffer;
							public static startAssociatedFilesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public outputTensorMetadataLength(): number;
							public outputTensorMetadata(param0: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
							public outputTensorGroups(param0: org.tensorflow.lite.support.metadata.schema.TensorGroup, param1: number): org.tensorflow.lite.support.metadata.schema.TensorGroup;
							public inputProcessUnits(param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit, param1: number): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
							public static getRootAsSubGraphMetadata(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
							public inputTensorGroupsVector(param0: org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector): org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector;
							public inputProcessUnitsLength(): number;
							public static createInputTensorMetadataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public outputTensorGroupsVector(param0: org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector): org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector;
							public static startOutputProcessUnitsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public name(): string;
							public static createInputProcessUnitsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public outputTensorMetadataVector(): org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public inputTensorMetadata(param0: org.tensorflow.lite.support.metadata.schema.TensorMetadata, param1: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
							public associatedFiles(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile, param1: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public outputTensorGroups(param0: number): org.tensorflow.lite.support.metadata.schema.TensorGroup;
							public inputTensorMetadataLength(): number;
							public inputProcessUnits(param0: number): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
							public outputTensorMetadataVector(param0: org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector): org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector;
							public inputProcessUnitsVector(param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
							public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public static startInputTensorGroupsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public associatedFilesVector(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public associatedFilesLength(): number;
							public descriptionAsByteBuffer(): java.nio.ByteBuffer;
							public static startInputProcessUnitsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static ValidateVersion(): void;
							public static addInputTensorMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public outputProcessUnitsLength(): number;
							public static startSubGraphMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public associatedFilesVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public outputProcessUnits(param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit, param1: number): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
							public static createSubGraphMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number): number;
							public static getRootAsSubGraphMetadata(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.SubGraphMetadata): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
							public inputTensorMetadataVector(): org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector;
							public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static startInputTensorMetadataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public outputProcessUnitsVector(): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
							public descriptionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public static startOutputTensorMetadataVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public inputTensorGroups(param0: org.tensorflow.lite.support.metadata.schema.TensorGroup, param1: number): org.tensorflow.lite.support.metadata.schema.TensorGroup;
							public static addInputProcessUnits(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public inputTensorGroupsLength(): number;
							public static startOutputTensorGroupsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public outputProcessUnitsVector(param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
							public static addOutputTensorMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
							public constructor();
							public description(): string;
							public static createAssociatedFilesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public static endSubGraphMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public inputProcessUnitsVector(): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
							public static addAssociatedFiles(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static addInputTensorGroups(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static createOutputTensorGroupsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public static addDescription(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public outputTensorGroupsVector(): org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector;
							public outputTensorGroupsLength(): number;
							public inputTensorMetadataVector(param0: org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector): org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector;
							public static addOutputTensorGroups(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public inputTensorGroups(param0: number): org.tensorflow.lite.support.metadata.schema.TensorGroup;
							public outputTensorMetadata(param0: org.tensorflow.lite.support.metadata.schema.TensorMetadata, param1: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
							public static createInputTensorGroupsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public outputProcessUnits(param0: number): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
							public static createOutputProcessUnitsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public inputTensorMetadata(param0: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
							public inputTensorGroupsVector(): org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector;
						}
						export module SubGraphMetadata {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.SubGraphMetadata.Vector>;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
								public get(param0: org.tensorflow.lite.support.metadata.schema.SubGraphMetadata, param1: number): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata;
								public constructor();
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.SubGraphMetadata.Vector;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class TensorGroup {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.TensorGroup>;
							public constructor();
							public static ValidateVersion(): void;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public tensorNamesVector(): com.google.flatbuffers.StringVector;
							public nameAsByteBuffer(): java.nio.ByteBuffer;
							public tensorNamesLength(): number;
							public static startTensorNamesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static startTensorGroup(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.TensorGroup;
							public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public tensorNames(param0: number): string;
							public static addTensorNames(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static createTensorNamesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public static createTensorGroup(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
							public static getRootAsTensorGroup(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.TensorGroup;
							public name(): string;
							public static getRootAsTensorGroup(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.TensorGroup): org.tensorflow.lite.support.metadata.schema.TensorGroup;
							public tensorNamesVector(param0: com.google.flatbuffers.StringVector): com.google.flatbuffers.StringVector;
							public static endTensorGroup(param0: com.google.flatbuffers.FlatBufferBuilder): number;
						}
						export module TensorGroup {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector>;
								public constructor();
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.TensorGroup.Vector;
								public get(param0: org.tensorflow.lite.support.metadata.schema.TensorGroup, param1: number): org.tensorflow.lite.support.metadata.schema.TensorGroup;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.TensorGroup;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class TensorMetadata {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.TensorMetadata>;
							public static ValidateVersion(): void;
							public associatedFiles(param0: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public associatedFilesVector(): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public nameAsByteBuffer(): java.nio.ByteBuffer;
							public static createProcessUnitsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public static startAssociatedFilesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public processUnitsVector(): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
							public static addName(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static addProcessUnits(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public descriptionInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public processUnits(param0: number): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
							public name(): string;
							public dimensionNames(param0: number): string;
							public content(param0: org.tensorflow.lite.support.metadata.schema.Content): org.tensorflow.lite.support.metadata.schema.Content;
							public static startProcessUnitsVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public processUnits(param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit, param1: number): org.tensorflow.lite.support.metadata.schema.ProcessUnit;
							public static addDimensionNames(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public constructor();
							public description(): string;
							public static createAssociatedFilesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public static addStats(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public associatedFiles(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile, param1: number): org.tensorflow.lite.support.metadata.schema.AssociatedFile;
							public static addAssociatedFiles(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static createDimensionNamesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: native.Array<number>): number;
							public static startDimensionNamesVector(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public dimensionNamesLength(): number;
							public processUnitsVector(param0: org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector): org.tensorflow.lite.support.metadata.schema.ProcessUnit.Vector;
							public processUnitsLength(): number;
							public static addDescription(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public stats(): org.tensorflow.lite.support.metadata.schema.Stats;
							public nameInByteBuffer(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
							public content(): org.tensorflow.lite.support.metadata.schema.Content;
							public static startTensorMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public static endTensorMetadata(param0: com.google.flatbuffers.FlatBufferBuilder): number;
							public stats(param0: org.tensorflow.lite.support.metadata.schema.Stats): org.tensorflow.lite.support.metadata.schema.Stats;
							public static addContent(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static getRootAsTensorMetadata(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
							public dimensionNamesVector(): com.google.flatbuffers.StringVector;
							public dimensionNamesVector(param0: com.google.flatbuffers.StringVector): com.google.flatbuffers.StringVector;
							public associatedFilesVector(param0: org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector): org.tensorflow.lite.support.metadata.schema.AssociatedFile.Vector;
							public static createTensorMetadata(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number): number;
							public associatedFilesLength(): number;
							public descriptionAsByteBuffer(): java.nio.ByteBuffer;
							public static getRootAsTensorMetadata(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.TensorMetadata): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
						}
						export module TensorMetadata {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector>;
								public get(param0: org.tensorflow.lite.support.metadata.schema.TensorMetadata, param1: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.TensorMetadata;
								public constructor();
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.TensorMetadata.Vector;
							}
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module tensorflow {
		export module lite {
			export module support {
				export module metadata {
					export module schema {
						export class ValueRange {
							public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ValueRange>;
							public constructor();
							public static ValidateVersion(): void;
							public max(): number;
							public __init(param0: number, param1: java.nio.ByteBuffer): void;
							public static addMax(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public __assign(param0: number, param1: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ValueRange;
							public static createValueRange(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number, param2: number): number;
							public static addMin(param0: com.google.flatbuffers.FlatBufferBuilder, param1: number): void;
							public static getRootAsValueRange(param0: java.nio.ByteBuffer, param1: org.tensorflow.lite.support.metadata.schema.ValueRange): org.tensorflow.lite.support.metadata.schema.ValueRange;
							public static getRootAsValueRange(param0: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ValueRange;
							public static startValueRange(param0: com.google.flatbuffers.FlatBufferBuilder): void;
							public min(): number;
							public static endValueRange(param0: com.google.flatbuffers.FlatBufferBuilder): number;
						}
						export module ValueRange {
							export class Vector {
								public static class: java.lang.Class<org.tensorflow.lite.support.metadata.schema.ValueRange.Vector>;
								public get(param0: org.tensorflow.lite.support.metadata.schema.ValueRange, param1: number): org.tensorflow.lite.support.metadata.schema.ValueRange;
								public __assign(param0: number, param1: number, param2: java.nio.ByteBuffer): org.tensorflow.lite.support.metadata.schema.ValueRange.Vector;
								public constructor();
								public get(param0: number): org.tensorflow.lite.support.metadata.schema.ValueRange;
							}
						}
					}
				}
			}
		}
	}
}

//Generics information:

