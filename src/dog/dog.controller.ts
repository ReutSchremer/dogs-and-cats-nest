import { Body, Controller, Post } from '@nestjs/common';
import { DogService } from './dog.service';

@Controller('dog')
export class DogController {
    constructor(
        private readonly dogService: DogService
    ) { }

    @Post('/chase')
    chaseCat(@Body('dogID') dogId: number) {
        return this.dogService.chaseCat(dogId);
    }

}
