// Pegando TAGs HTML
const form = document.querySelector("#todo-form");
const taskTitleInput = document.querySelector("#task-title-input");
const todoListUl = document.querySelector("#todo-list");

let tasks = [];

function renderTaskOnHtml(taskTitle, done = false) {
    const li = document.createElement("li");
    
    const input = document.createElement("input");
    input.setAttribute("type","checkbox"); // Adicionando atributo a TAG HTML
    input.addEventListener("change", (event) => {
        const liToToggle = event.target.parentElement;
        const spanToToggle = liToToggle.querySelector("span");
        const done = event.target.checked; // Pegando o valor "checked" (true/false) do input que disparou o evento
        if (done) {
            spanToToggle.style.textDecoration = "line-through";
        } else {
            spanToToggle.style.textDecoration = "none";
        }

        tasks = tasks.map(t => {
            if (t.title === spanToToggle.textContent) {
                return {
                    title: t.title,
                    done: !t.done
                }
            }
            return t
        })
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    input.checked = done

    const span = document.createElement("span");
    span.textContent = taskTitle;
    if (done) {
        span.style.textDecoration = "line-through";
        };

    const button = document.createElement("button");
    button.textContent = "Remover";
    button.addEventListener("click", (event) => {
        const liToRemove = event.target.parentElement;
        const titleToRemove = liToRemove.querySelector("span").textContent; // Pegando o titulo da tarefa à remover

        tasks = tasks.filter(t => t.title !== titleToRemove); // Para cada tarefa que percorrer pegue apenas às que tenham o titulo diferente da que estou removendo

        todoListUl.removeChild(liToRemove); // Remove o pai do elemento

        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    // Adicionando elementos dentro da TAG "li"
    li.appendChild(input);
    li.appendChild(span);
    li.appendChild(button);

    // Adicionando TAG "li" dentro da "ul"
    todoListUl.appendChild(li);
};

window.onload = () => {
    const tasksOnLocalStorage = localStorage.getItem("tasks");

    if (!tasksOnLocalStorage) return;

    tasks = JSON.parse(tasksOnLocalStorage); // Pega String e converte para Objeto

    tasks.forEach(t => {
        renderTaskOnHtml(t.title, t.done)
    });
};

form.addEventListener("submit", (event) => {
    event.preventDefault() // Evita o comportamento de recarregar a página ao submeter o formulário

    const taskTitle = taskTitleInput.value;

    if (taskTitle.length < 3) {
        alert("Sua tarefa precisa ter pelo menos 3 caracteres.")
        return; // Para não executar as linhas abaixo 
    }

    // Adicionando a nova tarefa ao array de tasks
    // Adicionando objeto a lista de arrays
    tasks.push({
        title: taskTitle,
        done: false
    });
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Guardando array de tasks no localStorage

    // Adicionando a nova tarefa no HTML
    renderTaskOnHtml(taskTitle);

    // Limpando input após adicionar tarefa
    taskTitleInput.value = "";


});