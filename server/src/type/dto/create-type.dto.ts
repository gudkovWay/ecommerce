import { ApiProperty } from '@nestjs/swagger';

export class CreateTypeDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
