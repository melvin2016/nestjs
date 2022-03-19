import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

// Modules
import { CatsModule, CatsController } from "./modules/cat";
import { DogsModule, DogsController } from "./modules/dogs";

// Middlewares
import { LoggerMiddleware, ExplicitBlockerMiddleware } from "./middlewares";


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
