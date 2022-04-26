export function toLegibleDate(timestamp: number): string {
  const dateString = new Date(timestamp).toString();
  const components = dateString.split(" ");
  const time = components[4];
  const date = components.slice(1, 4);

  return `${time} ${date.join(" ")}`;
}

export function toLegibleDuration(duration: number): string {
  return duration !== -1
    ? `${Math.round(duration/1000 * 100) / 100} seconds`
    : "Unknown";
}
