export const compareDates = (prevTimestamp: string, nexTimestamp: string): string =>
  new Date(prevTimestamp).getTime() >= new Date(nexTimestamp).getTime()
    ? prevTimestamp
    : nexTimestamp;
