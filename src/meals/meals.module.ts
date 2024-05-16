import { Module } from '@nestjs/common';
import { MealsService } from './meals.service';
import { MealsController } from './meals.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cook } from 'src/cooks/cook.entity';
import { Meal } from 'src/meals/meal.entity';
import { Review } from 'src/reviews/review.entity';

@Module ({
    controllers: [MealsController],
    providers: [MealsService],
    imports: [
        DatasourceModule,
        TypeOrmModule.forFeature([Cook, Meal, Review])
    ],
})
export class MealsModule {}