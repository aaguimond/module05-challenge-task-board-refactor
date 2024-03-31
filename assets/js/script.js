// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const newId = nextId;
    nextId++;
    localStorage.setItem('nextId', JSON.stringify(nextId));
    console.log(newId)
    return newId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const toDoCards = document.getElementById('todo-cards')

    const card = document.createElement('div');
    card.classList.add('task-card', 'mb-2', 'card');
    card.setAttribute('draggable', true)
    card.dataset.taskId = task.id

    const cardTitle = document.createElement('h3')
    cardTitle.textContent = task.title
    cardTitle.classList.add('card-title')

    const cardDescription = document.createElement('p')
    cardDescription.textContent = task.description
    cardDescription.classList.add('card-description')

    const cardDueDate = document.createElement('p')
    cardDueDate.textContent = task.dueDate
    cardDueDate.classList.add('card-due-date')

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardDueDate);
    toDoCards.appendChild(card);
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
