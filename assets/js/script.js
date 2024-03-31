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

    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;
    
    const newTask = Task(title, description, dueDate);
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTaskList();

    document.getElementById('taskForm').reset();
    var taskModalEl = document.getElementById('taskModal')
    var taskModal = bootstrap.Modal.getIntstance(taskModalEl)
    taskModal.hide();
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // The below makes the add task button open the modal when clicked
    $('#addTaskButton').click(function() {
        $('#taskModal').modal('show');
    })
    // The below lets the modal close button close the modal when clicked
    $('.btn-close').click(function() {
        $('#taskModal').modal('hide');
    })
});
