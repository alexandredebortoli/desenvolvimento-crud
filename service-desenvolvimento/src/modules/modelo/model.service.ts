import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'src/entities/model.entity';
import { Repository } from 'typeorm';
import { ModelDTO, ModelInputDTO } from './dto/model.dto';

@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(Model)
    private modelRepository: Repository<Model>,
  ) {}

  async findAll(): Promise<ModelDTO[]> {
    // MySQL query: SELECT * FROM desenvolvimentoDb.model;
    return await this.modelRepository.find();
  }

  async findOne(id: number): Promise<ModelDTO> {
    // MySQL query: SELECT * FROM desenvolvimentoDb.model WHERE id = <id>;
    const model = await this.modelRepository.findOne({ where: { id } });
    if (!model) {
      throw new NotFoundException(`Model with ID ${id} not found`);
    }
    return model;
  }

  async create(data: ModelInputDTO): Promise<ModelDTO> {
    // MySQL query: INSERT INTO desenvolvimentoDb.model (name, id_brand) VALUES (<data.name>, <data.idBrand>);
    const model = this.modelRepository.create(data);
    return await this.modelRepository.save(model);
  }

  async update(id: number, data: ModelInputDTO): Promise<ModelDTO> {
    // MySQL query: UPDATE desenvolvimentoDb.model SET name = <data.name>, id_brand = <data.IdBrand> WHERE id = <id>;
    await this.modelRepository.update(id, data);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<ModelDTO> {
    // MySQL query: DELETE FROM desenvolvimentoDb.model WHERE id = <id>;
    const model = await this.findOne(id);
    await this.modelRepository.delete(id);
    return model;
  }
}
