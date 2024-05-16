import { Injectable } from "@nestjs/common";
import { Meal } from "src/meals/meal.entity";
import { Cook } from "src/cooks/cook.entity";
import { Review } from "src/reviews/review.entity";

@Injectable()
export class DatasourceService {
    private meals: Meal[] = [];

    getMeals(): Meal[] {
        return this.meals;
    }

    private cooks: Cook[] = [];

    getCooks(): Cook[] {
        return this.cooks;
    }

    private reviews: Review[] = [];

    getReviews(): Review[] {
        return this.reviews;
    }
}