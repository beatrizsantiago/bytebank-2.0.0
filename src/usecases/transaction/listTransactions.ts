import { TransactionRepository } from '@domain/repositories/TransactionRepository';

class ListTransactionUseCase {
  constructor(private repository: TransactionRepository) {}

  async execute(page?: number, limit?: number) {
    return await this.repository.list(page, limit);
  }
};

export default ListTransactionUseCase;
