import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class OrderService {
  constructor(private db: DbService) {}

  async create(createOrderDto: CreateOrderDto) {
    return this.db.order.create({
      data: createOrderDto,
    });
  }

  async findAll() {
    return this.db.order.findMany({});
  }

  async findOne(id: number) {
    return this.db.order.findUnique({
      where: {
        id: id,
      },
      include: {
        products: true,
        user: true,
      },
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.db.order.update({
      where: {
        id: id,
      },
      data: updateOrderDto,
    });
  }
}
