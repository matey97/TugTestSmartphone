/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export class BuildConfig {
						public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.BuildConfig>;
						public static DEBUG: boolean;
						public static APPLICATION_ID: string;
						public static BUILD_TYPE: string;
						public static FLAVOR: string;
						public static VERSION_CODE: number;
						public static VERSION_NAME: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export class CustomModel {
						public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.CustomModel>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public constructor(param0: string, param1: string, param2: number, param3: string, param4: number);
						public getName(): string;
						public toString(): string;
						public getDownloadUrlExpiry(): number;
						public constructor(param0: string, param1: string, param2: number, param3: number);
						public getSize(): number;
						public getDownloadUrl(): string;
						public getFile(): java.io.File;
						public getLocalFilePath(): string;
						public getDownloadId(): number;
						public getModelHash(): string;
						public constructor(param0: string, param1: string, param2: number, param3: number, param4: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export class CustomModelDownloadConditions {
						public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.CustomModelDownloadConditions>;
						public isWifiRequired(): boolean;
						public isChargingRequired(): boolean;
						public isDeviceIdleRequired(): boolean;
						public equals(param0: any): boolean;
						public hashCode(): number;
					}
					export module CustomModelDownloadConditions {
						export class Builder {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.CustomModelDownloadConditions.Builder>;
							public constructor();
							public requireCharging(): com.google.firebase.ml.modeldownloader.CustomModelDownloadConditions.Builder;
							public requireDeviceIdle(): com.google.firebase.ml.modeldownloader.CustomModelDownloadConditions.Builder;
							public requireWifi(): com.google.firebase.ml.modeldownloader.CustomModelDownloadConditions.Builder;
							public build(): com.google.firebase.ml.modeldownloader.CustomModelDownloadConditions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export class DownloadType {
						public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.DownloadType>;
						public static LOCAL_MODEL: com.google.firebase.ml.modeldownloader.DownloadType;
						public static LOCAL_MODEL_UPDATE_IN_BACKGROUND: com.google.firebase.ml.modeldownloader.DownloadType;
						public static LATEST_MODEL: com.google.firebase.ml.modeldownloader.DownloadType;
						public static valueOf(param0: string): com.google.firebase.ml.modeldownloader.DownloadType;
						public static values(): native.Array<com.google.firebase.ml.modeldownloader.DownloadType>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export class FirebaseMlException {
						public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.FirebaseMlException>;
						public static CANCELLED: number;
						public static UNKNOWN: number;
						public static INVALID_ARGUMENT: number;
						public static DEADLINE_EXCEEDED: number;
						public static NOT_FOUND: number;
						public static ALREADY_EXISTS: number;
						public static PERMISSION_DENIED: number;
						public static RESOURCE_EXHAUSTED: number;
						public static FAILED_PRECONDITION: number;
						public static ABORTED: number;
						public static OUT_OF_RANGE: number;
						public static UNIMPLEMENTED: number;
						public static INTERNAL: number;
						public static UNAVAILABLE: number;
						public static UNAUTHENTICATED: number;
						public static NO_NETWORK_CONNECTION: number;
						public static NOT_ENOUGH_SPACE: number;
						public static MODEL_HASH_MISMATCH: number;
						public static DOWNLOAD_URL_EXPIRED: number;
						public constructor(param0: string, param1: number);
						public getCode(): number;
					}
					export module FirebaseMlException {
						export class Code {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.FirebaseMlException.Code>;
							/**
							 * Constructs a new instance of the com.google.firebase.ml.modeldownloader.FirebaseMlException$Code interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export class FirebaseModelDownloader {
						public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.FirebaseModelDownloader>;
						public static getInstance(): com.google.firebase.ml.modeldownloader.FirebaseModelDownloader;
						public listDownloadedModels(): com.google.android.gms.tasks.Task<java.util.Set<com.google.firebase.ml.modeldownloader.CustomModel>>;
						public getModelDownloadId(param0: string, param1: com.google.android.gms.tasks.Task<com.google.firebase.ml.modeldownloader.CustomModel>): com.google.android.gms.tasks.Task<java.lang.Long>;
						public deleteDownloadedModel(param0: string): com.google.android.gms.tasks.Task<java.lang.Void>;
						public static getInstance(param0: com.google.firebase.FirebaseApp): com.google.firebase.ml.modeldownloader.FirebaseModelDownloader;
						public setModelDownloaderCollectionEnabled(param0: java.lang.Boolean): void;
						public getModel(param0: string, param1: com.google.firebase.ml.modeldownloader.DownloadType, param2: com.google.firebase.ml.modeldownloader.CustomModelDownloadConditions): com.google.android.gms.tasks.Task<com.google.firebase.ml.modeldownloader.CustomModel>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export class FirebaseModelDownloaderRegistrar {
						public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.FirebaseModelDownloaderRegistrar>;
						public constructor();
						public getComponents(): java.util.List<com.google.firebase.components.Component<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class AutoFirebaseMlLogEventEncoder {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoFirebaseMlLogEventEncoder>;
							public static CODEGEN_VERSION: number;
							public static CONFIG: com.google.firebase.encoders.config.Configurator;
							public configure(param0: com.google.firebase.encoders.config.EncoderConfig<any>): void;
						}
						export module AutoFirebaseMlLogEventEncoder {
							export class FirebaseMlLogEventDeleteModelLogEventEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent> {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoFirebaseMlLogEventEncoder.FirebaseMlLogEventDeleteModelLogEventEncoder>;
								public encode(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class FirebaseMlLogEventEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent> {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoFirebaseMlLogEventEncoder.FirebaseMlLogEventEncoder>;
								public encode(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class FirebaseMlLogEventModelDownloadLogEventEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent> {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoFirebaseMlLogEventEncoder.FirebaseMlLogEventModelDownloadLogEventEncoder>;
								public encode(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class FirebaseMlLogEventModelDownloadLogEventModelOptionsEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions> {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoFirebaseMlLogEventEncoder.FirebaseMlLogEventModelDownloadLogEventModelOptionsEncoder>;
								public encode(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class FirebaseMlLogEventModelDownloadLogEventModelOptionsModelInfoEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo> {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoFirebaseMlLogEventEncoder.FirebaseMlLogEventModelDownloadLogEventModelOptionsModelInfoEncoder>;
								public encode(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
							export class FirebaseMlLogEventSystemInfoEncoder extends com.google.firebase.encoders.ObjectEncoder<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo> {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoFirebaseMlLogEventEncoder.FirebaseMlLogEventSystemInfoEncoder>;
								public encode(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo, param1: com.google.firebase.encoders.ObjectEncoderContext): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class AutoValue_FirebaseMlLogEvent extends com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoValue_FirebaseMlLogEvent>;
							public getSystemInfo(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo;
							public getEventName(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.EventName;
							public hashCode(): number;
							public toBuilder(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder;
							public toString(): string;
							public getDeleteModelLogEvent(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent;
							public equals(param0: any): boolean;
							public getModelDownloadLogEvent(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent;
						}
						export module AutoValue_FirebaseMlLogEvent {
							export class Builder extends com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoValue_FirebaseMlLogEvent.Builder>;
								public build(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent;
								public setModelDownloadLogEvent(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder;
								public setSystemInfo(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder;
								public setEventName(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.EventName): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder;
								public setDeleteModelLogEvent(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class AutoValue_FirebaseMlLogEvent_DeleteModelLogEvent extends com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoValue_FirebaseMlLogEvent_DeleteModelLogEvent>;
							public hashCode(): number;
							public getIsSuccessful(): boolean;
							public toString(): string;
							public equals(param0: any): boolean;
							public getModelType(): number;
						}
						export module AutoValue_FirebaseMlLogEvent_DeleteModelLogEvent {
							export class Builder extends com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent.Builder {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoValue_FirebaseMlLogEvent_DeleteModelLogEvent.Builder>;
								public setIsSuccessful(param0: boolean): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent.Builder;
								public setModelType(param0: number): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent.Builder;
								public build(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class AutoValue_FirebaseMlLogEvent_ModelDownloadLogEvent extends com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoValue_FirebaseMlLogEvent_ModelDownloadLogEvent>;
							public hashCode(): number;
							public getOptions(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions;
							public getDownloadFailureStatus(): number;
							public toString(): string;
							public getRoughDownloadDurationMs(): number;
							public getErrorCode(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode;
							public equals(param0: any): boolean;
							public getDownloadStatus(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus;
							public getExactDownloadDurationMs(): number;
						}
						export module AutoValue_FirebaseMlLogEvent_ModelDownloadLogEvent {
							export class Builder extends com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoValue_FirebaseMlLogEvent_ModelDownloadLogEvent.Builder>;
								public setRoughDownloadDurationMs(param0: number): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
								public build(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent;
								public setDownloadFailureStatus(param0: number): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
								public setOptions(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
								public setExactDownloadDurationMs(param0: number): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
								public setErrorCode(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
								public setDownloadStatus(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class AutoValue_FirebaseMlLogEvent_ModelDownloadLogEvent_ModelOptions extends com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoValue_FirebaseMlLogEvent_ModelDownloadLogEvent_ModelOptions>;
							public hashCode(): number;
							public toString(): string;
							public getModelInfo(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo;
							public equals(param0: any): boolean;
						}
						export module AutoValue_FirebaseMlLogEvent_ModelDownloadLogEvent_ModelOptions {
							export class Builder extends com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.Builder {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoValue_FirebaseMlLogEvent_ModelDownloadLogEvent_ModelOptions.Builder>;
								public setModelInfo(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.Builder;
								public build(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class AutoValue_FirebaseMlLogEvent_ModelDownloadLogEvent_ModelOptions_ModelInfo extends com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoValue_FirebaseMlLogEvent_ModelDownloadLogEvent_ModelOptions_ModelInfo>;
							public getHash(): string;
							public hashCode(): number;
							public getName(): string;
							public toString(): string;
							public equals(param0: any): boolean;
							public getModelType(): number;
						}
						export module AutoValue_FirebaseMlLogEvent_ModelDownloadLogEvent_ModelOptions_ModelInfo {
							export class Builder extends com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo.Builder {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoValue_FirebaseMlLogEvent_ModelDownloadLogEvent_ModelOptions_ModelInfo.Builder>;
								public setHash(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo.Builder;
								public build(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo;
								public setName(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo.Builder;
								public setModelType(param0: number): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class AutoValue_FirebaseMlLogEvent_SystemInfo extends com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoValue_FirebaseMlLogEvent_SystemInfo>;
							public getAppVersion(): string;
							public getMlSdkVersion(): string;
							public hashCode(): number;
							public getFirebaseProjectId(): string;
							public getAppId(): string;
							public toString(): string;
							public getApiKey(): string;
							public equals(param0: any): boolean;
						}
						export module AutoValue_FirebaseMlLogEvent_SystemInfo {
							export class Builder extends com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.AutoValue_FirebaseMlLogEvent_SystemInfo.Builder>;
								public setAppId(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder;
								public setFirebaseProjectId(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder;
								public setAppVersion(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder;
								public setApiKey(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder;
								public setMlSdkVersion(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder;
								public build(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class CustomModelDownloadService {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.CustomModelDownloadService>;
							public getCustomModelDetails(param0: string, param1: string, param2: string): com.google.android.gms.tasks.Task<com.google.firebase.ml.modeldownloader.CustomModel>;
							public getNewDownloadUrlWithExpiry(param0: string, param1: string): com.google.android.gms.tasks.Task<com.google.firebase.ml.modeldownloader.CustomModel>;
							public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.installations.FirebaseInstallationsApi);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class DataTransportMlEventSender {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.DataTransportMlEventSender>;
							public sendEvent(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent): void;
							public static create(param0: com.google.android.datatransport.TransportFactory): com.google.firebase.ml.modeldownloader.internal.DataTransportMlEventSender;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export abstract class FirebaseMlLogEvent {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent>;
							public static FIREBASE_ML_JSON_ENCODER: com.google.firebase.encoders.DataEncoder;
							public constructor();
							public static getFirebaseMlJsonTransformer(): com.google.android.datatransport.Transformer<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent,native.Array<number>>;
							public getSystemInfo(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo;
							public getEventName(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.EventName;
							public static builder(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder;
							public toBuilder(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder;
							public getDeleteModelLogEvent(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent;
							public getModelDownloadLogEvent(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent;
						}
						export module FirebaseMlLogEvent {
							export abstract class Builder {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder>;
								public build(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent;
								public setModelDownloadLogEvent(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder;
								public setSystemInfo(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder;
								public constructor();
								public setEventName(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.EventName): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder;
								public setDeleteModelLogEvent(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.Builder;
							}
							export abstract class DeleteModelLogEvent {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent>;
								public getModelType(): number;
								public getIsSuccessful(): boolean;
								public static builder(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent.Builder;
								public constructor();
							}
							export module DeleteModelLogEvent {
								export abstract class Builder {
									public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent.Builder>;
									public constructor();
									public build(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent;
									public setModelType(param0: number): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent.Builder;
									public setIsSuccessful(param0: boolean): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.DeleteModelLogEvent.Builder;
								}
							}
							export class EventName {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.EventName>;
								public static UNKNOWN_EVENT: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.EventName;
								public static MODEL_DOWNLOAD: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.EventName;
								public static MODEL_UPDATE: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.EventName;
								public static REMOTE_MODEL_DELETE_ON_DEVICE: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.EventName;
								public getValue(): number;
								public static valueOf(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.EventName;
								public static values(): native.Array<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.EventName>;
							}
							export abstract class ModelDownloadLogEvent {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent>;
								public getExactDownloadDurationMs(): number;
								public getDownloadStatus(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus;
								public getDownloadFailureStatus(): number;
								public constructor();
								public getErrorCode(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode;
								public getOptions(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions;
								public static builder(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
								public getRoughDownloadDurationMs(): number;
							}
							export module ModelDownloadLogEvent {
								export abstract class Builder {
									public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder>;
									public setExactDownloadDurationMs(param0: number): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
									public setOptions(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
									public constructor();
									public setDownloadStatus(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
									public build(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent;
									public setDownloadFailureStatus(param0: number): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
									public setRoughDownloadDurationMs(param0: number): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
									public setErrorCode(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.Builder;
								}
								export class DownloadStatus {
									public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus>;
									public static UNKNOWN_STATUS: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus;
									public static EXPLICITLY_REQUESTED: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus;
									public static MODEL_INFO_RETRIEVAL_SUCCEEDED: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus;
									public static MODEL_INFO_RETRIEVAL_FAILED: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus;
									public static SCHEDULED: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus;
									public static DOWNLOADING: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus;
									public static SUCCEEDED: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus;
									public static FAILED: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus;
									public static UPDATE_AVAILABLE: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus;
									public static values(): native.Array<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus>;
									public static valueOf(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus;
									public getValue(): number;
								}
								export class ErrorCode {
									public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode>;
									public static NO_ERROR: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode;
									public static TIME_OUT_FETCHING_MODEL_METADATA: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode;
									public static URI_EXPIRED: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode;
									public static NO_NETWORK_CONNECTION: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode;
									public static DOWNLOAD_FAILED: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode;
									public static MODEL_INFO_DOWNLOAD_UNSUCCESSFUL_HTTP_STATUS: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode;
									public static MODEL_INFO_DOWNLOAD_CONNECTION_FAILED: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode;
									public static MODEL_HASH_MISMATCH: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode;
									public static UNKNOWN_ERROR: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode;
									public static values(): native.Array<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode>;
									public static valueOf(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode;
									public getValue(): number;
								}
								export abstract class ModelOptions {
									public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions>;
									public constructor();
									public static builder(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.Builder;
									public getModelInfo(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo;
								}
								export module ModelOptions {
									export abstract class Builder {
										public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.Builder>;
										public constructor();
										public build(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions;
										public setModelInfo(param0: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.Builder;
									}
									export abstract class ModelInfo {
										public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo>;
										public getName(): string;
										public constructor();
										public getModelType(): number;
										public static builder(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo.Builder;
										public getHash(): string;
									}
									export module ModelInfo {
										export abstract class Builder {
											public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo.Builder>;
											public setName(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo.Builder;
											public setModelType(param0: number): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo.Builder;
											public build(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo;
											public constructor();
											public setHash(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo.Builder;
										}
										export class ModelType {
											public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ModelOptions.ModelInfo.ModelType>;
											/**
											 * Constructs a new instance of the com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent$ModelDownloadLogEvent$ModelOptions$ModelInfo$ModelType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
											 */
											public constructor(implementation: {
											});
											public constructor();
											public static CUSTOM: number;
										}
									}
								}
							}
							export abstract class SystemInfo {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo>;
								public getAppVersion(): string;
								public getApiKey(): string;
								public getAppId(): string;
								public getMlSdkVersion(): string;
								public static builder(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder;
								public getFirebaseProjectId(): string;
								public constructor();
							}
							export module SystemInfo {
								export abstract class Builder {
									public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder>;
									public setAppId(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder;
									public constructor();
									public setApiKey(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder;
									public setAppVersion(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder;
									public build(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo;
									public setMlSdkVersion(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder;
									public setFirebaseProjectId(param0: string): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.SystemInfo.Builder;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class FirebaseMlLogger {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogger>;
							public static NO_FAILURE_VALUE: number;
							public logDownloadEventWithErrorCode(param0: com.google.firebase.ml.modeldownloader.CustomModel, param1: boolean, param2: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus, param3: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode): void;
							public constructor(param0: com.google.firebase.FirebaseApp, param1: com.google.firebase.ml.modeldownloader.internal.SharedPreferencesUtil, param2: com.google.android.datatransport.TransportFactory);
							public logDownloadFailureWithReason(param0: com.google.firebase.ml.modeldownloader.CustomModel, param1: boolean, param2: number): void;
							public static getInstance(): com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogger;
							public logDeleteModel(param0: boolean): void;
							public logDownloadEventWithExactDownloadTime(param0: com.google.firebase.ml.modeldownloader.CustomModel, param1: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.ErrorCode, param2: com.google.firebase.ml.modeldownloader.internal.FirebaseMlLogEvent.ModelDownloadLogEvent.DownloadStatus): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class ModelFileDownloadService {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.ModelFileDownloadService>;
							public getExistingDownloadTask(param0: number): com.google.android.gms.tasks.Task<java.lang.Void>;
							public loadNewlyDownloadedModelFile(param0: com.google.firebase.ml.modeldownloader.CustomModel): java.io.File;
							public constructor(param0: com.google.firebase.FirebaseApp);
							public static getInstance(): com.google.firebase.ml.modeldownloader.internal.ModelFileDownloadService;
							public download(param0: com.google.firebase.ml.modeldownloader.CustomModel, param1: com.google.firebase.ml.modeldownloader.CustomModelDownloadConditions): com.google.android.gms.tasks.Task<java.lang.Void>;
							public maybeCheckDownloadingComplete(): void;
						}
						export module ModelFileDownloadService {
							export class DownloadBroadcastReceiver {
								public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.ModelFileDownloadService.DownloadBroadcastReceiver>;
								public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class ModelFileManager {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.ModelFileManager>;
							public static CUSTOM_MODEL_ROOT_PATH: string;
							public constructor(param0: com.google.firebase.FirebaseApp);
							public static getInstance(): com.google.firebase.ml.modeldownloader.internal.ModelFileManager;
							public deleteOldModels(param0: string, param1: string): void;
							public moveModelToDestinationFolder(param0: com.google.firebase.ml.modeldownloader.CustomModel, param1: globalAndroid.os.ParcelFileDescriptor): java.io.File;
							public deleteAllModels(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module google {
		export module firebase {
			export module ml {
				export module modeldownloader {
					export module internal {
						export class SharedPreferencesUtil {
							public static class: java.lang.Class<com.google.firebase.ml.modeldownloader.internal.SharedPreferencesUtil>;
							public static FIREBASE_MODELDOWNLOADER_COLLECTION_ENABLED: string;
							public static DOWNLOADING_MODEL_ID_MATCHER: string;
							public static PREFERENCES_PACKAGE_NAME: string;
							public getModelDownloadCompleteTimeMs(param0: com.google.firebase.ml.modeldownloader.CustomModel): number;
							public constructor(param0: com.google.firebase.FirebaseApp);
							public setDownloadingCustomModelDetails(param0: com.google.firebase.ml.modeldownloader.CustomModel): void;
							public getSharedPreferenceKeySet(): java.util.Set<string>;
							public setCustomModelStatsCollectionEnabled(param0: java.lang.Boolean): void;
							public setModelDownloadCompleteTimeMs(param0: com.google.firebase.ml.modeldownloader.CustomModel, param1: number): void;
							public setLoadedCustomModelDetails(param0: com.google.firebase.ml.modeldownloader.CustomModel): void;
							public listDownloadedModels(): java.util.Set<com.google.firebase.ml.modeldownloader.CustomModel>;
							public getModelDownloadBeginTimeMs(param0: com.google.firebase.ml.modeldownloader.CustomModel): number;
							public getCustomModelDetails(param0: string): com.google.firebase.ml.modeldownloader.CustomModel;
							public clearDownloadCustomModelDetails(param0: string): void;
							public clearModelDetails(param0: string): void;
							public getDownloadingCustomModelDetails(param0: string): com.google.firebase.ml.modeldownloader.CustomModel;
							public getCustomModelStatsCollectionFlag(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module tasks {
          export class OnCanceledListener {
            public static class: java.lang.Class<com.google.android.gms.tasks.OnCanceledListener>;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnCanceledListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onCanceled(): void;
            });
            public constructor();
            public onCanceled(): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module tasks {
          export class OnCompleteListener<TResult> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.tasks.OnCompleteListener<any>>;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnCompleteListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
            });
            public constructor();
            public onComplete(param0: com.google.android.gms.tasks.Task<TResult>): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module tasks {
          export class OnFailureListener {
            public static class: java.lang.Class<com.google.android.gms.tasks.OnFailureListener>;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnFailureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onFailure(param0: java.lang.Exception): void;
            });
            public constructor();
            public onFailure(param0: java.lang.Exception): void;
          }
        }
      }
    }
  }
}

declare module com {
  export module google {
    export module android {
      export module gms {
        export module tasks {
          export class OnSuccessListener<TResult> extends java.lang.Object {
            public static class: java.lang.Class<com.google.android.gms.tasks.OnSuccessListener<any>>;
            /**
             * Constructs a new instance of the com.google.android.gms.tasks.OnSuccessListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
             */
            public constructor(implementation: {
              onSuccess(param0: TResult): void;
            });
            public constructor();
            public onSuccess(param0: TResult): void;
          }
        }
      }
    }
  }
}
//Generics information:

