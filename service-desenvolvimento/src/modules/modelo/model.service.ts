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
    return await this.modelRepository.find();
  }

  async findOne(id: number): Promise<ModelDTO> {
    const model = await this.modelRepository.findOne({ where: { id } });
    if (!model) {
      throw new NotFoundException(`Model with ID ${id} not found`);
    }
    return model;
  }

  async create(data: ModelInputDTO): Promise<ModelDTO> {
    const model = this.modelRepository.create(data);
    return await this.modelRepository.save(model);
  }

  async update(id: number, data: ModelInputDTO): Promise<ModelDTO> {
    await this.modelRepository.update(id, data);
    return await this.findOne(id);
  }

  async delete(id: number): Promise<ModelDTO> {
    const model = await this.findOne(id);
    await this.modelRepository.delete(id);
    return model;
  }
}
