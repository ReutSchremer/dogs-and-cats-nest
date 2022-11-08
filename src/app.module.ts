import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';
import { ChaseModule } from './chase/chase.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ //This is for ROOT because it is a configuration 
      username: "root",
      password: "z10mz10m",
      type: "mysql",
      database: "dogs_and_cats",
      port: 3306,
      synchronize: true,
      logging: true,
      entities: ["dist/**/*.entity{.ts,.js}"]
    }),
    CatModule,
    DogModule,
    ChaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
