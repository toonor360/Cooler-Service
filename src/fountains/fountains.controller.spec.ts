import { Test, TestingModule } from '@nestjs/testing';
import { FountainsController } from './fountains.controller';
import { FountainsService } from './fountains.service';

describe('FountainsController', () => {
  let controller: FountainsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FountainsController],
      providers: [FountainsService],
    }).compile();

    controller = module.get<FountainsController>(FountainsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
