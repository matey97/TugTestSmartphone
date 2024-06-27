export function toLegibleDate(timestamp: number): string {
  const dateString = new Date(timestamp).toString();
  const components = dateString.split(" ");
  const time = components[4];
  const date = components.slice(1, 4);

  return `${time} ${date.join(" ")}`;
}

export function toLegibleDuration(duration: number): string {
  return duration > 0
    ? `${Math.round(duration/1000 * 100) / 100} seconds`
    : "Unknown";
}

export function toFailedStatus(duration: number): string {
  switch (duration) {
    case -1:
      return "Unable to compute results";
    case -2:
      return "Procedural breach detected";
  }
}

export function toFailedStatusText(status: number): string {
  switch (status) {
    case -1:
      return "The application was not able to detect the duration of the test due to recognition errors."
    case -2:
      return "The TUG test was aborted due to procedural breaches during its execution."
  }
}
