import { Transaction } from '../types';

const getJsonFile = (url: string): Promise<Transaction[]> =>
  fetch(url)
    .then((res) => res.json())
    .catch((e) => e);

export default getJsonFile;
