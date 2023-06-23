import { Module } from '@nestjs/common';
import { BrandModule } from './modules/brand/brand.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelModule } from './modules/modelo/model.module';
import { CarModule } from './modules/car/car.module';

@Module({
  imports: [
    BrandModule,
    ModelModule,
    CarModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '0.0.0.0',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'desenvolvimentoDb',
      synchronize: false,
      autoLoadEntities: true,
      logging: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
