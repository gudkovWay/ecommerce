import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DbService } from 'src/db/db.service';
import { CreateProductsDto } from './dto/create-products.dto';

@Injectable()
export class ProductsService {
  constructor(private db: DbService) {}

  async create(createProductDto: CreateProductsDto) {
    return this.db.product.create({ data: createProductDto });
  }

  async findAll(limit: number, offset: number) {
    return this.db.product.findMany({
      take: limit,
      skip: offset,
      include: {
        reviews: {
          select: {
            rating: true,
          },
        },
      },
    });
  }
  async findOneWithRating(id: number) {
    return this.db.product.findUnique({
      where: {
        id,
      },
      include: {
        reviews: {
          select: {
            rating: true,
          },
        },
      },
    });
  }

  async findOneWithReview(id: number) {
    return this.db.product.findUnique({
      where: { id },
      include: {
        description: true,
        tags: true,
        reviews: true,
      },
    });
  }

  async update(id: number, updateProductDto: Prisma.ProductUpdateInput) {
    return this.db.product.update({
      where: { id: id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    return this.db.product.delete({ where: { id: id } });
  }
}
