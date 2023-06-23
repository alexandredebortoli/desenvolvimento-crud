import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ModelInputDTO {
  @ApiPropertyOptional({
    type: String,
    example: 'John Doe',
  })
  @IsString()
  name?: string;

  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNumber()
  idBrand!: number;
}

export class ModelDTO extends ModelInputDTO {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNumber()
  id!: number;
}
