import { TransactionRepository } from '@domain/repositories/TransactionRepository';

export async function listTransactions( repository: TransactionRepository, page?: number, limit?: number) {
  return await repository.list(page, limit);
};
