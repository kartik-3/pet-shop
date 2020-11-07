"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pet = void 0;
var Pet = /** @class */ (function () {
    function Pet(currPet) {
        this.name = currPet.name;
        this.age = currPet.age;
        this.color = currPet.color;
    }
    Pet.prototype.getName = function () {
        return this.name;
    };
    Pet.prototype.getColor = function () {
        return this.color;
    };
    Pet.prototype.getAge = function () {
        return this.age;
    };
    return Pet;
}());
exports.Pet = Pet;
