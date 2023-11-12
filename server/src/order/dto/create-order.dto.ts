import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  product: any;

  @ApiProperty()
  userId: number;
}
