import {
  AddTransactionParams, KindType, UpdateTransactionParams,
} from '@generalTypes/transaction';

type Transaction = {
  _id: string;
  kind: KindType;
  value: number;
  date: string;
};

type TransactionList = {
  data: Transaction[];
  totalPages: number;
  currentPage: number;
};

export interface TransactionRepository {
  add(data: AddTransactionParams): Promise<void>;
  list(page?: number, limit?: number): Promise<TransactionList>;
  update(id: string, data: UpdateTransactionParams): Promise<void>;
  delete(id: string): Promise<void>;
};
