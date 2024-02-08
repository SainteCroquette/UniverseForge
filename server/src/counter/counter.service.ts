import { Injectable } from '@nestjs/common';
import { CreateCounterDto } from './dto/create-counter.dto';
import { UpdateCounterDto } from './dto/update-counter.dto';
import { Counter } from 'src/counter/entities/counter.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CounterService {
  constructor(
    @InjectRepository(Counter)
    private readonly counterRepository: Repository<Counter>,
  ) {}

  async create(createCounterDto: CreateCounterDto) {
    console.log('createCounterDto', createCounterDto);
    const counter = this.counterRepository.create(createCounterDto);
    return await this.counterRepository.save(counter);
  }

  findAll() {
    return `This action returns all counter`;
  }

  async findOne(id: number) {
    const counter = await this.counterRepository.findOne({ where: { id: id } });
    if (!counter) {
      throw new Error(`Counter with id ${id} not found`);
    }
    return counter;
  }

  async update(id: number, updateCounterDto: UpdateCounterDto) {
    await this.counterRepository.update({ id: id }, updateCounterDto);
    return await this.counterRepository.findOne({ where: { id: id } });
  }

  remove(id: number) {
    return `This action removes a #${id} counter`;
  }
}
