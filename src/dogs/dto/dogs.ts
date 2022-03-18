// Types
import type { Dog } from "../interfaces";

export class DogDto implements Dog {
    age: number;
    name: string;
    yearBorn: number;
    gender: "Female" | "Male";
}