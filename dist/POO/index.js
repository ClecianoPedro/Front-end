"use strict";
// Declarando Classe
// Classe: Abstração
// Definindo a Abstração de uma pessoa
class Pessoa {
    // readonly cpf: string; // Pode ser apenas lido, mas não alterado
    // Método Construtor (Obrigatório)
    constructor(nome, idade, altura, cpf) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this._cpf = cpf;
    }
    // Métodos: Ação
    dormir() {
        console.log("Dormindo...😴");
    }
    // Accessor getter
    get cpf() {
        return this._cpf;
    }
    // Accessor setter
    set cpf(newCpf) {
        if (newCpf.length !== 14) {
            throw new Error("CPF length is incorrect"); // Lançando erro
        }
        this._cpf = newCpf;
    }
}
// Declarando um objeto
const pessoa3 = new Pessoa("Pedro", 27, 1.85, "123.456.789-00");
console.log(pessoa3);
pessoa3.dormir();
console.log(pessoa3.cpf);
// Utilizando Acessors
pessoa3.cpf = "123.456.789-01";
console.log(pessoa3.cpf);
