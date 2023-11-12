import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { DbService } from 'src/db/db.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ReviewsService {
  constructor(private readonly db: DbService) {}

  async create(createReviewDto: CreateReviewDto) {
    return this.db.review.create({ data: createReviewDto });
  }

  async findAll() {
    return this.db.review.findMany({});
  }

  async findOne(id: number) {
    return this.db.review.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateReviewDto: Prisma.ReviewUpdateInput) {
    return this.db.review.update({
      where: {
        id,
      },
      data: updateReviewDto,
    });
  }

  async remove(id: number) {
    return this.db.review.delete({
      where: { id },
    });
  }
}
