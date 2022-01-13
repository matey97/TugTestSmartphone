export enum Activity {
  SIT = "SIT",
  STANDING_UP = "STANDING",
  WALKING = "WALKING",
  TURNING = "TURNING",
  SITTING = "SITTING"
}

export function fromString(value: string): Activity {
  switch (value) {
    case "SIT":
      return Activity.SIT;
    case "STANDING":
      return Activity.STANDING_UP;
    case "WALKING":
      return Activity.WALKING;
    case "TURNING":
      return Activity.TURNING;
    case "SITTING":
      return Activity.SITTING;
  }
}
