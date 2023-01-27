

// By default there are no tasks
let taskList = [];


// Using this example for innerHTML only
// let content = document.getElementById('content');
// content.innerHTML = "<p>Helllo WOrld! <span style='color: red'>HEY</span></p>";

function addTask(event) {

    let taskItem = document.getElementById('taskItem');
    event.preventDefault();

    if (taskItem.value.length > 0) {
        taskList.push(taskItem.value);

        taskItem.value = "";
    
        showList();
    } else {
        alert("Please enter a value, to add!");
    }
    
}


function showList() {
    let listContainer = document.getElementById('list');
    listContainer.innerHTML = ""; /// DELETE THE PREVIOUS HTML BEFORE which was there
    for (let i = 0 ; i < taskList.length ; i++ ) {
        let listItem = document.createElement('li');
        listItem.textContent = taskList[i];
        
        listContainer.appendChild(listItem);
    }
}


// Scope for tomorrow
// Don't allow to add similar tasks
// Add a search feature
// also add a priority list and show the UI based on that
// Complete a task
// Deploy IT
