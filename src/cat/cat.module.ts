import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from 'src/entities/cat.entity';
import { CatController } from './cat.controller';
import { CatService } from './cat.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cat])],
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService]
})
export class CatModule { }
