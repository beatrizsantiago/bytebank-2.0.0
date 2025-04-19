import { TransactionRepository } from '@domain/repositories/TransactionRepository';

class RemoveTransactionUseCase {
  constructor(private repository: TransactionRepository) {}

  async execute(id: string) {
    return await this.repository.delete(id);
  }
};

export default RemoveTransactionUseCase;