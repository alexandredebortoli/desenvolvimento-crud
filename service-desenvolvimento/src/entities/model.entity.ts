import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Brand } from './brand.entity';
import { Car } from './car.entity';

@Entity()
export class Model {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'id_brand' })
  idBrand: number;

  @Column({ length: 50 })
  name: string;

  @ManyToOne(() => Brand, (brand) => brand.models)
  @JoinColumn({ name: 'id_brand', referencedColumnName: 'id' })
  brand: Brand;

  @OneToMany(() => Car, (car) => car.model)
  cars: Car[];
}
