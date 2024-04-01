// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

$('#taskDueDate').datepicker({})

// Todo: create a function to generate a unique task id
function generateTaskId() {
    if (!nextId) {
        nextId = 0
    }
    const newId = nextId;
    nextId++;
    localStorage.setItem('nextId', JSON.stringify(nextId));
    return newId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    if (!taskList) {
        return
    } else { taskList.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.setAttribute('class','taskCard');
        let taskId = task.id
        taskCard.setAttribute('id', `taskId-${taskId}`)

        const taskCardHeader = document.createElement('div')
        taskCardHeader.setAttribute('class','taskCardHeader')
        const cardDeleteButton = document.createElement('button')
        cardDeleteButton.textContent = 'x'
        cardDeleteButton.setAttribute('class','cardDeleteButton')
        cardDeleteButton.addEventListener('click', handleDeleteTask);

        const taskTitle = document.createElement('h4');
        taskTitle.textContent = task.title;
        taskTitle.setAttribute('id','taskTitle');

        const taskDescription = document.createElement('p');
        taskDescription.textContent = task.description;
        taskDescription.setAttribute('id','taskDescription');

        const taskDueDate = document.createElement('p');
        taskDueDate.textContent = task.dueDate;
        taskDueDate.setAttribute('id','taskDueDate');

        taskCard.setAttribute('id', `taskId-${taskId}`)

        taskCardHeader.appendChild(taskTitle);
        taskCard.appendChild(cardDeleteButton);
        taskCard.appendChild(taskCardHeader);
        taskCard.appendChild(taskDescription);
        taskCard.appendChild(taskDueDate);

        const taskStatus = task.status
        let taskColumnPick = document.getElementById(`${taskStatus}-cards`)
        taskColumnPick.appendChild(taskCard);

        function updateTaskCardColor(task) {
            const taskCard = document.getElementById(`taskId-${task.id}`);
            if (taskCard) {
                const dueDate = dayjs(task.dueDate);
                const currentDate = dayjs();
        
                const dayDifference = dueDate.diff(currentDate, 'day');
        
                if (dayDifference <= 0) {
                    taskCard.classList.add('past-due');
                } else if (dayDifference <= 2) {
                    taskCard.classList.add('due-soon');
                } else { taskCard.classList.add('due-later')}
            };
        };

        updateTaskCardColor(task);
    })};
}

createTaskCard()

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

    $('.taskCard').draggable({
        revert: 'invalid',
        zIndex: 100,
        connectToSortable: '.lane',
    });
    $('.taskCard').sortable({
        appendTo: document.body
    });
    
}

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    // The below prevents the page from reloading when we click our button
    event.preventDefault();
  
    // The below gathers the inputs from our form and stores them as variables
    const title = $('#taskTitle').val().trim();
    const description = $('#taskDescription').val().trim();
    const dueDateStr = $('#taskDueDate').datepicker('getDate');

    const dueDateISO = dueDateStr.toISOString().split('T')[0];
  
    const dueDate = dayjs(dueDateISO)
    // The below creates a Javascript object with our inputs
    const newTask = {
      id: generateTaskId(),
      title: title,
      description: description,
      dueDate: dueDate.format('YYYY-MM-DD'),
      status: 'todo'
    };
  
    // The below states that if we don't have a task list already, we'll create an empty object for it
    if (!taskList) {
      taskList = [];
    }
    // The below pushes our new task object to our task list
    taskList.push(newTask);
    // The below stringifies the object and pushes it to our local storage
    localStorage.setItem('tasks', JSON.stringify(taskList));
  
    createTaskCard(newTask);
    
    // The below closes the modal and clears the form
    $('#formModal').modal('hide');
    $('#taskForm').trigger('reset');
  }
  

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    // The below declares the button as the event that occurs, grabs the closest task card element to the button
    // that was pressed, and stores the taskId as a number string
    const deleteButton = event.target;
    const taskCard = deleteButton.closest('.taskCard');
    const taskId = taskCard.id.replace('taskId-', '')
    // The below parses the number string of the ID to identify the index the task card we're deleting is at
    const taskIndex = taskList.findIndex(task => task.id === parseInt(taskId));
    // If we have a valid task index number, then we splice that task from the local storage and save local storage
    if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1); 
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }
    // The below removes the targeted task card from the DOM
    taskCard.remove();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    // The below identifies the ID of the task that we drag and then replaces the status of the task to match that of
    // the lane it's dropped into
    const taskId = ui.draggable.attr('id').replace('taskId-', '');
    const newStatus = $(this).attr('id');
  
    // The below finds the task and identifies its taskId. If it doesn't find a task, it returns a -1, so we say if we do
    // find a task, then we search our taskList for the status at that task's index and update it with the id of the lane
    // we found above. Finally, we update it in local storage
    const taskIndex = taskList.findIndex((task) => task.id === parseInt(taskId));  
    if (taskIndex !== -1) {
        taskList[taskIndex].status = newStatus;
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }
    
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

    renderTaskList();

    $('#todo-cards').droppable({
        accept: '.taskCard', // Only accept task cards
        drop: handleDrop // The function to handle dropped tasks (we'll define this next)
    });

    $('#in-progress-cards').droppable({
        accept: '.taskCard', // Only accept task cards
        drop: handleDrop // The function to handle dropped tasks (we'll define this next)
    });

    $('#done-cards').droppable({
        accept: '.taskCard', // Only accept task cards
        drop: handleDrop // The function to handle dropped tasks (we'll define this next)
    });

    $('.lane').sortable({
        connectWith: '.lane'
    });

    $('.card-header').sortable({
        disable: true
    });

    $('h2').sortable({
        disable: true
    });

    $('div.card-body').sortable({
        disable: true
    });

    $('#addTaskButton').click(function() {
        $('#formModal').modal('show');
    });

    $('#taskForm').submit(handleAddTask);
});
