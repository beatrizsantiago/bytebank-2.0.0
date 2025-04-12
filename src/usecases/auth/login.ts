import { AuthRepository } from '@domain/repositories/AuthRepository';
import { LoginParams } from '@generalTypes/auth';
import { localStorageService } from '@infrastructure/services/localStorage';

export async function login(params: LoginParams, repository: AuthRepository) {
  const token = await repository.login(params);
  localStorageService.setToken(token);
  return token;
};
