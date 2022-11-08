import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Chase } from "./chase.entity";

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: '50' })
    name: string;

    @Column()
    souls: number

    @OneToMany(() => Chase, c => c.cat)
    chases: Chase[]
}