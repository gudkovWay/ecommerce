import { ApiProperty } from '@nestjs/swagger';

export class CreateBrandDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
