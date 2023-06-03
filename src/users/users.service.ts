import { Inject, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument } from './entities/users.document';
import { CollectionReference } from '@google-cloud/firestore';
import { map } from 'ramda';
import { User } from './entities/user.entity';
import { getDataWithId } from 'src/functions';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserDocument.collectionName)
    private usersCollection: CollectionReference<UserDocument>,
  ) {}

  async create(user: UserDocument): Promise<User> {
    const doc = await this.usersCollection.add(user);

    return getDataWithId(doc);
  }

  async findAll(): Promise<User[]> {
    const { docs } = await this.usersCollection.get();

    return map(
      (doc) => ({
        ...doc.data(),
        id: doc.id,
      }),
      docs,
    );
  }

  async findOne(id: string): Promise<User> {
    return getDataWithId(this.usersCollection.doc(id));
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const doc = this.usersCollection.doc(id);
    await doc.update(updateUserDto);

    return getDataWithId(doc);
  }

  async remove(id: string) {
    const doc = this.usersCollection.doc(id);
    await doc.delete();

    return id;
  }
}
