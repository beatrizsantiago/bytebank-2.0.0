import { UpdateUserParams } from "@generalTypes/user";

export interface UserRepository {
  update(params: UpdateUserParams): Promise<string>;
};
