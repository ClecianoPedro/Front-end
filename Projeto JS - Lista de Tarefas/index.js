// Pegando TAGs HTML
const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");

let tasks = [];

form.addEventListener("submit", (event) => {
    event.preventDefault() // Evita o comportamento de recarregar a página ao submeter o formulário

    const taskTitle = taskTitleInput.value;

    if (taskTitle.length < 3) {
        alert("Sua tarefa precisa ter pelo menos 3 caracteres.")
        return; // Para não executar as linhas abaixo 
    }

    // Adicionando a nova tarefa ao array de tasks
    tasks.push(taskTitle);

    // Adicionando a nova tarefa no HTML
    const li = document.createElement("li");
    
    const input = document.createElement("input");
    input.setAttribute("type","checkbox"); // Adicionando atributo a TAG HTML

    const span = document.createElement("span");
    span.textContent = taskTitle;

    const button = document.createElement("button");
    button.textContent = "Remover";

    // Adicionando elementos dentro da TAG "li"
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);

    // Adicionando TAG "li" dentro da "ul"
    todoListUl.appendChild(li);

    // Limpando input após adicionar tarefa
    taskTitleInput.value = "";


});