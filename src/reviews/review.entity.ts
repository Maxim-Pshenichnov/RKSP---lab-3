import { Meal } from 'src/meals/meal.entity';

import {
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('reviews')
export class Review {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    rating: number;

    @Column()
    author: string

    @Column()
    text: string
    
    @ManyToOne((type) => Meal, meal => meal.reviews)
    meal: Meal;
}
