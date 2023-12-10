import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Prisma } from '@prisma/client';
import { CreateProductsDto } from './dto/create-products.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductsDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(
    @Param('limit') limit: number,
    @Param('offset') offset: number,
    @Res() res: any,
  ) {
    return res.json(this.productsService.findAll(limit, offset));
  }

  @Get(':id')
  findOneWithRating(@Param('id') id: string) {
    return this.productsService.findOneWithRating(+id);
  }

  @Get('full/:id')
  findOneWithReview(@Param('id') id: string) {
    return this.productsService.findOneWithReview(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: Prisma.ProductUpdateInput,
  ) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
