import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class BrandInputDTO {
  @ApiPropertyOptional({
    type: String,
    example: 'John Doe',
  })
  @IsString()
  name?: string;
}

export class BrandDTO extends BrandInputDTO {
  @ApiProperty({
    type: Number,
    example: 1,
  })
  @IsNumber()
  id!: number;
}
