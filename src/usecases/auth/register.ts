import { AuthRepository } from '@domain/repositories/AuthRepository';
import { RegisterParams } from '@generalTypes/auth';

export async function register(params: RegisterParams, repository: AuthRepository) {
  return await repository.register(params);
};
