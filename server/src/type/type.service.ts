import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class TypeService {
  constructor(private db: DbService) {}

  async create(createTypeDto: CreateTypeDto) {
    return this.db.type.create({
      data: { name: createTypeDto.name },
    });
  }

  findAll() {
    return this.db.type.findMany();
  }
}
