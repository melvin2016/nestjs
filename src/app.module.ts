import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

// Modules
import { CatsModule } from "./cat";
import { DogsModule } from "./dogs";

// Middlewares
import { LoggerMiddleware, ExplicitBlockerMiddleware } from "./middlewares"
import { CatsController } from './cat/cats.controller';
import { DogsController } from './dogs/dogs.controller';


@Module({
  imports: [CatsModule, DogsModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware).forRoutes(CatsController, DogsController)
      .apply(ExplicitBlockerMiddleware).forRoutes(
        {
          path: "*porn*",
          method: RequestMethod.ALL
        },
      )
  }
}
