import { IsString } from 'class-validator';
import { UserDocument } from './users.document';

export class User extends UserDocument {
  @IsString()
  id: string;
}
