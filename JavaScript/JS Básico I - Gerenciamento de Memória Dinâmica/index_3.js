const prompt = require("readline-sync"); // Importando a biblioteca 'readline-sync' para utilizar prompts

const idade = prompt.question("Qual é a sua idade?"); // Utilizando o método 'question' para utilizar o prompt
const idadeNumber = Number(idade); // Convertendo String de forma manual
console.log(idadeNumber, typeof idadeNumber); // Exibindo o que foi enviado no prompt

// Conversão de String manual
console.log(Number("X")); // NaN: Not a Number
console.log(String(10), typeof String(10)); // Converter Number em String
console.log(Boolean(2)) // Convertendo para Boolean, 0 = falso, o resto é verdadeiro mesmo sendo negativo

// Conversão Implícita
// Adição transforma o número em texto
// Subtração, multiplicação, divisão, transforma o texto em número

console.log(1 + "1"); // 1+1 nem sempre é 2 e eu posso provar kkkkkkkkkkkkk
console.log("10" + 5); // Kkkkkkkkkkkkkkkkk
console.log(10 - "5"); // Como assim 5?
console.log(10 * "5"); // Como assim 50?
console.log(10 / "5"); // Como assim 2?