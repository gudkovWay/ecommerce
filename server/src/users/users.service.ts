import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class UsersService {
  constructor(
    private db: DbService,
    private accountService: AccountService,
  ) {}

  findByPhone(phone: string) {
    return this.db.user.findFirst({ where: { phone } });
  }

  async create(
    phone: string,
    hash: string,
    salt: string,
    firstName: string,
    lastName: string,
    city: string,
    region: string,
    role: string,
    birthDate: string,
  ) {
    const user = await this.db.user.create({
      data: {
        phone,
        hash,
        salt,
        firstName,
        lastName,
        city,
        region,
        role,
        birthDate,
      },
    });

    await this.accountService.create(user.id);

    return user;
  }
}
