import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Categories } from './categories.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @Inject('CATEGORIES_REPOSITORY')
    private readonly categoriesRepository: Repository<Categories>,
  ) {}

  async findAll() {
    return await this.categoriesRepository.find();
  }

  async findById(id: number) {
    return await this.categoriesRepository.findOne({
      where: {
        category_id: id,
      },
    });
  }
}
