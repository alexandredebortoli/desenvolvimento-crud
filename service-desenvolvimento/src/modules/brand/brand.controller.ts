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
import { BrandService } from './brand.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BrandDTO, BrandInputDTO } from './dto/brand.dto';

@Controller('brand')
@ApiTags('brand')
export class BrandController {
  private logger = new Logger(BrandController.name);
  constructor(private readonly brandService: BrandService) {}

  @Get()
  @ApiOperation({ summary: 'Get all brands' })
  async findAll(): Promise<BrandDTO[]> {
    this.logger.log(`[HTTP] GET /brand - findAll()`);
    try {
      return await this.brandService.findAll();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get brand by id' })
  async findOne(@Param('id') id: number): Promise<BrandDTO> {
    this.logger.log(`[HTTP] GET /brand/${id} - findOne(${id})`);
    try {
      return await this.brandService.findOne(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Post()
  @ApiOperation({ summary: 'Create brand' })
  async create(@Body() data: BrandInputDTO): Promise<BrandDTO> {
    this.logger.log(`[HTTP] POST /brand - create(${JSON.stringify(data)})`);
    try {
      return await this.brandService.create(data);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update brand' })
  async update(
    @Param('id') id: number,
    @Body() data: BrandInputDTO,
  ): Promise<BrandDTO> {
    this.logger.log(
      `[HTTP] PATCH /brand/${id} - update(${id}, ${JSON.stringify(data)})`,
    );
    try {
      return await this.brandService.update(id, data);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete brand' })
  async delete(@Param('id') id: number): Promise<BrandDTO> {
    this.logger.log(`[HTTP] DELETE /brand/${id} - delete(${id})`);
    try {
      return await this.brandService.delete(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
