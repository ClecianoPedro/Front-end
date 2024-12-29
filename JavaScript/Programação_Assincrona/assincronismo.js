const fs = require("fs");

// Callbacks
// Exemplo 1

// Executa os 2 console.log() antes de ler o arquivo
// console.log("ANTES da função de ler o arquivo");
// // Função assíncrona (ler um arquivo leva um tempo)
// fs.readFile("JavaScript/Programação_Assincrona/arquivo.txt", (erro, conteudoDoArquivo) => {
//     if (erro) {
//         console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
//     } else {
//         console.log(String((conteudoDoArquivo)));
//     }
// });

// console.log("DEPOIS da função de ler o arquivo...");

// Exemplo 2: setTimeout(função assíncrona que cria um timer, quando for finalizado o timer ele executa o que estiver dentro da função de callback)

console.log("ANTES do setTimeout...")

setTimeout(() => {
    console.log("Isso aqui vai ser executado após 2 segundos")
}, 2*1000) // 2ms*1000 = 2seg.

console.log("DEPOIS do setTimeout...")

