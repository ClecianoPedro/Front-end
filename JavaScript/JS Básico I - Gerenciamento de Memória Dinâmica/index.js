console.log("Hello World!")

// Padrão JS (Camel case)
// Case sensitive
// Tipagem dinâmica
// Tipagem fraca
// Não iniciar com números
// Não utilizar 'var' para declarar variáveis, pois se torna uma variável GLOBAL, já existe antes do fluxo da página mesmo sem ser declarada!
// Não precisa colocar ';' no final de cada linha do código

// Declarando variáveis
var nomeDoAluno = "Cleciano Pedro"; // String
var idade = 27; // Number
var altura = 1.77; // Number
var estudando = true; // Boolean, sempre minúsculo
var semConteudo; // Undefined

// Imprimindo variáveis
console.log(nomeDoAluno); // Imprime a variável
console.log(typeof nomeDoAluno); // Operador Unário, imprime o tipo da variável
console.log(nomeDoAluno, typeof nomeDoAluno); // Imprimindo 2 ou mais informações com 1 linha
console.log(idade, typeof idade);
console.log(altura, typeof altura);
console.log(estudando, typeof estudando);
console.log(semConteudo, typeof semConteudo);

// Declarando n° variáveis com 1 comando
var curso = "Front-end" , topico = "JavaScript Básico I";

console.log(curso, topico);

// Formas de declarar variáveis após o ES6
let notaDoAluno = 10; // 'let' permite que a variável seja alterada depois
const mediaDoAluno = 8; // 'const' não permite que a variável seja alterada depois
notaDoAluno = 9; // Alterando a variável 'let'
console.log(notaDoAluno);
// mediaDoAluno = 5; Não é permitido 
console.log(mediaDoAluno);