import { MealsService } from "./meals.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Meal } from "src/meals/meal.entity";
import { ApiTags } from '@nestjs/swagger';

@Controller("meals")
@ApiTags("Блюда") 
export class MealsController {
    constructor(private readonly mealsService: MealsService) {}
    
    @Get()
        findAll() {
            return this.mealsService.findAll();
        }

    @Get(":id")
    findOne (@Param("id") id: string) {
        return this.mealsService.findOne(+id);
    }

    @Get('incomplete')
    findIncomplete() {
        this.mealsService.findIncomplete();
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updateMeal: Meal) {
        return this.mealsService.update(+id, updateMeal);
    }

    @Post()
    create (@Body() createMeal: Meal) {
        return this.mealsService.create(createMeal)
    }

    @Delete(":id")
    remove (@Param("id") id: string) {
        return this.mealsService.remove(+id);
    }
}
