
import { api } from "../api/client";
import { BalanceResponse, Transfer, TransferRequest } from "../types/bank";

export const getBalance = async (): Promise<BalanceResponse> => {
  const res = await api.get<BalanceResponse>(
    "https://2k0ic4z7s5.execute-api.us-east-1.amazonaws.com/default/balance"
  );
  
  return res.data;
};

export const getTransfers = async (): Promise<Transfer[]> => {
  const res = await api.get<Transfer[]>(
    "https://n0qaa2fx3c.execute-api.us-east-1.amazonaws.com/default/transferList"
  );
  return res.data?.transfers;
};

export const makeTransfer = async (body: TransferRequest ) => {
  console.log(body,' body de trasnferencia');
  
  return api.post(
    "https://ofqx4zxgcf.execute-api.us-east-1.amazonaws.com/default/transfer",
    JSON.stringify(body)
  );
};