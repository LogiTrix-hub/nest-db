import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './databases/database.module';
import { CategoriesModule } from './categories/categories.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [DatabaseModule, CategoriesModule, SuppliersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
