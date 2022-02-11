import { formatAmount, calculateBalances } from './index';

test('Calculate Balances', () => {
  const initialAmount = '+1.00';
  const amount = formatAmount(initialAmount).amount;
  const operator = formatAmount(initialAmount).operator;
  const calculated = calculateBalances('0', initialAmount);
  expect(amount).toBe('1.00');
  expect(operator).toBe('+');
  expect(calculated).toBe('1.00');
});

test('When operator is not valid', () => {
  const initialAmount = '1.00';
  expect(() => {
    formatAmount(initialAmount);
  }).toThrowError('Invalid operator found in data');
});
