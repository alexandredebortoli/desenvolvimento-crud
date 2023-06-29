import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Brand } from 'src/entities/brand.entity';
import { Repository } from 'typeorm';
import { BrandDTO, BrandInputDTO } from './dto/brand.dto';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private brandRepository: Repository<Brand>,
  ) {}

  async findAll(): Promise<BrandDTO[]> {
    // MySQL query: SELECT * FROM desenvolvimentoDb.brand;
    return await this.brandRepository.find();
  }

  async findOne(id: number): Promise<BrandDTO> {
    // MySQL query: SELECT * FROM desenvolvimentoDb.brand WHERE id = <id>;
    const brand = await this.brandRepository.findOne({ where: { id } });
    if (!brand) {
      throw new NotFoundException(`Brand with ID ${id} not found`);
    }
    return brand;
  }

  async create(data: BrandInputDTO): Promise<BrandDTO> {
    // MySQL query: INSERT INTO desenvolvimentoDb.brand (name) VALUES (<data.name>);
    const brand = this.brandRepository.create(data);
    return await this.brandRepository.save(brand);
  }

  async update(id: number, data: BrandInputDTO): Promise<BrandDTO> {
    // MySQL query: UPDATE desenvolvimentoDb.brand SET name = <data.name> WHERE id = <id>;
    await this.brandRepository.update(id, data);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<BrandDTO> {
    // MySQL query: DELETE FROM desenvolvimentoDb.brand WHERE id = <id>;
    const brand = await this.findOne(id);
    await this.brandRepository.delete(id);
    return brand;
  }
}
