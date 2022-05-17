import GoodClock = com.nesl.ntp.GoodClock;

const REQUESTS_PER_NTP_UPDATE = 5;
const UPDATE_INTERVAL = GoodClock.DEFAULT_UPDATE_INTERVAL;

export class NTPTime {

  get currentTime(): number {
    return this.clock.SntpSuceeded ? this.clock.Now() : java.lang.System.currentTimeMillis();
  }

  constructor(private clock: GoodClock = new GoodClock(REQUESTS_PER_NTP_UPDATE, UPDATE_INTERVAL)) {
  }

  backgroundSync(): void {
    this.clock.startSync();
  }

  blockingSync(): boolean {
    return this.clock.singleSync();
  }

  disableSync(): void {
    this.clock.stop();
  }
}

let _instance;
export function getNTPTime(): NTPTime {
  if (!_instance) {
    _instance = new NTPTime();
  }
  return _instance;
}
