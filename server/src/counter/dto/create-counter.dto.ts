import {IsInt, IsNotEmpty, IsNumber, IsNumberString} from 'class-validator';

export class CreateCounterDto {
  @IsNotEmpty({ message: 'Missing count' })
  @IsNumber()
  count: number;
}
