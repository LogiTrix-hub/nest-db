import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { categoriesProviders } from './categories.providers';
import { CategoriesService } from './categories.service';
import { DatabaseModule } from 'src/databases/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController],
  providers: [...categoriesProviders, CategoriesService],
})
export class CategoriesModule {}
