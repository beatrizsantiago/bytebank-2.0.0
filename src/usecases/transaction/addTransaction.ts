import { TransactionRepository } from '@domain/repositories/TransactionRepository';
import { AddTransactionParams } from '@generalTypes/transaction';

export async function addTransaction(params: AddTransactionParams, repository: TransactionRepository) {
  return await repository.add(params);
};
