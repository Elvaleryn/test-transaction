import { Transaction, FormattedAmount, UserBalance } from '../../types';
import { compareDates } from '../date';

export const formatAmount = (amount: string): FormattedAmount => {
  const _amount = amount.slice(1);
  const operator = amount.slice(0, 1);

  if (operator === '+' || operator === '-') {
    return {
      amount: _amount,
      operator,
    };
  } else {
    throw 'Invalid operator found in data';
  }
};

export const calculateBalances = (total: string, amount: string): string | unknown => {
  try {
    const formattedAmount = formatAmount(amount);
    return formattedAmount.operator === '+'
      ? (Number(total) + Number(formattedAmount.amount)).toFixed(2)
      : (Number(total) - Number(formattedAmount.amount)).toFixed(2);
  } catch (err) {
    return err;
  }
};

export const extractUserBalances = (transactions: Transaction[]) => {
  return transactions.reduce(
    (accumulator: Record<string, UserBalance>, transaction: Transaction, idx: number) => {
      if (
        !transaction.amount ||
        !transaction.currency ||
        !transaction.user_id ||
        !transaction.timestamp
      ) {
        alert(
          `Invalid JSON file. Example data should be: [{user_id, currency, amount, timestamp}]. Field is missing at: ${idx}`
        );
      }
      const amount = accumulator?.[transaction.user_id]?.[transaction.currency]
        ? calculateBalances(
            accumulator?.[transaction.user_id]?.[transaction.currency] || '',
            transaction.amount
          )
        : calculateBalances('0', transaction.amount);
      const lastActivity = accumulator?.[transaction.user_id]?.lastActivity
        ? compareDates(accumulator[transaction.user_id].lastActivity, transaction.timestamp)
        : transaction.timestamp;

      accumulator[transaction.user_id] = {
        ...accumulator[transaction.user_id],
        [transaction.currency]: amount,
        lastActivity,
        user_id: transaction.user_id,
      };

      return accumulator;
    },
    {}
  );
};
