import { Controller, Get, Post, Body } from "@nestjs/common";

// DTO
import { DogDto } from "./dto"

// Service
import { DogsService } from "./dogs.service"

@Controller('/dogs')
export class DogsController {
    constructor(private dogsService: DogsService) { }

    @Get()
    getAllDogs() {
        return this.dogsService.getAllDogs();
    }

    @Post()
    createDog(@Body() body: DogDto) {
        return this.dogsService.createDog(body);
    }
}