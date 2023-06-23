import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CarInputDTO {
  @ApiPropertyOptional({
    type: String,
    example: 'John Doe',
  })
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    type: Number,
    example: 123456,
  })
  @IsNumber()
  renavam?: number;

  @ApiPropertyOptional({
    type: String,
    example: 'ABC1234',
  })
  @IsString()
  license?: string;

  @ApiPropertyOptional({
    type: Number,
    example: 2000.5,
  })
  @IsNumber()
  price?: number;

  @ApiPropertyOptional({
    type: String,
    example: 'YYYY',
  })
  @IsString()
  year?: string;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNumber()
  idModel!: number;
}

export class CarDTO extends CarInputDTO {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNumber()
  id!: number;
}
