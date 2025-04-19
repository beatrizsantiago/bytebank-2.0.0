import { DashboardRepository } from '@domain/repositories/DashboardRepository';

class GetDashboardDataUseCase {
  constructor(private repository: DashboardRepository) {}

  async execute() {
    return await this.repository.getData();
  }
};

export default GetDashboardDataUseCase;
