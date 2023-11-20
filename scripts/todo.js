document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('form');
    const todoInput = document.getElementById('input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const task = todoInput.value.trim();

        if (task !== "") {
            addTaskToList(task);
            saveTasksToLocalStorage();
            todoInput.value = "";
        }
    });

    function addTaskToList(task) {
        const taskHTML = `
            <div id="todo-item">
                ${task}
                <button type="button">Done</button>
            </div>`;

        todoList.insertAdjacentHTML("beforeend", taskHTML);
    }

    function saveTasksToLocalStorage() {
        const tasks = Array.from(todoList.children).map(taskItem => taskItem.textContent.trim());
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasksFromLocalStorage() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToList(task));
    }

    loadTasksFromLocalStorage();
});
