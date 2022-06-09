import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { budgetProvider } from './budget.provider';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [BudgetController],
  providers: [budgetProvider, BudgetService],
  imports: [DatabaseModule],
})
export class BudgetModule {}
