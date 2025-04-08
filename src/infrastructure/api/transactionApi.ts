import { TransactionRepository } from '@domain/repositories/TransactionRepository';
import { api } from './api';

export const transactionApi: TransactionRepository = {
  async add(params) {
    await api.post('/transacoes', params);
  },

  async list(page, limit) {
    const searchParams = new URLSearchParams({
      page: `${page || 1}`,
      limit: `${limit || 6}`,
    });

    const data = await api.get(`/transacoes?${searchParams}`);
    
    return data;
  },

  async update(id, params) {
    await api.put(`/transacoes/${id}`, params);
  },

  async delete(id) {
    const data = await api.delete(`/transacoes/${id}`);
    return data;
  },
};
