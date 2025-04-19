import { UserRepository } from '@domain/repositories/UserRepository';
import User from '@domain/entities/User';

import { api } from './api';

class UserApi implements UserRepository {
  async update({ id, name, password }:User) {
    const data = await api.put(`/usuarios/${id}`, { name, password });
    return data.token;
  }
};

export const userApi = new UserApi();
