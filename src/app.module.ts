import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BudgetModule } from './budget/budget.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), 
    BudgetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
