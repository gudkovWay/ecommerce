import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpBodyDto {
  @ApiProperty({
    example: '78005553535',
  })
  phone: string;

  @ApiProperty({
    example: '1234',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'Вася',
  })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    example: 'Пупкин',
  })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    example: '01.01.2000',
  })
  @IsNotEmpty()
  birthDate: string;

  @ApiProperty({
    example: 'Москва',
  })
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    example: 'Рассия',
  })
  @IsNotEmpty()
  region: string;

  @ApiProperty({
    example: 'admin@mail.ru',
  })
  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @ApiProperty({
    example: 'USER',
  })
  role: string;
}

export class SignInBodyDto {
  @ApiProperty({
    example: '78005553535',
  })
  phone: string;

  @ApiProperty({
    example: '1234',
  })
  @IsNotEmpty()
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  'iat': number;
  @ApiProperty()
  'exp': number;
}
