import { DashboardRepository } from '@domain/repositories/DashboardRepository';
import { api } from './api';

type DashboardData = {
  totalValue: number;
};

class DashboardApi implements DashboardRepository {
  async getData():Promise<DashboardData> {
    const data = await api.get('/dashboard');
    return data;
  };
};

export const dashboardApi = new DashboardApi();
