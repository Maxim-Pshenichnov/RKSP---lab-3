import { Module } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ReviewsController } from './reviews.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Meal } from 'src/meals/meal.entity';
import { Review } from 'src/reviews/review.entity';

@Module ({
    controllers: [ReviewsController],
    providers: [ReviewsService],
    imports: [
        DatasourceModule,
        TypeOrmModule.forFeature([Meal, Review])
    ],
})
export class ReviewsModule {}