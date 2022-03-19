import { Injectable, PreconditionFailedException } from "@nestjs/common";

// Types
import type { Dog } from "./interfaces";

@Injectable()
export class DogsService {
    private readonly dogs: Dog[] = [];

    createDog(dog: Dog): Dog {
        this.dogs.push(dog);
        return this.dogs[this.dogs.length - 1];
    }

    getAllDogs() {
        throw new PreconditionFailedException();
        return this.dogs;
    }
}