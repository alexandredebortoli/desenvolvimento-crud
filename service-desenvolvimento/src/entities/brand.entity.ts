import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Model } from './model.entity';

@Entity()
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @OneToMany(() => Model, (model) => model.brand)
  models: Model[];
}
