import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('errors')
export class ErrorsController {
  @Get('/400')
  badRequest(@Res() response: Response) {
    response.status(400).send('Bad Request');
  }
}
