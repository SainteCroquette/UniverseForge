import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CounterModule } from './counter/counter.module';
import { Counter } from 'src/counter/entities/counter.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/sql',
      synchronize: true,
      entities: [Counter],
    }),
    CounterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
