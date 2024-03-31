// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Need to make an object for the tasks
function Task (title, description, dueDate) {
    this.id = generateTaskId()
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.color = 'normal'
}

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const newId = nextId;
    nextId++;
    localStorage.setItem('nextId', JSON.stringify(nextId));
    console.log('This is the ID:' + newId)
    return newId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {

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
    // The below makes the add task button open the modal when clicked
    $('#addTaskButton').click(function() {
        $('#taskModal').modal('show');
    })
    // The below lets the modal close button close the modal when clicked
    $('.btn-close').click(function() {
        $('#taskModal').modal('hide');
    })
});
