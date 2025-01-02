let numero: number; // Tipagem do tipo
let numero1 = 20; // Inferência de tipo
const pi = 3.1415; // Constante tem o tipo igual ao valor dado à ela, pois o valor dela não pode ser alterado, um tipo 'number' por exemplo seria um número genérico

let nome = "Pedro"; // Inferência de tipo

let correta: boolean; // Inferência de tipo

let resuldado = numero1 * pi; // Inferência de tipo

const numeros: number[] = [1, 2, 3, 4, 5]; // Tipagem de array (forma mais comun)

const numeros1: Array<number> = [1, 2, 3 ,4, 5]; // Tipagem de array (forma mais antiga)

const misto: (number | string)[] = ["Pedro", 27, 1.83]; // Tipagem de array misto (não recomendado)

const idades: number[] = []; // Iniciando array vazio

idades.push(23)
idades.push(38)
idades.push(12)
idades.push(49)
idades.push(16)

const menoresDeIdade = idades.filter(idade => idade < 18); // Inferência de tipo

const pessoa: [string, number] = ["Pedro", 27]; // Tipagem de Tupla (pode ter mais elementos)

// Interface
// Criando "Tipo" customizado
interface Pessoa {
    nome: string;
    idade: number;
    profissao?: string; // Parâmetro opcional
    altura: number;
}

// Declarando objeto seguindo a "interface" Pessoa
const pessoa1: Pessoa = {
    nome: "Pedro",
    idade: 27,
    profissao: "Desenvolvedor",
    altura: 1.83
};

// Type
// Tipo abstrato
type Pessoa2 = {
    nome: string;
    idade: number;
    altura: number;
    profissao?: string;
}

type MyString = string; // Declarando um "Tipo genérico"

// Declarando objeto seguindo o "type" Pessoa2
const pessoa2: Pessoa2 = {
    nome: "Pedro",
    idade: 27,
    profissao: "Desenvolvedor",
    altura: 1.83
};

// Union Types
// Literal Types

// Type Aliases
type Criterio = "greater" | "lower";

function chooseNumber(numero1: number, numero2: number, criterio?: Criterio) {
    switch(criterio) {
        case "greater":
            return numero1 > numero2 ? numero1 : numero2
        case "lower":
            return numero1 < numero2 ? numero1 : numero2
        default:
            const numeroAleatorio = Math.random();
            if (numeroAleatorio >= 0.5) return numero1
            return numero2;
    };
    
};

const numeroEscolhido = chooseNumber(10, 20)