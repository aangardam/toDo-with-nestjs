import { Injectable } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { UpdateToDoDto } from './dto/update-to-do.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToDo } from './entities/to-do.entity';

@Injectable()
export class ToDoService {
  constructor(
    @InjectRepository(ToDo) private todoRepository: Repository<ToDo>,
  ) {}

  async getTotalRows(): Promise<number> {
    return this.todoRepository.count();
  }

  create(createToDoDto: CreateToDoDto) {
    return this.todoRepository.insert(createToDoDto);
  }

  async findAll(): Promise<ToDo[]> {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateToDoDto: UpdateToDoDto) {
    return await this.todoRepository.update(id, updateToDoDto);
  }

  async updateStatus(id: number, updateToDoDto: UpdateToDoDto) {
    return await this.todoRepository.update(id, updateToDoDto);
  }

  remove(id: number) {
    // return `This action removes a #${id} toDo`;
    return this.todoRepository.delete(id);
  }
}
