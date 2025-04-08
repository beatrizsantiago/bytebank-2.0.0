type DashboardData = {
  totalValue: number;
};

export interface DashboardRepository {
  getDashboardData(): Promise<DashboardData>;
};
