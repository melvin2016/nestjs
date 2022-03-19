import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

// Modules
import { CatsModule, CatsController } from "./modules/cat";
import { DogsModule, DogsController } from "./modules/dogs";

// Middlewares
import { LoggerMiddleware, ExplicitBlockerMiddleware } from "./middlewares";

// Exception Filters
import { HttpExceptionFilter } from "./exceptions/filters";



@Module({
  imports: [CatsModule, DogsModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ],
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
