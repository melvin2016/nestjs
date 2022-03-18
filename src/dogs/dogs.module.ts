import { Module } from "@nestjs/common";

// Controllers
import { DogsController } from "./dogs.controller";

// Providers
import { DogsService } from "./dogs.service"

@Module({
    controllers: [DogsController],
    providers: [DogsService],
    exports: [DogsService]
})
export class DogsModule { }