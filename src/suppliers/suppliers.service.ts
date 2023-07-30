import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Suppliers } from './suppliers.entity';

@Injectable()
export class SuppliersService {
  constructor(
    @Inject('SUPPLIERS_REPOSITORY')
    private readonly suppliersRepository: Repository<Suppliers>,
  ) {}

  async findAll() {
    return await this.suppliersRepository.find({
      order: {
        country: 'ASC',
      },
    });
  }

  async findById(id: number) {
    return await this.suppliersRepository.findOne({
      where: {
        supplier_id: id,
      },
    });
  }
}
