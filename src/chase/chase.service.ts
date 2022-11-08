import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChaseStatus } from 'src/common/enums/chase-status.enum';
import { Cat } from 'src/entities/cat.entity';
import { Chase } from 'src/entities/chase.entity';
import { Dog } from 'src/entities/dog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChaseService {
    constructor(
        @InjectRepository(Chase)
        private readonly chaseRepository: Repository<Chase>
    ) { }

    addChase(dog: Dog, cat: Cat, status: ChaseStatus) {
        return this.chaseRepository.save({ dog, cat, status });
    }

}
