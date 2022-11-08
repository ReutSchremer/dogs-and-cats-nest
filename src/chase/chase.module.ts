import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chase } from 'src/entities/chase.entity';
import { ChaseController } from './chase.controller';
import { ChaseService } from './chase.service';

@Module({
  imports: [TypeOrmModule.forFeature([Chase])],
  controllers: [ChaseController],
  providers: [ChaseService],
  exports: [ChaseService]
})
export class ChaseModule { }
