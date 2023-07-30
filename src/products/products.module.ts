import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { categoriesProviders } from './products.providers';
import { ProductsService } from './products.service';
import { DatabaseModule } from 'src/databases/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [...categoriesProviders, ProductsService],
})
export class ProductsModule {}
