// Operadores booleanos

const numero1 = 10;
const numero2 = 12;

// 2 iguais = só compara o valor
// 3 iguais = compara o valor e o tipo das variáveis
// Recomendado utilizar 3 iguais para comparação

console.log(numero1 == numero2); // false, má prática
console.log(numero1 === numero2); // false, boa prática
console.log(numero1 === "10"); // false, boa prática
console.log(numero1 != numero2); // true, má prática
console.log(numero1 !== numero2); // true, boa prática
console.log(numero1 > numero2); // false
console.log(numero1 < numero2); // true
console.log(numero1 <= numero2); // true
console.log(numero1 >= numero2); // false