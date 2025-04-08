type LoginParams = {
  email: string;
  password: string;
}

type RegisterParams = {
  name: string;
  email: string;
  password: string;
}

export interface AuthRepository {
  login(data: LoginParams): Promise<string>;
  register(data: RegisterParams): Promise<string>;
};
