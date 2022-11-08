import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CatService } from 'src/cat/cat.service';
import { ChaseService } from 'src/chase/chase.service';
import { ChaseStatus } from 'src/common/enums/chase-status.enum';
import { Dog } from 'src/entities/dog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DogService {

    constructor(
        @InjectRepository(Dog)
        private readonly dogRepository: Repository<Dog>,
        private readonly catService: CatService,
        private readonly chaseService: ChaseService
    ) {
    }

    async chaseCat(dogId: number): Promise<ChaseStatus> {
        let dog = await this.dogRepository.findOne({ where: { id: dogId } });
        let cat = await this.catService.getRandomCat();
        console.log(`I'm starting to chase ${cat.name}!`);
        let success = Math.random() > 0.5;
        if (success) {
            await this.catService.decreseLifeById(cat.id);
            console.log('We got him!!!');
        }
        else console.log('This time he got away...');
        await this.chaseService.addChase(dog, cat, success ? ChaseStatus.SUCCESS : ChaseStatus.FAIL);
        return success ? ChaseStatus.SUCCESS : ChaseStatus.FAIL;
    }

    async getDogAndChases(name: string) {
        return this.dogRepository.findOne({ where: { name }, relations: { chases: true } });
    }

    async getDogSuccChases(name: string) {
        return this.dogRepository.findOne({ where: { chases: { status: ChaseStatus.SUCCESS } }, relations: ['chases'] });
    }

}
