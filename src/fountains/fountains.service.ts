import { Inject, Injectable } from '@nestjs/common';
import { CreateFountainDto } from './dto/create-fountain.dto';
import { UpdateFountainDto } from './dto/update-fountain.dto';
import { FountainDocument } from './entities/fountain.document';
import { CollectionReference } from '@google-cloud/firestore';
import { map } from 'ramda';


@Injectable()
export class FountainsService {
  constructor(
    @Inject(FountainDocument.collectionName)
    private fountainCollection: CollectionReference<FountainDocument>,
  ) {}

  async create({ added_by, name, rating, location, description }: FountainDocument) {
    const docRef = await this.fountainCollection.add({ added_by, name, rating, location, description });

    return (await docRef.get()).data();
  }



  async findAll() {
    const snapshot = await this.fountainCollection.get();
    return map((doc) => doc.data(), snapshot.docs);
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
