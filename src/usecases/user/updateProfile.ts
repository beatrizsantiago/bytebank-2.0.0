import User from '@domain/entities/User';
import { UserRepository } from '@domain/repositories/UserRepository';
import { localStorageService } from '@infrastructure/services/localStorage';

type UpdateParams = {
  name: string;
  password: string;
}

class UpdateProfileUseCase {
  constructor(private repository: UserRepository) {}

  async execute(params: UpdateParams) {
    const userInfo = localStorageService.getUserInfoFromToken();

    if (!userInfo) {
      throw new Error('Usuário não encontrado!');
    }

    const updatedUser = new User(
      userInfo.user_id,
      '',
      params.password,
      params.name,
    );

    const token = await this.repository.update(updatedUser);
    localStorageService.setToken(token);

    return true;
  }
};

export default UpdateProfileUseCase;
