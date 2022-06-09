import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateBudgetDto } from './dto/create-budget.dto';
import { UpdateBudgetDto } from './dto/update-budget.dto';
import { Budget } from './entities/budget.entity';

@Injectable()
export class BudgetService {
  constructor(@Inject('BUDGET_REPOSITORY') private budgetRepository: Repository<Budget>) {}

  create(createBudgetDto: CreateBudgetDto) {
    return 'This action adds a new budget';
  }

  async findAll() {
    return `This action returns all budget`;
  }

  async findOne(id: number) {
    return await this.budgetRepository.find({ where: { id } });
  }

  async update(id: number, updateBudgetDto: UpdateBudgetDto) {
    return `This action updates a #${id} budget`;
  }

  async remove(id: number) {
    return `This action removes a #${id} budget`;
  }
}
