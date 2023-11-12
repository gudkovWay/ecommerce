import { Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class BrandService {
  constructor(private db: DbService) {}

  async create(createBrandDto: CreateBrandDto) {
    return this.db.brand.create({
      data: { name: createBrandDto.name },
    });
  }

  findAll() {
    return this.db.brand.findMany();
  }
}
