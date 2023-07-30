import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private readonly productsRepository: Repository<Products>,
  ) {}

  async findAll() {
    return await this.productsRepository.find();
  }

  async findById(id: number) {
    return await this.productsRepository.findOne({
      where: {
        product_id: id,
      },
    });
  }
}
