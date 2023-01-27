

// By default there are no tasks
let taskList = [];

let newTask = {}; // By default empty; 

// ['eat dinner', 'go for shopping']

/*
    [
        {
            taskName: "Eat Dinner",
            priority: "low"
        }
    ]

*/


// Using this example for innerHTML only
// let content = document.getElementById('content');
// content.innerHTML = "<p>Helllo WOrld! <span style='color: red'>HEY</span></p>";

function addTask(event) {

    let taskItem = document.getElementById('taskItem');
    event.preventDefault();

    if (taskItem.value.length > 0) {
        // newtask = { prioty: high}
        // newTask = { priority: high, title: "Task 1" }



        newTask.title = taskItem.value;


        // taskList = []
        // newTask = {}
        // newTask = { priority: "high"}
        // newTask = { prioirty: "high", title: "Task 1"}
        // taskList.push(newTask)
        // taskList = [{ priority: "low", title: "Task 2"}]
            // ||
            // ||
            // ||
            // \/
        // newTask = { prioirty: "low", title: "Task 2"}


        // Since I am using the old object only, which is in the 
        // memory
        // since objects are pass by reference

        // newTask = { priority: "low", title: "Task 2"}
    //         // taskList.push(newTask)
         // taskList = [{ priority: "low", title: "Task 2"},  { priority: "low", title: "Task 2"}]




        let modifiedTask =  JSON.parse(JSON.stringify(newTask)) // DEEP COPY
        // We are creating a new object with a new memory
 
        taskList.push(modifiedTask); // We will push object now

        taskItem.value = "";


        console.log(taskList);
    
        showList();
    } else {
        alert("Please enter a value, to add!");
    }
    
}


function selectPriority(event) {
    // newTask = {} , newtask = { priority: "high"}
    newTask.priority = event.target.value;
    // console.log(event.target.value); // This keyword we explain some other time
}

function showList() {
    let listContainer = document.getElementById('list');
    listContainer.innerHTML = ""; /// DELETE THE PREVIOUS HTML BEFORE which was there
    for (let i = 0 ; i < taskList.length ; i++ ) {
        let listItem = document.createElement('li');

        if (taskList[i].priority === "low") {
            listItem.style.background = "yellow";
            listItem.style.color = "black";
        }

        // [ { title: "Task 1"}, { title: "Task 2"}]


        // {title: "Task 1"} // for index  0 , this will taskList[0]
        let pTitle = document.createElement("p");

        pTitle.textContent = taskList[i].title;
        pTitle.style.fontSize = "24px";

        listItem.appendChild(pTitle);
        
        let p = document.createElement('p');
        p.setAttribute("id", taskList[i].title);
        p.textContent = taskList[i].completionDate;

        listItem.appendChild(p);
        listContainer.appendChild(listItem);
    }
}

function setDate(event) {
    newTask.completionDate = event.target.value;
}


// Just like I added the TITLE, in the same UI, You should also add
// priority "High" or "Low"

// Scope for tomorrow
// Don't allow to add similar tasks
// Add a search feature
// also add a priority list and show the UI based on that
// Complete a task
// Deploy IT
