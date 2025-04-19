import { AuthRepository } from '@domain/repositories/AuthRepository';
import { LoginParams } from '@generalTypes/auth';
import { localStorageService } from '@infrastructure/services/localStorage';

class LoginUseCase {
  constructor(private repository: AuthRepository) {}

  async execute(params: LoginParams) {
    const token = await this.repository.login(params);
    localStorageService.setToken(token);
    return true;
  };
};

export default LoginUseCase;
