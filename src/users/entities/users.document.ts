import { IsEmail, IsString } from 'class-validator';

export class UserDocument {
  static collectionName = 'users';

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
