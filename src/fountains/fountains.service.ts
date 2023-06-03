import { Injectable } from '@nestjs/common';
import { CreateFountainDto } from './dto/create-fountain.dto';
import { UpdateFountainDto } from './dto/update-fountain.dto';

@Injectable()
export class FountainsService {
  create(createFountainDto: CreateFountainDto) {
    return 'This action adds a new fountain';
  }

  findAll() {
    return `This action returns all fountains`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fountain`;
  }

  update(id: number, updateFountainDto: UpdateFountainDto) {
    return `This action updates a #${id} fountain`;
  }

  remove(id: number) {
    return `This action removes a #${id} fountain`;
  }
}
