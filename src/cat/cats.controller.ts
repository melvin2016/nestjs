import { Controller, Get, Post, HttpCode, Header, Redirect, Param, Body } from "@nestjs/common";

// DTO
import { CreateCatDTO } from "./dto"

// Services
import { DogsService } from "../dogs/dogs.service"
import { CatsService } from "./cats.service"

// Interfaces
import { Cat } from "./interfaces";
import { Dog } from "../dogs/interfaces";

// Types
interface CatsAndDogs {
    cats: Cat[];
    dogs: Dog[];
}


@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService, private dogsService: DogsService) { }

    @Get()
    async getAllCats(): Promise<CatsAndDogs> {
        return {
            cats: this.catsService.getAll(),
            dogs: this.dogsService.getAllDogs()
        };
    }

    @Post()
    async createCat(@Body() body: CreateCatDTO): Promise<number> {
        return this.catsService.create(body);
    }
}

