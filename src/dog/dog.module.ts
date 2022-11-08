import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatModule } from 'src/cat/cat.module';
import { ChaseModule } from 'src/chase/chase.module';
import { Dog } from 'src/entities/dog.entity';
import { DogController } from './dog.controller';
import { DogService } from './dog.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dog]),
    CatModule,
    ChaseModule
  ],
  controllers: [DogController],
  providers: [DogService]
})
export class DogModule { }
