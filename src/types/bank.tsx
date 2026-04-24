export interface BalanceResponse {
  currency: string;
  accountBalance: number;
}

export interface Transfer {
  value: number;
  date: string;
  currency: string;
  payeer: {
    document: string;
    name: string;
  };
}