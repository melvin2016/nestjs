// Interfaces
import { Cat } from "../interfaces";

export class CreateCatDTO implements Cat {
    id: string;
    name: string;
    age: number;
    isInHouse: boolean;
}