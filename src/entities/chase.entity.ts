import { ChaseStatus } from "src/common/enums/chase-status.enum";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cat } from "./cat.entity";
import { Dog } from "./dog.entity";

@Entity()
export class Chase {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Dog, d => d.chases)
    dog: Dog;

    @ManyToOne(() => Cat, c => c.chases)
    cat: Cat;

    @Column({ type: 'enum', enum: ChaseStatus })
    status: ChaseStatus

}