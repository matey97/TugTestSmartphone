import GoodClock = com.nesl.ntp.GoodClock;

export class NTPTime {

  get currentTime(): number {
    return this.clock.SntpSuceeded ? this.clock.Now() : java.lang.System.currentTimeMillis();
  }

  constructor(private clock: GoodClock = new GoodClock()) {
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
