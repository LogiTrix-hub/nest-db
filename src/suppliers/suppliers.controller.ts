import { Controller, Get, Param } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';

@Controller('suppliers')
export class SuppliersController {
  constructor(private readonly supplierService: SuppliersService) {}

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.supplierService.findById(id);
  }

  @Get('')
  getAll() {
    return this.supplierService.findAll();
  }
}
