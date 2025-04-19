import Transaction from '@domain/entities/Transaction';
import { TransactionRepository } from '@domain/repositories/TransactionRepository';
import { TransactionList } from '@generalTypes/transaction';
import { api } from './api';

class TransactionApi implements TransactionRepository {
  async add(params: Transaction):Promise<Transaction> {
    const data = await api.post('/transacoes', {
      kind: params.kind,
      value: params.value,
    });
    return data;
  }

  async list(page?: number, limit?: number):Promise<TransactionList> {
    const searchParams = new URLSearchParams({
      page: `${page || 1}`,
      limit: `${limit || 6}`,
    });

    const data = await api.get(`/transacoes?${searchParams}`);
    
    return data;
  }

  async update(params: Transaction):Promise<Transaction> {
    const data = await api.put(`/transacoes/${params._id}`, {
      kind: params.kind,
      value: params.value,
    });

    return data;
  }

  async delete(id: string): Promise<void> {
    await api.delete(`/transacoes/${id}`);
  }
};

export const transactionApi = new TransactionApi();
