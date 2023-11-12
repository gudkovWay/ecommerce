import { ApiProperty } from '@nestjs/swagger';
import { $Enums } from '@prisma/client';

export class CreateProductsDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  createdAt?: Date;

  @ApiProperty()
  updatedAt?: Date;

  @ApiProperty()
  price: number;

  @ApiProperty()
  sale?: boolean;

  @ApiProperty({
    enum: $Enums.Availibility,
  })
  availibility: $Enums.Availibility;

  @ApiProperty()
  reviews?: any;

  @ApiProperty()
  tags?: any;

  @ApiProperty()
  description?: any;

  @ApiProperty()
  type: any;

  @ApiProperty()
  brand: any;
}
