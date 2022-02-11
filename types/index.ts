export type Currency = 'EUR' | 'USD' | 'GBP';

export interface Transaction {
  user_id: string;
  currency: Currency;
  amount: string;
  timestamp: string;
}

export interface FormattedAmount {
  amount: string;
  operator: '+' | '-';
}

export interface UserBalance {
  user_id: string;
  GBP?: string;
  EUR?: string;
  USD?: string;
  lastActivity: string;
}
