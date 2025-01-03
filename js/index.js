
// Selecionando elementos HTML utilizando o DOCUMENT

// Pelo nome da TAG
const todosH1s = document.getElementsByTagName("h1");
console.log(todosH1s);

// Pelo nome da classe

const todasClassesParagrafo = document.getElementsByClassName("paragrafo");
console.log(todasClassesParagrafo);

// Pelo "name" da TAG

const emailInput = document.getElementsByName("email");
console.log(emailInput);

// Pelo ID da TAG

const jsLogoImg = document.getElementById("js-logo");
console.log(jsLogoImg);

// Query Selector

const imagem = document.querySelector("body > img");
console.log(imagem);

// Query Selector All

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

console.clear();

// Acessando/alterando o conteúdo HTML das TAGs

const primeiroParagrafo = document.querySelector("p.paragrafo");
console.log(primeiroParagrafo);

console.log("textContent:", primeiroParagrafo.textContent); // Pega todo o conteúdo em texto, ignorando as TAGS dentro da 1° TAG

console.log("innerHTML:", primeiroParagrafo.innerHTML); // Pega todo o conteúdo da TAG e TAGs que estejam dentro da 1° TAG

primeiroParagrafo.textContent = "Outra coisa";

primeiroParagrafo.innerHTML = "<strong>Outra coisa</strong>"
console.log(primeiroParagrafo);

console.clear();

emailInput[0].value = "pedro@gmail.com";

// Criando elementos na página

const listaUl = document.querySelector("ul#lista"); // Selecionando elemento já existente

const listaLis = document.querySelectorAll("ul > li"); // Selecionando todas TAGs "li" após o "ul"

const novaTagLi = document.createElement("li"); // Criando uma TAG "li" vazia
novaTagLi.textContent = "Segundo item"; // Adicionando um texto dentro da TAG "li"
// listaUl.appendChild(novaTagLi); // Adicionando ao final do elemento já existente

listaUl.insertBefore(novaTagLi, listaLis[1]); // 1° é o elemento que estamos adicionando, 2° é a posição antes de quem queremos inseri-lo