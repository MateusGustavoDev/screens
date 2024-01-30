export function convertMinutesToHoursAndMinutes(minutes: number) {
  const hours = Math.floor(minutes / 60);

  const remainingMinutes = minutes % 60;

  return {
    hours: hours,
    minutes: remainingMinutes,
  };
}
