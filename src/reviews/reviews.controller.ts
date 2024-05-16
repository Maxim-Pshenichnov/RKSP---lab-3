import { ReviewsService } from "./reviews.service";
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Review } from "src/reviews/review.entity";
import { ApiTags } from '@nestjs/swagger';

@Controller("reviews")
@ApiTags("Отзывы") 
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) {}
    
    @Get()
        findAll() {
            return this.reviewsService.findAll();
        }

    @Get(":id")
    findOne (@Param("id") id: string) {
        return this.reviewsService.findOne(+id);
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updateReview: Review) {
        return this.reviewsService.update(+id, updateReview);
    }

    @Post()
    create (@Body() createReview: Review) {
        return this.reviewsService.create(createReview)
    }

    @Delete(":id")
    remove (@Param("id") id: string) {
        return this.reviewsService.remove(+id);
    }
}
