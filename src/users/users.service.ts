import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument } from './entities/users.document';
import { CollectionReference } from '@google-cloud/firestore';
import { map } from 'ramda';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserDocument.collectionName)
    private usersCollection: CollectionReference<UserDocument>,
  ) {}

  async create({ email, name }: UserDocument) {
    const docRef = await this.usersCollection.add({ email, name });

    return (await docRef.get()).data();
  }

  async findAll() {
    const snapshot = await this.usersCollection.get();
    return map((doc) => doc.data(), snapshot.docs);
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
