import { Module } from '@nestjs/common';
import { SuppliersController } from './suppliers.controller';
import { suppliersProviders } from './suppliers.providers';
import { SuppliersService } from './suppliers.service';
import { DatabaseModule } from 'src/databases/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SuppliersController],
  providers: [...suppliersProviders, SuppliersService],
})
export class SuppliersModule {}
