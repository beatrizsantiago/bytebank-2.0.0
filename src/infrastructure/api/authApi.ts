import { AuthRepository } from '@domain/repositories/AuthRepository';
import { LoginParams } from '@generalTypes/auth';
import User from '@domain/entities/User';

import { api } from './api';

class AuthApi implements AuthRepository {
  async login({ email, password }:LoginParams) {
    const data = await api.post('/autenticacao', { email, password });
    return data.token;
  }

  async register({ email, password, name }:User) {
    const data = await api.post('/autenticacao/cadastrar', {  email, password, name });
    return data.token;
  }
};

export const authApi = new AuthApi();
