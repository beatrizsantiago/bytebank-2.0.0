import { UserRepository } from '@domain/repositories/UserRepository';
import { UpdateUserParams } from '@generalTypes/user';

export async function update(params: UpdateUserParams, repository: UserRepository) {
  return await repository.update(params);
};
