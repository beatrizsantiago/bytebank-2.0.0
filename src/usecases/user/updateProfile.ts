import { UserRepository } from '@domain/repositories/UserRepository';
import { UpdateUserParams } from '@generalTypes/user';

export async function update(params: Omit<UpdateUserParams, 'id'>, repository: UserRepository) {
  return await repository.update(params);
};
