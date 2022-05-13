import GoodClock = com.nesl.ntp.GoodClock;

const REQUESTS_PER_NTP_UPDATE = 5;
const UPDATE_INTERVAL = GoodClock.DEFAULT_UPDATE_INTERVAL;

export class NTPTime {

  get currentTime(): number {
    return this.clock.SntpSuceeded ? this.clock.Now() : java.lang.System.currentTimeMillis();
  }

  constructor(private clock: GoodClock = new GoodClock(REQUESTS_PER_NTP_UPDATE, UPDATE_INTERVAL)) {
  }

  async sync(): Promise<void> {
    this.clock.start();

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 1000);
    });
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
