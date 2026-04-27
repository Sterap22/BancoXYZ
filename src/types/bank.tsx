export interface BalanceResponse {
  currency: string | '';
  accountBalance: number | 0;
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

export interface TransferRequest {
  value: number | 0;
  currency: string | '';
  payeerDocument: string | '';
  transferDate: string | '';
}