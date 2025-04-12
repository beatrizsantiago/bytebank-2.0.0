import {
  AddTransactionParams, TransactionType, UpdateTransactionParams,
} from '@generalTypes/transaction';

type TransactionList = {
  data: TransactionType[];
  totalPages: number;
  currentPage: number;
};

export interface TransactionRepository {
  add(data: AddTransactionParams): Promise<void>;
  list(page?: number, limit?: number): Promise<TransactionList>;
  update(id: string, data: UpdateTransactionParams): Promise<void>;
  delete(id: string): Promise<void>;
};
