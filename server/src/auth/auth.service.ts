import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from './password.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async signUp(
    phone: string,
    password: string,
    firstName: string,
    lastName: string,
    city: string,
    region: string,
    role: string,
    birthDate: string,
  ) {
    const user = await this.usersService.findByPhone(phone);

    if (user) {
      throw new BadRequestException({ type: 'email-exists' });
    }

    const salt = this.passwordService.getSalt();
    const hash = this.passwordService.getHash(password, salt);

    const newUser = await this.usersService.create(
      phone,
      hash,
      salt,
      firstName,
      lastName,
      city,
      region,
      role,
      birthDate,
    );

    const accessToken = await this.jwtService.signAsync({
      id: newUser.id,
      phone: newUser.phone,
    });

    return { accessToken };
  }

  async signIn(phone: string, password: string) {
    const user = await this.usersService.findByPhone(phone);

    if (!user) {
      throw new UnauthorizedException();
    }

    const hash = this.passwordService.getHash(password, user.salt);

    if (hash !== user.hash) {
      throw new UnauthorizedException();
    }

    const accessToken = await this.jwtService.signAsync({
      id: user.id,
      phone: user.phone,
    });

    return { accessToken };
  }
}
