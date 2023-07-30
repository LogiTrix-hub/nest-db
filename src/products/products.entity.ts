import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column({ type: 'varchar', length: 40 })
  product_name: string;

  @Column('smallint')
  supplier_id: string;

  @Column('smallint')
  category_id: string;

  @Column({ type: 'varchar', length: 20 })
  quantity_per_unit: string;

  @Column('real')
  unit_price: string;

  @Column('smallint')
  units_in_stock: number;

  @Column('smallint')
  units_on_order: number;

  @Column('smallint')
  reorder_level: string;

  @Column('int')
  discontinued: string;
}
