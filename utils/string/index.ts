export const shortenString = (str: string) =>
  str
    .slice(0, 3)
    .concat('...')
    .concat(str.slice(str.length - 3, str.length));
