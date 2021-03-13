// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);




// functions

function addTodo(event) {
    // prevent form from submitting 
    event.preventDefault();

    // creating todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // creating li
    const newTodo = document.createElement("li");
    newTodo.innerText = 'todo list'
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // check mark button
    const completedButton = document.createElement("button");
    // inner html dile <h1></h1> o use kora jabe
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);

    // made a set of input and buttons
    // now append the set to ul
    todoList.appendChild(todoDiv);




}