import { PartialType } from '@nestjs/mapped-types';
import { CreateFountainDto } from './create-fountain.dto';

export class UpdateFountainDto extends PartialType(CreateFountainDto) {}
