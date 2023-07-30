import { Controller, Get, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.categoriesService.findById(id);
  }

  @Get('')
  getAll() {
    return this.categoriesService.findAll();
  }
}
