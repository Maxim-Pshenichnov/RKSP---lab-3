import { Module } from '@nestjs/common';
import { MealsModule } from './meals/meals.module';
import { CooksModule } from './cooks/cooks.module';
import { DatasourceModule } from './datasource/datasource.module';
import { ReviewsModule } from './reviews/reviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [MealsModule, CooksModule, ReviewsModule, DatasourceModule,
    TypeOrmModule.forRoot({
      type:'postgres', 
      port: 5432, 
      username: 'education', 
      password: 'password', 
      host: 'localhost', 
      synchronize: false, 
      logging: 'all', 
      entities: ['dist/**/*.entity{.ts,.js}'],})
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
