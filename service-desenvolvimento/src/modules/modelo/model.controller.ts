import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ModelService } from './model.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ModelDTO, ModelInputDTO } from './dto/model.dto';

@Controller('model')
@ApiTags('model')
export class ModelController {
  private logger = new Logger(ModelController.name);
  constructor(private readonly modelService: ModelService) {}

  @Get()
  @ApiOperation({ summary: 'Get all models' })
  async findAll(): Promise<ModelDTO[]> {
    this.logger.log(`[HTTP] GET /model - findAll()`);
    try {
      return await this.modelService.findAll();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get model by id' })
  async findOne(@Param('id') id: number): Promise<ModelDTO> {
    this.logger.log(`[HTTP] GET /model/${id} - findOne(${id})`);
    try {
      return await this.modelService.findOne(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Post()
  @ApiOperation({ summary: 'Create model' })
  async create(@Body() data: ModelInputDTO): Promise<ModelDTO> {
    this.logger.log(`[HTTP] POST /model - create(${JSON.stringify(data)})`);
    try {
      return await this.modelService.create(data);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update model' })
  async update(
    @Param('id') id: number,
    @Body() data: ModelInputDTO,
  ): Promise<ModelDTO> {
    this.logger.log(
      `[HTTP] PATCH /model/${id} - update(${id}, ${JSON.stringify(data)})`,
    );
    try {
      return await this.modelService.update(id, data);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete model' })
  async delete(@Param('id') id: number): Promise<ModelDTO> {
    this.logger.log(`[HTTP] DELETE /model/${id} - delete(${id})`);
    try {
      return await this.modelService.delete(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
