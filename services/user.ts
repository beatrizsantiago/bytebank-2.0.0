import APIHandler from './api';
import LocalStorageService from './localStorage';

const api = new APIHandler();
const localStorageService = new LocalStorageService();

export interface IUpdateResponse {
  token: string;
};

export interface IUserData {
  password: string;
  name: string;
};

export class UserData {
  password: string;
  name: string;

  constructor(password: string, name: string) {
    this.password = password;
    this.name = name;
  };
};

export class UserService {
  private endpoint: string;
  private id: string;
  private email: string;

  constructor() {
    this.endpoint = '/usuarios';
    this.id = localStorageService.getUserInfoFromToken().user_id;
    this.email = localStorageService.getUserInfoFromToken().email;
  };

  async update(params: UserData): Promise<string> {
    const res = await api.put(`${this.endpoint}/${this.id}`, {
      ...params,
      email: this.email,
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    };

    const data:IUpdateResponse = await res.json();

    return data.token;
  };
};
