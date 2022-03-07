// Interfaces
import { Cat } from "../interfaces/cat.interface"

export class CreateCatDTO implements Cat {
    id: string;
    name: string;
    age: number;
    isInHouse: boolean;
}