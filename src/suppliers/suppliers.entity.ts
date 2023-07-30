import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Suppliers {
  @PrimaryGeneratedColumn()
  supplier_id: number;

  @Column({ type: 'varchar', length: 30 })
  company_name: string;

  @Column({ type: 'varchar', length: 30 })
  contact_name: string;

  @Column({ type: 'varchar', length: 30 })
  contact_title: string;

  @Column({ type: 'varchar', length: 60 })
  address: string;

  @Column({ type: 'varchar', length: 15 })
  city: string;

  @Column({ type: 'varchar', length: 15 })
  region: string;

  @Column({ type: 'varchar', length: 10 })
  postal_code: string;

  @Column({ type: 'varchar', length: 15 })
  country: string;

  @Column({ type: 'varchar', length: 24 })
  phone: string;

  @Column({ type: 'varchar', length: 24 })
  fax: string;

  @Column('text')
  homepage: string;
}
