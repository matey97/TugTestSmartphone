export function toLegibleDate(timestamp: number): string {
  const isoDate = new Date(timestamp).toISOString();
  const parts = isoDate.split("T");
  const date = parts[0];
  const time = parts[1].split(":")
  return `${time[0]}:${time[1]} ${date}`;
}

export function toLegibleDuration(duration: number): string {
  return `${Math.round(duration/1000 * 100) / 100} seconds`
}
