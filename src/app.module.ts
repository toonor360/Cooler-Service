import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FountainsModule } from './fountains/fountains.module';

@Module({
  imports: [FountainsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
