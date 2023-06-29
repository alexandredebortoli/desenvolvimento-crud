import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from 'src/entities/car.entity';
import { Repository } from 'typeorm';
import { CarDTO, CarInputDTO } from './dto/car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private carRepository: Repository<Car>,
  ) {}

  async findAll(): Promise<CarDTO[]> {
    // MySQL query: SELECT * FROM desenvolvimentoDb.car;
    return await this.carRepository.find();
  }

  async findOne(id: number): Promise<CarDTO> {
    // MySQL query: SELECT * FROM desenvolvimentoDb.car WHERE id = <id>;
    const car = await this.carRepository.findOne({ where: { id } });
    if (!car) {
      throw new NotFoundException(`Car with ID ${id} not found`);
    }
    return car;
  }

  async create(data: CarInputDTO): Promise<CarDTO> {
    // MySQL query: INSERT INTO desenvolvimentoDb.car
    // (name, renavam, license, price, year, id_model)
    // VALUES (<data.name>, <data.renavam>, <data.license>, <data.price>, <data.year>, <data.idModel>);
    const car = this.carRepository.create(data);
    return await this.carRepository.save(car);
  }

  async update(id: number, data: CarInputDTO): Promise<CarDTO> {
    // MySQL query: UPDATE desenvolvimentoDb.car SET
    //    name = <data.name>
    //    renavam = <data.renavam>
    //    license = <data.license>
    //    price = <data.price>
    //    year = <data.year>
    //    id_model = <data.idModel>
    // WHERE id = <id>;
    await this.carRepository.update(id, data);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<CarDTO> {
    // MySQL query: DELETE FROM desenvolvimentoDb.car WHERE id = <id>;
    const car = await this.findOne(id);
    await this.carRepository.delete(id);
    return car;
  }
}
