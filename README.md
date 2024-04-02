# Creating a Kanban Task Board

## Integrating Third-Party API's with Local Storage and Javascript to Create a Dynamic Application

### Table of Contents

[Project Status](#project-status)

[Screenshots of the completed application](#screenshots-of-completed-site-build)

[Purpose](#purpose)

[Technologies Used](#technologies-used)

[HTML Elements](#html-elements)

[CSS Elements](#css-elements)

[Javascript](#javascript)

[License](#license)

[Acknowledgements](#acknowledgements)

## Project Status

**Complete**

[Git Hub Repository](https://github.com/aaguimond/module05-challenge-task-board-refactor)

[Live Task Board Page](https://aaguimond.github.io/module05-challenge-task-board-refactor/)

## Screenshots of Completed Site Build

**Below is a screenshot of the page**

![a screenshot of the task board page](/assets/screenshots/KanbanTaskBoardClean.png?raw=true)

## Purpose

This project's purpose was to integrate third-party API's and Javascript into existing HTML and CSS.

## Technologies Used

This project was completed using [Git Bash](https://git-scm.com/about), [Visual Studio Code](https://code.visualstudio.com/) (with the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)), [Google Chrome](https://www.google.com/chrome/), and [Git Hub](https://github.com/).

## HTML Elements

### There are seceral static HTML elements on the task board:

* Header with title and description
* Lanes with the "To Do", "In Progress", and "Done" labels

### There are also several dynamic HTML elements:

* A modal form that fades in from the top of the page when the "Add Task" button is pressed
    * Text input areas within the modal form
    * The date picker widget by Day.Js

*Below are screenshots of the modal form with the date picker widget*

![a screenshot of the task board modal form](/assets/screenshots/KanbanTaskBoardModalForm.png?raw=true)

![a screenshot of the task board modal form with date picker](/assets/screenshots/KanbanTaskBoardModalFormDatePicker.png?raw=true)

* Task cards that are created from our data inputs on the modal form and rendered from local storage. This will be detailed further in the [Javascript section below](#javascript)

## CSS Elements

### There is very little CSS used:

* Bootstrap CSS 
* Very little custom CSS for card colors

## Javascript

The page uses quite a bit of Javascript logic. Among the functions are:

* Calling the modal form upon clicking the "Add Task" button
* Saving input data to local storage
    * Keeping track of which lane the task card was in last
* Rendering task cards from local storage
    * Rendering card colors based on their due date
        * Any cards that are due the same day or a day that has passed before we are checking the task board are displayed in red
        * Task cards that are due in 2 or fewer days are displayed in yellow
        * Task cards that are due in 3 or more days are displayed in green
* Draggable, droppable, and sortable task cards and droppable lanes by utilizing jQuery UI
* Deleting task cards with the button in the upper right corners of the cards

*Below are screenshots of the various task card colors*

![a screenshot of the task board with a task that is due at a later date](/assets/screenshots/KanbanTaskBoardToDoTaskDueLater.png?raw=true)

![a screenshot of the task board with a task that is overdue and a task that is due soon](/assets/screenshots/KanbanTaskBoardTasksOverdueAndDueSoon.png?raw=true)

Extensive and detailed comments are present in each Javascript file for further clarification

## License

[MIT](https://opensource.org/license/mit)

## Acknowledgements

Thank you to my teachers and my classmates for guiding me on my educational journey.