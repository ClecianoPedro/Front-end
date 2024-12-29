import fs from "fs";

// Callbacks
// Exemplo 1

// Executa os 2 console.log() antes de ler o arquivo
console.log("ANTES da função de ler o arquivo");
// Função assíncrona (ler um arquivo leva um tempo)
fs.readFile("JavaScript/Programação Assincrona/arquivo.txt", (erro, conteudoDoArquivo) => {
    if (erro) {
        console.log("Ocorreu um erro ao tentar ler o arquivo:", erro);
    } else {
        console.log(String((conteudoDoArquivo)));
    }
});

console.log("DEPOIS da função de ler o arquivo...");

// Exemplo 2: setTimeout(função assíncrona que cria um timer, quando for finalizado o timer ele executa o que estiver dentro da função de callback)

console.log("ANTES do setTimeout...");

setTimeout(() => {
    console.log("Isso aqui vai ser executado após 2 segundos");
}, 2*1000); // 2ms*1000 = 2seg.

console.log("DEPOIS do setTimeout...");


// Promises
// Exemplo de utilização: Pegar dados do back-end (API)

// A promise é um objeto que guarda uma promessa de que algo será realizado, é útil para os casos em que estamos lidando com operações assíncronas.
// A promise estará em algum dos estados abaixo:
// 1. Pending: A promise foi iniciada, mas está pendente.
// 2. Fullfilled: A promise foi concretizada com sucesso.
// 3. Rejected: A promise foi rejeitada, porque houve um erro.

// console.log("ANTES da criação da promise");
// Criando função que retorna uma promise
function lerAquivoPromise() {
    return new Promise((resolve, reject) => {
        fs.readFile("JavaScript/Programação Assincrona/arquivo.txt", (erro, conteudoDoArquivo) => {
        if (erro) {
            reject("Ocorreu um erro ao tentar ler o arquivo:", erro);
        } else {
            resolve(String((conteudoDoArquivo)));
        }
        });
    });
};

// Focar a partir daqui...
// then: quando a promise for cumprida
// catch: quando der algum erro na promise
// finally: executado independente da promise dar certo ou errado

lerAquivoPromise()
    .then((retornoDoResolveDaPromise) => {
        console.log("Deu certo!", retornoDoResolveDaPromise);
    }).catch ((erro) => {
        console.log("Deu ruim:", erro);
    }).finally(() => {
        console.log("Isso aqui vai ser executado independente do sucesso ou fracasso da promise, ao final dela");
    });


// async/await

// async transforma a função em assíncrona
// await só pode ser colocado dentro de uma função assíncrona

async function leituraDeDados() {
    console.log("Isso é executado antes da promise ser resolvida");

    const retornoDaPromise = await lerAquivoPromise(); // Espera a promise ser resolvida para avançar no código

    console.log(retornoDaPromise)
    console.log("Isso é executado DEPOIS da promise ser resolvida");
};

leituraDeDados();