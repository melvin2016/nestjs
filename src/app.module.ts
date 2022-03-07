import { Module } from '@nestjs/common';


// Services
import { CatsService } from './services';

// Controllers
import { CatsController } from "./controllers"



@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService],
})
export class AppModule { }
