import { UserRepository } from '@domain/repositories/UserRepository';
import { UpdateUserParams } from '@generalTypes/user';
import { localStorageService } from '@infrastructure/services/localStorage';

export async function update(params: Omit<UpdateUserParams, 'id'>, repository: UserRepository) {
  const userInfo = localStorageService.getUserInfoFromToken();
  return await repository.update({ id: userInfo.user_id, ...params });
};
