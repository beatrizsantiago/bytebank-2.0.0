import APIHandler from './api';

const api = new APIHandler();

export interface IDashboardData {
  totalValue: number;
}

export class DashboardService {
  private endpoint: string;

  constructor() {
    this.endpoint = '/dashboard';
  };

  async getData(): Promise<IDashboardData> {
    const res = await api.get(this.endpoint);

    if (!res.ok) {
      throw new Error('Erro ao buscar os dados');
    };

    const data: IDashboardData = await res.json();

    return data;
  };
};
