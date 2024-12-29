const prompt = require("readline-sync");

const idade = Number(prompt.question("Qual e a sua idade?"));

// Condicionais if/else

if (idade >= 18) {
    console.log("Você e maior de idade")
} else {
    console.log("Você e menor de idade")}


// Prática 1

// Média >= 7 = Aprovado
// Média < 7 e Média >= 5 = Prova
// Média < 5 = Reprovado

const mediaDoAluno = 5;

if (mediaDoAluno >= 7) {
    console.log("Aprovado")
    console.log("Parabéns! 😁👍")
} else if (mediaDoAluno >= 5) {
    console.log("Prova final 🤔")
} else {
    console.log("Reprovado 😢")
}

// Prática 2

// Precisa ser maior de idade
// Precisa ter uma CNH (PPD)

const idadeDaPessoa = 18;
const temCnh = false;

if (idadeDaPessoa >= 18 && temCnh) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você NÃO pode dirigir!")
}