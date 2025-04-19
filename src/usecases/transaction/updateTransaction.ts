import { TransactionRepository } from '@domain/repositories/TransactionRepository';
import { KindType } from '@generalTypes/transaction';
import { dashboardApi } from '@infrastructure/api/dashboardApi';
import Transaction from '@domain/entities/Transaction';

type UpdateTransactionParams = {
  id: string;
  kind: KindType;
  value: number;
};

class UpdateTransactionUseCase {
  constructor(private repository: TransactionRepository) {}

  async execute(params: UpdateTransactionParams) {
    const dashboardData = await dashboardApi.getData();
    const absValue = Math.abs(params.value);

    if (absValue > dashboardData.totalValue && params.kind !== 'DEPOSIT') {
      throw new Error('Saldo insuficiente para realizar essa transação!');
    };

    const value = absValue * (params.kind === 'DEPOSIT' ? 1 : -1);

    const transaction = new Transaction(
      params.id,
      params.kind,
      value,
      '',
    );

    return await this.repository.update(transaction);
  }
};

export default UpdateTransactionUseCase;
