import { Module } from "@nestjs/common";

// Imports
import { DogsModule } from "../dogs"

// Controllers
import { CatsController } from "./cats.controller";

// Providers
import { CatsService } from "./cats.service"


@Module({
    imports: [DogsModule],
    controllers: [CatsController],
    providers: [CatsService],
    exports: [],
})
export class CatsModule { }