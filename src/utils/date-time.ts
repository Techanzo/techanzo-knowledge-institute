/**
 * converts minutes to hours and minutes
 * @param minutes number of minutes
 * @returns time in hours + minutes, e.g. 1h 24m
 */
export function minutesToHours(minutes: number) {
  if (minutes === 0) return '';

  if (minutes < 60) return `${minutes}m`;

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (remainingMinutes === 0) return `${hours}h`;

  return `${hours}h ${remainingMinutes}m`;
}
