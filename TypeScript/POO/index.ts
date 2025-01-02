// Declarando Classe
// Classe: Abstração
// Definindo a Abstração de uma pessoa

// Declarando interface
interface IPessoa {
    nome: string;
    idade: number;
    altura: number;
    peso: number;

    dormir: () => void;
}

class Pessoa implements IPessoa{
    // Atributos: Características
    nome: string;
    idade: number;
    altura: number;
    peso: number;

    // Método Construtor (Obrigatório)
    constructor(nome: string, idade:number, altura: number, peso:number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    };

    // Métodos: Ação
    dormir() {
        console.log("Dormindo...😴")
    };
};

// Declarando um objeto

const pessoa3 = new Pessoa("Pedro", 27, 1.85, 70);

console.log(pessoa3);
pessoa3.dormir();