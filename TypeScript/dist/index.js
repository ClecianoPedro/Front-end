"use strict";
let numero; // Tipagem do tipo
let numero1 = 20; // Inferência de tipo
const pi = 3.1415; // Constante tem o tipo igual ao valor dado à ela, pois o valor dela não pode ser alterado, um tipo 'number' por exemplo seria um número genérico
let nome = "Pedro"; // Inferência de tipo
let correta; // Inferência de tipo
let resuldado = numero1 * pi; // Inferência de tipo
const numeros = [1, 2, 3, 4, 5]; // Tipagem de array (forma mais comun)
const numeros1 = [1, 2, 3, 4, 5]; // Tipagem de array (forma mais antiga)
const misto = ["Pedro", 27, 1.83]; // Tipagem de array misto (não recomendado)
const idades = []; // Iniciando array vazio
idades.push(23);
idades.push(38);
idades.push(12);
idades.push(49);
idades.push(16);
const menoresDeIdade = idades.filter(idade => idade < 18); // Inferência de tipo
const pessoa = ["Pedro", 27]; // Tipagem de Tupla (pode ter mais elementos)
// Declarando objeto seguindo a "interface" Pessoa
const pessoa1 = {
    nome: "Pedro",
    idade: 27,
    profissao: "Desenvolvedor",
    altura: 1.83
};
// Declarando objeto seguindo o "type" Pessoa2
const pessoa2 = {
    nome: "Pedro",
    idade: 27,
    profissao: "Desenvolvedor",
    altura: 1.83
};
function chooseNumber(numero1, numero2, criterio) {
    switch (criterio) {
        case "greater":
            return numero1 > numero2 ? numero1 : numero2;
        case "lower":
            return numero1 < numero2 ? numero1 : numero2;
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5)
                return numero1;
            return numero2;
    }
    ;
}
;
const numeroEscolhido = chooseNumber(10, 20);
function somar(num1, num2) {
    return num1 + num2;
}
const Pessoa3 = {};
const pessoas = {
    "123.456.789-00": {
        nome: "Pedro",
        idade: 27,
        altura: 1.85
    },
    "123.456.789-01": {
        nome: "Maria",
        idade: 26,
        altura: 1.62
    }
};
