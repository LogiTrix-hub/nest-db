import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categories {
  @PrimaryGeneratedColumn()
  category_id: number;

  @Column({ length: 15 })
  category_name: string;

  @Column('text')
  description: string;

  @Column('bytea')
  picture: Buffer;
}
