import { AuthRepository } from '@domain/repositories/AuthRepository';
import { api } from './api';

export const authApi:AuthRepository = {
  async login({ email, password }) {
    const data = await api.post('/autenticacao', { email, password });
    return data.token;
  },

  async register({ email, password, name }) {
    const data = await api.post('/autenticacao/cadastrar', {  email, password, name });
    return data.token;
  },
};
