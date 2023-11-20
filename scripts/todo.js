const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todolist = document.querySelector('.todo-list');

let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.forEach(function(task) {
    const taskHTML = `
    <div id="${task.id}" class="todo-item">
        ${task.text}
        <button type="button" data-action="done">Done</button>
    </div>
`;
todolist.insertAdjacentHTML("beforeend", taskHTML);
});

form.addEventListener('submit', addTask);

todolist.addEventListener("click", deleteTask);

function addTask(event) { 
    event.preventDefault();
    const task = input.value;
    const newTask = {
        id: Date.now(),
        text: task,
    };
    tasks.push(newTask);
    saveToLocalStorage();
    const taskHTML = `
        <div id="${newTask.id}" class="todo-item">
            ${newTask.text}
            <button type="button" data-action="done">Done</button>
        </div>
    `;
    todolist.insertAdjacentHTML("beforeend", taskHTML);
    input.value = "";
    input.focus();
}

function deleteTask(event) {
    if (event.target.dataset.action === 'done') { 
        const parentNode = event.target.closest('.todo-item');
        const id = parentNode.id;
        const index = tasks.findIndex(function(task) { 
            if (task.id == id) { 
                return true;
            }
        })

        console.log(index);

        tasks.splice(index, 1)
        saveToLocalStorage();
        parentNode.remove();
    }
}

function saveToLocalStorage() { 
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log("eeee")
}