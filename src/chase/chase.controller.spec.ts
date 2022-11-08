import { Test, TestingModule } from '@nestjs/testing';
import { ChaseController } from './chase.controller';

describe('ChaseController', () => {
  let controller: ChaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChaseController],
    }).compile();

    controller = module.get<ChaseController>(ChaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
