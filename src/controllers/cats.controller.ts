import { Controller, Get, Post, HttpCode, Header, Redirect, Param, Body } from "@nestjs/common";

// DTO
import { CreateCatDTO } from "./dto"

// Services
import { CatsService } from "../services"

// Interfaces
import { Cat } from "./interfaces/cat.interface"


@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Get()
    async getAllCats(): Promise<Cat[]> {
        return this.catsService.getAll();
    }

    @Post()
    async createCat(@Body() body: CreateCatDTO): Promise<number> {
        return this.catsService.create(body);
    }
}

