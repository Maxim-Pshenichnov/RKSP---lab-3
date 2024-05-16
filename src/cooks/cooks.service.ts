import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cook } from "src/cooks/cook.entity";
import { Meal } from "src/meals/meal.entity";
import { Review } from "src/reviews/review.entity";
import { Repository } from "typeorm";
import { CreateCookDto } from "./dto/CookDTO";

@Injectable()
export class CooksService {
    constructor(
        @InjectRepository(Cook)
        private readonly cookRepository: Repository<Cook>,
        
        @InjectRepository(Meal)
        private readonly mealRepository: Repository<Meal>,
    ) {}
    
    async create(cookDto: CreateCookDto): Promise<Cook>
    {
        const cook = this.cookRepository.create();
        cook.fullname = cookDto.fullname;
        cook.grade = cookDto.grade;

        await this.cookRepository.save(cook);
        return cook;
    }

    async findAll(): Promise<Cook[]> {
        const cooks = await this.cookRepository.find({
            relations: {
                meals: true,
            },
        })
        return cooks;
    }

    findOne(id: number): Promise<Cook> {
        return this.cookRepository.findOne({
            where: {id},
            relations: {meals: true},
        });
    }

    async update(id: number, updatedCook: Cook) {
        const cook = await this.cookRepository.findOne({where: {id}});
        cook.fullname = updatedCook.fullname;
        cook.grade = updatedCook.grade;
        cook.meals = updatedCook.meals;

        await this.cookRepository.save(cook);
        return cook;
    }

    remove(id: number) {
        this.cookRepository.delete({id});
    }
}