import { Module } from '@nestjs/common';
import { CooksService } from './cooks.service';
import { CooksController } from './cooks.controller';
import { DatasourceModule } from 'src/datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cook } from './cook.entity';
import { Meal } from 'src/meals/meal.entity';

@Module ({
    controllers: [CooksController],
    providers: [CooksService],
    imports: [
        DatasourceModule,
        TypeOrmModule.forFeature([Cook, Meal])
    ],
})
export class CooksModule {}