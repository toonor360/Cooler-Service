import { Test, TestingModule } from '@nestjs/testing';
import { FountainsService } from './fountains.service';

describe('FountainsService', () => {
  let service: FountainsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FountainsService],
    }).compile();

    service = module.get<FountainsService>(FountainsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
