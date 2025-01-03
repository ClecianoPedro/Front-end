const increaseButton = document.querySelector("#aumentar-botao");

const decreaseButton = document.querySelector("#diminuir-botao");

const counterElement = document.querySelector("#contador");

const input = document.querySelector("#input");

increaseButton.addEventListener("click", (event) => {
    const valorAtual = Number(counterElement.textContent);

    counterElement.textContent = valorAtual + 1;

    increaseButton.classList.add("btn");
    decreaseButton.classList.remove("btn");
}); // 1° evento que estará sendo escutado, 2° função que será executada quando ocorrer o evento

decreaseButton.addEventListener("click", (event) => {
    const currentValue = Number(counterElement.textContent);

    counterElement.textContent = currentValue - 1;

    decreaseButton.classList.add("btn");
    increaseButton.classList.remove("btn");
});

input.addEventListener("input", () => {
    console.log(input.value);
});

// Adicionando estilos inline ao elemento "contador"

counterElement.style.color = "red";
counterElement.style.padding = "0 2rem";
counterElement.style.backgroundColor = "#AAA"; // Utilizar CamelCase quando o nome do atributo contém hífen
counterElement.style.border = "1px solid black"
counterElement.style.width = "150px"

// Manipulando classes

const themeButton = document.querySelector("#theme");

let darkTheme = false;

themeButton.addEventListener("click", () => {
    darkTheme = !darkTheme; // darkTheme recebe o contrário dela

    const body = document.querySelector("body");
    if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
});