import User from '@domain/entities/User';
import { LoginParams } from '@generalTypes/auth';

export interface AuthRepository {
  login(data: LoginParams): Promise<string>;
  register(data: User): Promise<string>;
};
