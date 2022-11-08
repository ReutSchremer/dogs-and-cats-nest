import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from 'src/entities/cat.entity';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class CatService {
    constructor(
        @InjectRepository(Cat)
        private readonly catRepository: Repository<Cat>) {
    }


    findLivingCats(): Promise<Cat[]> {
        return this.catRepository.find({ where: { souls: MoreThan(0) } });
    }

    decreseLifeById(id: number): Promise<Cat> {
        this.catRepository.decrement({ id, souls: MoreThan(0) }, 'souls', 1);
        return this.catRepository.findOne({ where: { id } });
    }

    getRandomCat(): Promise<Cat> {
        return this.catRepository.createQueryBuilder('cat')
            .select()
            .where('cat.souls > 0')
            .orderBy('RAND()')
            .getOne();
    }

    createNewCat(name: string) {
        return this.catRepository.save({ name, souls: 9 });
    }
}
