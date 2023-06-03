import { PartialType } from '@nestjs/mapped-types';
import { UserDocument } from '../entities/users.document';

export class UpdateUserDto extends PartialType(UserDocument) {}
