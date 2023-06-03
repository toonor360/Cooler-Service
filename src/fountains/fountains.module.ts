import { Module } from '@nestjs/common';
import { FountainsService } from './fountains.service';
import { FountainsController } from './fountains.controller';

@Module({
  controllers: [FountainsController],
  providers: [FountainsService]
})
export class FountainsModule {}
