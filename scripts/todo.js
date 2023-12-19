const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todolist = document.querySelector('.todo-list');
const emptyList = document.querySelector('.todo-list__empty');

let tasks = [];

if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
}

tasks.forEach(function (task) {
    renderTask(task);
});

checkEmtyList();

form.addEventListener('submit', addTask);

todolist.addEventListener("click", deleteTask);

todolist.addEventListener("click", doneTask);

function addTask(event) {
    event.preventDefault();
    const task = input.value;
    const newTask = {
        id: generateUniqueId(),
        text: task,
        done: false,
    };
    tasks.push(newTask);
    saveToLocalStorage();
    renderTask(newTask);
    input.value = "";
    input.focus();

    checkEmtyList();
}

function deleteTask(event) {
    if (event.target.dataset.action === 'delete') {
        let parentNode = null;
        if (event.target.closest('.todo-item') == null) {
            parentNode = event.target.closest('.todo-item--done')
        } else { parentNode = event.target.closest('.todo-item') }
        const id = parentNode.id;
        const index = tasks.findIndex(function (task) {
            if (task.id == id) {
                return true;
            }
        })

        tasks.splice(index, 1);
        saveToLocalStorage();
        parentNode.remove();
    }

    checkEmtyList();
}

function doneTask() {
    if (event.target.dataset.action === 'done') {
        const parentNode = event.target.closest('.todo-item');
        parentNode.classList.add('todo-item--done');

        const id = parentNode.id;
        const task = tasks.find(function (task) {
            if (task.id === id) {
                return true;
            }
        })

        task.done = true;
        saveToLocalStorage();
    }
}

function checkEmtyList() {
    if (todolist.children.length > 3) {
        emptyList.classList.add('none')
    } else emptyList.classList.remove('none')
}

function saveToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTask(task) {

    const cssClass = task.done ? 'todo-item--done' : 'todo-item';
    const template = document.getElementById('tmpHTML');
    const taskDiv = template.content.firstElementChild.cloneNode(true);
    console.log(taskDiv)
    taskDiv.classList.add(cssClass);
    taskDiv.id = task.id;
    const taskText = taskDiv.querySelector('p');
    console.log(taskText);
    taskText.textContent = task.text;
    todolist.appendChild(taskDiv);
}

// function renderTask(task) {
//     const cssClass = task.done ? 'todo-item--done' : 'todo-item'
//     const taskHTML = `
//     <div id="${task.id}" class="${cssClass}">
//         ${task.text}
//         <div class="todo-item__buttons">
//         <button class="buttons__delete_button" type="button" data-action="delete">Удалить</button>
//         <button class="buttons__done_button" type="button" data-action="done">Готово</button>
//         </div>
//     </div>
// `;
//     todolist.insertAdjacentHTML("beforeend", taskHTML);
// }

function generateUniqueId() {
    const timestampPart = Date.now().toString(36);
    const randomPart = Math.random().toString(36).substr(2, 5);
  
    return `${timestampPart}${randomPart}`;
  }