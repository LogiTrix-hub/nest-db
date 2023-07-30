import { DataSource } from 'typeorm';
import { Suppliers } from './suppliers.entity';

export const suppliersProviders = [
  {
    provide: 'SUPPLIERS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Suppliers),
    inject: ['DATA_SOURCE'],
  },
];
