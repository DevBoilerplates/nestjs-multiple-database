import { DataSource } from 'typeorm';

import { Budget } from './entities/budget.entity';

export const budgetProvider = {
  provide: 'BUDGET_REPOSITORY',
  useFactory: (dataSource: DataSource) => dataSource.getRepository(Budget),
  inject: ['DEFAULT_DB_CONNECTION'],
};
