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