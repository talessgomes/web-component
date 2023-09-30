"use strict";
/*
type heroi = {
    name: string;
    vulgo: string;
}

function printarHerois (pessoa: heroi) {
    console.log(pessoa);
}

printarHerois({
    name: "Bruce Wayne",
    vulgo: "Batman",
});

console.log("Ola mundo");
*/
//Tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Tales";
let idade = 26;
let altura = 1.79;
//null
//undefined
let nulo = null;
let indefinido = undefined;
//tipes abrangentes: any, void
let retorno;
let retornoView = 1; //retorna qualquer coisa
//objeto - sem previsibilidade
let produto = {
    name: "Tales",
    cidade: "RS",
    idade: 26,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};
/*
    arrays
*/
let dados = ["Tales", "Isa", "Noah", "Yumi", "Joe"];
let dados2 = ["Tales", "Isa", "Noah", "Yumi", "Joe"];
let infos = ["Tales", 26, "Isa", 24];
/**
 * Tuplas: é uma forma de criar o array em ordem das informações.
 */
let boleto = ["água conta", 199.90, 654665];
/*
    arrays métodos
*/
//dado.map();
/**
 * Datas
 * */
// let aniversario:Date = new Date("2022-12-01 05:00");
// console.log(aniversario.toString());
//funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
function CallToPhone(phone) {
    return phone;
}
let soma = addNumber(4, 7);
console.log(CallToPhone(123456789));
