import { Test, TestingModule } from '@nestjs/testing';
import { ChaseService } from './chase.service';

describe('ChaseService', () => {
  let service: ChaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChaseService],
    }).compile();

    service = module.get<ChaseService>(ChaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
