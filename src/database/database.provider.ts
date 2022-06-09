import { DataSource } from 'typeorm';

import databaseConnectionOption from './database-connection.config';

const dataSource = new DataSource({ ...databaseConnectionOption });

export const databaseProviders = [
  {
    provide: 'DEFAULT_DB_CONNECTION',
    useFactory: async () => await dataSource.initialize(),
  },
];
