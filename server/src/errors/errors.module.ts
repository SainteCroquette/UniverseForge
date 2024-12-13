import { Module } from '@nestjs/common';
import { ErrorsController } from './errors.controller';

@Module({
  controllers: [ErrorsController],
  providers: [],
})
export class ErrorsModule {}
