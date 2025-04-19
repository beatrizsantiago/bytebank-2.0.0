import { TransactionRepository } from '@domain/repositories/TransactionRepository';
import { KindType } from '@generalTypes/transaction';
import { dashboardApi } from '@infrastructure/api/dashboardApi';
import Transaction from '@domain/entities/Transaction';

type AddTransactionParams = {
  kind: KindType;
  value: number;
};

class AddTransactionUseCase {
  constructor(private repository: TransactionRepository) {}

  async execute(params: AddTransactionParams) {
    const dashboardData = await dashboardApi.getData();
    const absValue = Math.abs(params.value);

    if (absValue > dashboardData.totalValue && params.kind !== 'DEPOSIT') {
      throw new Error('Saldo insuficiente para realizar essa transação!');
    };

    const value = absValue * (params.kind === 'DEPOSIT' ? 1 : -1);

    const transaction = new Transaction(
      '',
      params.kind,
      value,
      '',
    );
  
    return await this.repository.add(transaction);
  }
};

export default AddTransactionUseCase;