import { AuthRepository } from '@domain/repositories/AuthRepository';
import { LoginParams } from '@generalTypes/auth';

export async function login(params: LoginParams, repository: AuthRepository) {
  return await repository.login(params);
};
