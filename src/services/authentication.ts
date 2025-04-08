export class UserData {
  email: string;
  password: string;
  name: string;

  constructor(email: string, password: string, name: string) {
    this.email = email;
    this.password = password;
    this.name = name;
  };
};

export interface ILogin {
  email: string;
  password: string;
};

export interface IAuthResponse {
  token: string;
};

export class AuthenticationService {
  private url: string;

  constructor() {
    this.url = `${process.env.NEXT_PUBLIC_API_URL}/autenticacao`;
  };

  async login(params:ILogin): Promise<string> {
    const res = await fetch(`${this.url}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    };

    const data:IAuthResponse = await res.json();

    return data.token;
  };

  async register(params:UserData): Promise<string> {
    const res = await fetch(`${this.url}/cadastrar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error);
    };

    const data:IAuthResponse = await res.json();

    return data.token;
  };
}
