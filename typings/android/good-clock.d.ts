/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module nesl {
		export module goodclock {
			export class BuildConfig {
				public static class: java.lang.Class<com.nesl.goodclock.BuildConfig>;
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

declare module com {
	export module nesl {
		export module ntp {
			export class GoodClock {
				public static class: java.lang.Class<com.nesl.ntp.GoodClock>;
				public static DEFAULT_REQUESTS_PER_NTP_UPDATE: number;
				public static DEFAULT_UPDATE_INTERVAL: number;
				public SntpSuceeded: boolean;
				public constructor(param0: number, param1: number);
				public stop(): void;
				public currentTimeMillis(): number;
				public getNtp_clockoffset(): number;
				public startSync(): void;
        public singleSync(): boolean;
				public Now(): number;
				public getDrift(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module nesl {
		export module ntp {
			export class SntpDsense {
				public static class: java.lang.Class<com.nesl.ntp.SntpDsense>;
				public get_ntp_update_monotonic_time(): number;
				public requestTime(param0: java.net.InetAddress, param1: number, param2: number): boolean;
				public getNtp_clockoffset(): number;
				public constructor(param0: number);
				public requestTime(param0: string, param1: number): boolean;
				public getRoundTripTime(): number;
				public get_ntp_update_sys_time(): number;
			}
			export module SntpDsense {
				export class InvalidServerReplyException {
					public static class: java.lang.Class<com.nesl.ntp.SntpDsense.InvalidServerReplyException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

//Generics information:

