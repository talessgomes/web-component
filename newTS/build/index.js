"use strict";
//interfaces (type x interface)
/*
type robot = {
    readonly id: number | string;
    name: string;
};

interface robot2 {
    readonly id: number | string,
    name: string;
    sayHello(): string;
}

const bot1: robot = {
    id: 1,
    name: "megaman",
};

const bot2: robot2 = {
    id: 1,
    name: "megaman",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot1.name = "rocketman");
console.log(bot2);

class Pessoa implements robot2{
    id: string | number;
    name: string;

    constructor(id: string | number, name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
        return `Hello i'm ${this.name}`;
    }
}

const p = new Pessoa(1, "rockman");
//console.log(p.sayHello());
*/
//classes
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * data modifiers
 * public
 * private
 * protected
 */
//Character: superclass/pai
class Character {
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
//Magician: subclass/filha
class Magician extends Character {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p1 = new Character("rockman", 10, 98);
const p2 = new Magician("Gandalf", 5, 30, 100);
// console.log(p1);
// console.log(p2);
//Generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
;
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Tales", "Isa"], ["Noah"]);
// console.log(numArray);
// console.log(stgArray);
let dado = "Romero";
//console.log(dado);
//decorators
// function ExibirNome(target: any){
//     console.log(target);
// }
// @ExibirNome
// class Funcionario {};
// @ExibirNome
// class Quincas {}
function apiVersion(version) {
    return (target) => {
        Object.assign(target.prototyype, { __version: version });
    };
}
let Api = class Api {
};
Api = __decorate([
    apiVersion("1.10")
], Api);
const api = new Api();
console.log(api);
