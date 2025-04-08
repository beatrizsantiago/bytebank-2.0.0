type OptionsType = { method?: string; body?: string; headers?: Record<string, string> };

class APIHandler {
  private url: string;
  private token: string | null;

  constructor() {
    this.url = process.env.NEXT_PUBLIC_API_URL as string;
    this.token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  };

  setToken(token:string) {
    this.token = token;
    localStorage.setItem('token', token);
  };

  clearToken() {
    this.token = null;
    localStorage.removeItem('token');
  };

  async request(endpoint: string, options:OptionsType = {}) {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${this.url}${endpoint}`, {
      ...options,
      headers,
    });

    return response;
  };

  async get(endpoint: string) {
    return this.request(endpoint, {
      method: 'GET',
    });
  };

  async post(endpoint:string, data:unknown) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  async put(endpoint:string, data:unknown) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  };

  async delete(endpoint:string) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  };
}

export default APIHandler;
