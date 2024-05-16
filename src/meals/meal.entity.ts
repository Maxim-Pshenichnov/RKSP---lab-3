import { Cook } from 'src/cooks/cook.entity';
import { Review } from 'src/reviews/review.entity';

import {
    Column,
    Entity,
    JoinTable,
    OneToMany,
    ManyToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('meals')
export class Meal {
    @PrimaryGeneratedColumn()
    id : number;

    @Column({})
    name: string;

    @Column()
    category: string

    @Column()
    recipe: string

    @ManyToMany((type) => Cook, (cook) => cook.meals)
    @JoinTable({
        name: 'cook_meal',
        joinColumn: {name: 'meal_id'},
        inverseJoinColumn: {name: 'cook_id'}
    })

    cooks: Cook[];

    @OneToMany((type) => Review, review => review.meal)
    reviews: Review[];
}
