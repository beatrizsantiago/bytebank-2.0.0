import { AuthRepository } from '@domain/repositories/AuthRepository';
import { RegisterParams } from '@generalTypes/auth';
import { localStorageService } from '@infrastructure/services/localStorage';

export async function register(params: RegisterParams, repository: AuthRepository) {
  const token = await repository.register(params);
  localStorageService.setToken(token);
  return token;
};
