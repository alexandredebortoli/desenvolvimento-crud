import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Model } from './model.entity';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  name: string;

  @Column({ precision: 11 })
  renavam: number;

  @Column({ length: 7 })
  license: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('year')
  year: string;

  @ManyToOne(() => Model, (model) => model.cars)
  @JoinColumn({ name: 'id_model', referencedColumnName: 'id' })
  model: Model;

  @Column({ name: 'id_model' })
  idModel: number;
}
