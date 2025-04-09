import { TransactionRepository } from '@domain/repositories/TransactionRepository';
import { UpdateTransactionParams } from '@generalTypes/transaction';

export async function updateTransaction(id: string, params: UpdateTransactionParams, repository: TransactionRepository) {
  return await repository.update(id, params);
};
