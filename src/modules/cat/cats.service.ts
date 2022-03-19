import { Injectable } from "@nestjs/common";

// Interfaces
import { Cat } from "./interfaces";

@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [];

    create(cat: Cat) {
        return this.cats.push(cat);
    }

    delete(id: string) {
        return this.cats.filter((item) => item.id !== id);
    }

    getAll() {
        return this.cats;
    }
}