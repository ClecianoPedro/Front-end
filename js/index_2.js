const increaseButton = document.querySelector("#aumentar-botao");

const decreaseButton = document.querySelector("#diminuir-botao");

const counterElement = document.querySelector("#contador");

const input = document.querySelector("#input");

increaseButton.addEventListener("click", (event) => {
    const valorAtual = Number(counterElement.textContent);

    counterElement.textContent = valorAtual + 1;
}); // 1° evento que estará sendo escutado, 2° função que será executada quando ocorrer o evento

decreaseButton.addEventListener("click", (event) => {
    const currentValue = Number(counterElement.textContent);

    counterElement.textContent = currentValue - 1;
})

input.addEventListener("input", () => {
    console.log(input.value);
})