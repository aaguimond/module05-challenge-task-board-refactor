// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    // The below prevents the page from reloading when we click our button
    event.preventDefault();
  
    // The below gathers the inputs from our form and stores them as variables
    const title = $('#taskTitle').val().trim();
    const description = $('#taskDescription').val().trim();
    const dueDate = $('#taskDueDate').val();
  
    // The below creates a Javascript object with our inputs
    const newTask = {
      id: generateTaskId(),
      title: title,
      description: description,
      dueDate: dueDate,
      status: 'to-do'
    };
  
    // The below states that if we don't have a task list already, we'll create an empty object for it
    if (!taskList) {
      taskList = [];
    }
    // The below pushes our new task object to our task list
    taskList.push(newTask);
    // The below stringifies the object and pushes it to our local storage
    localStorage.setItem('tasks', JSON.stringify(taskList));
  
    // The below closes the modal and clears the form
    $('#formModal').modal('hide');
    $('#taskForm').trigger('reset');
  }
  

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    $('#taskForm').submit(handleAddTask);
});
