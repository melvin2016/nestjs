import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';

// Modules
import { CatsModule } from "./modules/cat";
import { DogsModule } from "./modules/dogs";

// Middlewares
import { LoggerMiddleware, ExplicitBlockerMiddleware } from "./middlewares";
import { CatsController } from "./modules/cat";
import { DogsController } from './modules/dogs';


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
