import { DashboardRepository } from '@domain/repositories/DashboardRepository';
import { api } from './api';

export const dashboardApi: DashboardRepository = {
  async getData() {
    const data = await api.get('/dashboard');
    return data;
  }
};
