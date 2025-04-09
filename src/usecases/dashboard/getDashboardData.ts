import { DashboardRepository } from '@domain/repositories/DashboardRepository';

export async function getDashboardData( repository: DashboardRepository) {
  return await repository.getData();
};
