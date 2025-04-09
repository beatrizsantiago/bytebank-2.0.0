import { TransactionRepository } from '@domain/repositories/TransactionRepository';

export async function removeTransaction(id: string, repository: TransactionRepository) {
  return await repository.delete(id);
};
