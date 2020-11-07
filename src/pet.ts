import { PetChars } from "./petData";

export class Pet {
  name: string;
  age: number;
  color: string;

  constructor(currPet: PetChars) {
    this.name = currPet.name;
    this.age = currPet.age;
    this.color = currPet.color;
  }

  getName(): string {
    return this.name;
  }

  getColor(): string {
    return this.color;
  }

  getAge(): number {
    return this.age;
  }
}
