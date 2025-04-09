import { LoginParams, RegisterParams } from "@generalTypes/auth";
export interface AuthRepository {
  login(data: LoginParams): Promise<string>;
  register(data: RegisterParams): Promise<string>;
};
