import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FirestoreModule } from './firestore/firestore.module';
import { UsersModule } from './users/users.module';
import { FountainsModule } from './fountains/fountains.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    FirestoreModule.forRoot({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        keyFilename: configService.get<string>('KEY_FILE_NAME'),
        projectId: configService.get<string>('PROJECT_ID'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    FountainsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
