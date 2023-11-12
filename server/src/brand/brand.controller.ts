import { Controller, Get, Post, Body } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('brands')
@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post('create')
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.create(createBrandDto);
  }

  @Get()
  findAll() {
    return this.brandService.findAll();
  }
}
