"use strict";
// Declarando Classe
// Classe: Abstração
// Definindo a Abstração de uma pessoa
class Pessoa {
    // Método Construtor (Obrigatório)
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    ;
    // Métodos: Ação
    dormir() {
        console.log("Dormindo...😴");
    }
    ;
}
;
// Declarando um objeto
const pessoa3 = new Pessoa("Pedro", 27, 1.85);
console.log(pessoa3);
pessoa3.dormir();