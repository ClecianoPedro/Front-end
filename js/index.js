
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