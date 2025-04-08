import { UserRepository } from '@domain/repositories/UserRepository';
import { api } from './api';

export const userApi: UserRepository = {
  async update({ id, name, password }) {
    const data = await api.put(`/usuarios/${id}`, { name, password });
    return data.token;
  },
};
