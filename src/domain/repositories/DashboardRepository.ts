type DashboardData = {
  totalValue: number;
};

export interface DashboardRepository {
  getData(): Promise<DashboardData>;
};
