import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Cook } from "src/cooks/cook.entity";
import { Meal } from "src/meals/meal.entity";
import { Review } from "src/reviews/review.entity";
import { Repository } from "typeorm";

@Injectable()
export class ReviewsService {
    constructor(
        @InjectRepository(Meal)
        private readonly mealRepository: Repository<Meal>,

        @InjectRepository(Review)
        private readonly reviewRepository: Repository<Review>,
    ) {}
    
    async create(createReview: Review): Promise<Review>
    {
        const review = this.reviewRepository.create();
        review.author = createReview.author;
        review.meal = createReview.meal;
        review.rating = createReview.rating;
        review.text = createReview.text;

        await this.reviewRepository.save(review);
        return review;
    }

    async findAll(): Promise<Review[]> {
        const reviews = await this.reviewRepository.find({})
        return reviews;
    }

    findOne(id: number): Promise<Review> {
        return this.reviewRepository.findOne({
            where: {id},
        });
    }

    async update(id: number, updatedReview: Review) {
        const review = await this.reviewRepository.findOne({where: {id}});
        review.author = updatedReview.author;
        review.meal = updatedReview.meal;
        review.rating = updatedReview.rating;
        review.text = updatedReview.text;

        await this.reviewRepository.save(review);
        return review;
    }

    remove(id: number) {
        this.reviewRepository.delete({id});
    }
}