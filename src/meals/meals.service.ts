import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cook } from "src/cooks/cook.entity";
import { Meal } from "src/meals/meal.entity";
import { Review } from "src/reviews/review.entity";
import { Repository } from "typeorm";
import { CreateMealDto } from "./dto/MealDTO";
import { IncompleteMealDto } from "./dto/incomplete-meal.dto";

@Injectable()
export class MealsService {
    constructor(
        @InjectRepository(Cook)
        private readonly cookRepository: Repository<Cook>,
        
        @InjectRepository(Meal)
        private readonly mealRepository: Repository<Meal>,

        @InjectRepository(Review)
        private readonly reviewRepository: Repository<Review>,
    ) {}
    
    async create(mealDto: CreateMealDto): Promise<Meal>
    {
        const meal = this.mealRepository.create();
        meal.name = mealDto.name;
        meal.category = mealDto.category;
        meal.recipe = mealDto.recipe;
        meal.cooks = mealDto.cooks;

        await this.mealRepository.save(meal);
        return meal;
    }

    async findAll(): Promise<Meal[]> {
        const meals = await this.mealRepository.find({})
        return meals;
    }

    findOne(id: number): Promise<Meal> {
        return this.mealRepository.findOne({
            where: {id},
        });
    }

    async findIncomplete(): Promise<IncompleteMealDto[]> {
        const meals = await this.mealRepository.find();
        const incompleteMeals: IncompleteMealDto[] = meals.map((meal) => 
        {
            const incompleteMeal = new IncompleteMealDto();
            incompleteMeal.id = meal.id;
            incompleteMeal.name = meal.name;
            incompleteMeal.category = meal.category;
            return incompleteMeal;
        });
        return incompleteMeals;
    }

    async update(id: number, updatedMeal: Meal) {
        const meal = await this.mealRepository.findOne({where: {id}});
        meal.name = updatedMeal.name;
        meal.category = updatedMeal.category;
        meal.recipe = updatedMeal.recipe;
        meal.cooks = updatedMeal.cooks;
        meal.reviews = updatedMeal.reviews;

        await this.mealRepository.save(meal);
        return meal;
    }

    remove(id: number) {
        this.mealRepository.delete({id});
    }
}