type UserParams = {
  id: string;
  name: string;
  password: string;
}

export interface UserRepository {
  update(params: UserParams): Promise<string>;
};