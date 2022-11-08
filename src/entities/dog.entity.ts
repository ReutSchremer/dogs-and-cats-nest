import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Chase } from "./chase.entity";

@Entity()
export class Dog {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 50 })
    name: string;

    @OneToMany(() => Chase, c => c.dog)
    chases: Chase[]
}