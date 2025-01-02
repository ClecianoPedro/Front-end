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