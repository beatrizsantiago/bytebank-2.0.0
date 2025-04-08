type OptionsType = {
  method?: string;
  body?: string;
  headers?: Record<string, string>;
};

class APIHandler {
  private baseUrl: string;
  private token: string | null = null;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL as string;
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('token');
    }
  };

  private async request(endpoint: string, options:OptionsType = {}) {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      throw new Error(
        errorBody.message || `API Error: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  };

  get(endpoint: string) {
    return this.request(endpoint, {
      method: 'GET',
    });
  };

  post(endpoint: string, data: unknown) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  };

  put(endpoint: string, data: unknown) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  };

  delete(endpoint: string) {
    return this.request(endpoint, {
      method: 'DELETE',
    });
  };
};

export const api = new APIHandler();
