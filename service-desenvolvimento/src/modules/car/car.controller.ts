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
import { CarService } from './car.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CarDTO, CarInputDTO } from './dto/car.dto';

@Controller('car')
@ApiTags('car')
export class CarController {
  private logger = new Logger(CarController.name);
  constructor(private readonly carService: CarService) {}

  @Get()
  @ApiOperation({ summary: 'Get all cars' })
  async findAll(): Promise<CarDTO[]> {
    this.logger.log(`[HTTP] GET /car - findAll()`);
    try {
      return await this.carService.findAll();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Get car by id' })
  async findOne(@Param('id') id: number): Promise<CarDTO> {
    this.logger.log(`[HTTP] GET /car/${id} - findOne(${id})`);
    try {
      return await this.carService.findOne(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Post()
  @ApiOperation({ summary: 'Create car' })
  async create(@Body() data: CarInputDTO): Promise<CarDTO> {
    this.logger.log(`[HTTP] POST /car - create(${JSON.stringify(data)})`);
    try {
      return await this.carService.create(data);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Update car' })
  async update(
    @Param('id') id: number,
    @Body() data: CarInputDTO,
  ): Promise<CarDTO> {
    this.logger.log(
      `[HTTP] PATCH /car/${id} - update(${id}, ${JSON.stringify(data)})`,
    );
    try {
      return await this.carService.update(id, data);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Delete car' })
  async delete(@Param('id') id: number): Promise<CarDTO> {
    this.logger.log(`[HTTP] DELETE /car/${id} - delete(${id})`);
    try {
      return await this.carService.delete(id);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
