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

/**
 * data modifiers
 * public
 * private
 * protected
 */

//Character: superclass/pai
class Character {
    protected name?: string;
    readonly stregth: number;
    skill: number;

    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    attack(): void {
        console.log(`Attack with ${this.stregth} points`);
    }
}

//Magician: subclass/filha
class Magician extends Character {
    magicPoints: number;
    constructor(name: string, stregth: number, skill: number, magicPoints: number) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}

const p1 = new Character("rockman", 10, 98);
const p2 = new Magician("Gandalf", 5, 30, 100);
// console.log(p1);
// console.log(p2);

//Generics

function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
};

const numArray = concatArray<number []>([1, 5], [3]);
const stgArray = concatArray<string []>(["Tales", "Isa"], ["Noah"]);

// console.log(numArray);
// console.log(stgArray);

let dado: string = "Romero";
//console.log(dado);

//decorators
// function ExibirNome(target: any){
//     console.log(target);
// }

// @ExibirNome
// class Funcionario {};

// @ExibirNome
// class Quincas {}

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Tales"});
    }
}

//atribute decorator
function minLength(length: number) {
    return (target:any, key: string) => {
        let _value = target[key];

        const getter = () => "[play]" + _value;
        const setter = (value: string) => {
            if (value.length < length) {
                throw new Error(`Tamanho menor do que ${length}`);
            } else {
                _value = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
@apiVersion("1.10")
class Api{
    @minLength(3)
    name:string

    constructor(name: string){
        this.name = name;
    }
}

const api = new Api("produtos");//se for menor do que 3, vai retornar um erro
console.log(api.name);
