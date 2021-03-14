// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);




// functions

function addTodo(event) {
    // prevent form from submitting 
    event.preventDefault();

    // creating todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // creating li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
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
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // made a set of input and buttons
    // now append the set to ul
    todoList.appendChild(todoDiv);

    // clear todo input box
    todoInput.value = "";


}

function deleteCheck(event) {
    // console.log(event.target);
    const item = event.target;    //ja click kortesi, oita dhortesi
    // delete todo
    // console.log(item);
    if (item.classList[0] === 'trash-btn')  //trash button hoile class 'trash-btn'
    {
        const todo = item.parentElement;
        // animation
        todo.classList.add("fall");

        // transition/animation shesh howar por execute hobe
        todo.addEventListener('transitioned', function () {
            todo.remove();
        });

    }

    // for check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    // console.log(item);
}

// 41.45