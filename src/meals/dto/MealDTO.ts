import { Cook } from "src/cooks/cook.entity";

export class CreateMealDto {
    name: string;
    category: string;
    recipe: string;
    cooks: Cook[]
}