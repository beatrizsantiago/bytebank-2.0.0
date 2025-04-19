import Transaction from '@domain/entities/Transaction';
import { TransactionList } from '@generalTypes/transaction';

export interface TransactionRepository {
  add(data: Transaction): Promise<Transaction>;
  list(page?: number, limit?: number): Promise<TransactionList>;
  update(data: Transaction) :Promise<Transaction>;
  delete(id: string): Promise<void>;
};
