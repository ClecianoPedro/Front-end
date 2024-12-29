// Operador Ternário

const idade1 = 21;

idade1 >= 18 ? console.log("Maior de idade") : console.log("Menor de idade")
// Após o '?' o que acontece se for true e após o ':' o que acontece se for false

const idade2 = 17;
const mensagem = idade2 >= 18 ? "Maior de idade" : "Menor de idade";

console.log(mensagem);

// Conceito de Truthy e Falsy

// Falsy = 0, undefined, null, '' (string vazia), NaN (Not a Number)

// Truthy = Todos os demais valores