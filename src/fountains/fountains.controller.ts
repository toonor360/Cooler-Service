import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FountainsService } from './fountains.service';
import { CreateFountainDto } from './dto/create-fountain.dto';
import { UpdateFountainDto } from './dto/update-fountain.dto';

@Controller('fountains')
export class FountainsController {
  constructor(private readonly fountainsService: FountainsService) {}

  @Post()
  create(@Body() createFountainDto: CreateFountainDto) {
    return this.fountainsService.create(createFountainDto);
  }

  @Get()
  findAll() {
    return this.fountainsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fountainsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFountainDto: UpdateFountainDto) {
    return this.fountainsService.update(+id, updateFountainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fountainsService.remove(+id);
  }
}
