import { Meal } from "src/meals/meal.entity";

import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('cooks')
export class Cook {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({})
    fullname: string;

    @Column()
    grade: string
    
    @ManyToMany((type) => Meal, (meal) => meal.cooks)
    @JoinTable({
        name: 'cook_meal',
        joinColumn: {name: 'cook_id'},
        inverseJoinColumn: {name: 'meal_id'}
    })

    meals: Meal[];
}

