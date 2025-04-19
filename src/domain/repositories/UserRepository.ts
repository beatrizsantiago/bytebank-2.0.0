import User from '@domain/entities/User';

export interface UserRepository {
  update(params: User): Promise<string>;
};
