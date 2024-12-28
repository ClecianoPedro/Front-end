// soma = +
// subtração = -
// multiplicação (diferente da matemática) = *
// divisão = /
// resto = %
// exponenciação = **

// Precedência dos operadores
// parenteses, exponenciação, multiplicação e divisão, soma e subtração, mesma regra da álgebra 
// mediaDasNotas = (nota1 + nota2) / 2;

// Praticando
const nota1 = 10;
const nota2 = 8;

const somaDasNotas = nota1 + nota2;
let mediaDasNotas = somaDasNotas / 2;
console.log("Soma das notas =", somaDasNotas); // Imprimindo texto com variáveis, a ',' já adiciona um espaço após ela
console.log("Média das notas =", mediaDasNotas);

// Biblioteca Math
const numero = 16;
const raizDoNumero = Math.sqrt(numero);

console.log("Raiz quadrada de 16 =", raizDoNumero);