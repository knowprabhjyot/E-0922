// Lets add JS here!

// This is an array which will hold the list of users
let userList = [];

// Create user Object
let newUser = {}; // Because since its an object the reference was the same


function setFirstName(event) {
    newUser.firstName = event.target.value;
}

function setLastName(event) {
    newUser.lastName = event.target.value;
}

function setEmail(event) {
    newUser.email = event.target.value;
}

function setDOB(event) {
    newUser.dob = event.target.value;
}

function setGender(event) {
    newUser.gender= event.target.value;
}

function setPassword(event) {
    newUser.password = event.target.value;
}

function setContact(event) {
    newUser.contact = event.target.value;
}

function setHobbies(event) {
}

function uploadImage(event) {
    // Here we are targetting only one file upload at a time
    newUser.uploadedImage = event.target.files[0].name;
    console.log(event.target.files);
}


function submitForm(event) {
    // console.log("form submitted!");

    // So we are skipping the default behavior of a form to send information through the
    // actions which we didn't declare!
    event.preventDefault();
    console.log(newUser);

    // Fix 1 - By Doing Deep Copy in JS
    
    // JSON - Javascript Object Notation

    // Object
    let a = {
        x : 10
    }

    // JSON
    // let a = {
    //     'x': 10
    // }

    // FIX 1
    // We did Deep copy of newUser
    let newUserObject =  JSON.parse(JSON.stringify(newUser));

    // FIX 2
    // let newUserObject2 = {...newUser};
    userList.push(newUserObject);
}

function showUserUI() {
 console.log(userList, "total users");
//  createShowListUserUI();
createShowListUserUIwithForIn();
}

let tableTitle = "hello";

function createShowListUserUI() {

    // Accessing h1 element from HTML
    let title = document.getElementById("tableTitle");

    // Then we add inner html (additional html elements inside the h1 tag)
    title.innerHTML = "<p>This is <span style='color: white' > user </span> list table</p>";

    // Accessing the div with the given ID showUserList
    let showListUserDiv = document.querySelector("#showUserList");

    // We are updating the innerhtml to empty because we want to create html from start and fresh
    showListUserDiv.innerHTML = "";

    // Creating a div element
    const div = document.createElement("div");

    // Creating a table element
    const table = document.createElement("table");

    // I am adding a table inside div 
    // <div>
        // <table></table>
    // </div>
    // div.appendChild(table);


    /*

    let object = {
     a : 4,
    b :5,
    c: 10

}

// Convert keys into array of keys
let array = Object.keys(object); // ['a', 'b', 'c']

let arrayValues = Object.values(object); // [4,5,10];



    */

    // We want to show the list of users in the table, so we have to run a loop on userlist
    for (let i = 0 ;i <userList.length ; i++) {

        // So we will add table row based on the length of user list
        const tr = document.createElement("tr");
        
        // userlist[i] --> { name: "Prabh", email: "knowprabh@gmail.com" }

        // But since we want to run a loop in the object, we can either use for in loop
        // or we can convert the object to an array
        

        // Here we are converting it to keys since we want to show that
        const objectKeyArray = Object.keys(userList[i]); // Object.keys converts an object keys into a array of keys .ie. ['name', 'email', 'password']

        for (let j = 0 ; j < objectKeyArray.length ; j++) {
            // this will hold the data inside td 
            const td = document.createElement("td");

            // adding content using text content value or innerhtml its yourchoice
            td.textContent = userList[i][objectKeyArray[j]] // { name: "prabh", email: "knowprabh@gmail.com"}
            // The above means  userList[i] --> { name: "Prabh", email: "knowprabh@gmail.com"}
            // objectKeyArray[0] --> name
            // objectKeyArray[1] ---> email
            
            // userList[i].name
            // userList[i]["name"]

            tr.appendChild(td);
        }


        table.appendChild(tr);

    }

    div.appendChild(table);
    showListUserDiv.appendChild(div);
}

function createShowListUserUIwithForIn() {
      // Accessing h1 element from HTML
      let title = document.getElementById("tableTitle");

      // Then we add inner html (additional html elements inside the h1 tag)
      title.innerHTML = "<p>This is <span style='color: white' > user </span> list table</p>";
  
      // Accessing the div with the given ID showUserList
      let showListUserDiv = document.querySelector("#showUserList");
  
      // We are updating the innerhtml to empty because we want to create html from start and fresh
      showListUserDiv.innerHTML = "";
  
      // Creating a div element
      const div = document.createElement("div");
  
      // Creating a table element
      const table = document.createElement("table");

      for (let i = 0 ;i <userList.length ; i++) {
        let tr = document.createElement("tr");

        // This is a loop that can be used to run on objects
        // here item is the key
        // if i want to see the value of that key
        // we have to write userList[i][item] ==== userList[i].name
        for (let item in userList[i]) {
            // userlist[i] --> { name: "Prabh", email: "knowprabh@gmail.com" }
            let td = document.createElement("td");

            // td.innerHTML = `${userList[i][item]}`;
            td.textContent = userList[i][item];

            //  { name: "Prabh", email: "knowprabh@gmail.com" }

            // userList[i].name

            // userList[i][item] 

            
            tr.appendChild(td);
        }

        table.appendChild(tr);
      }

      div.appendChild(table);
      showListUserDiv.append(div);
} 

// Write now the data will be replicated everytime with the last submitted value.
// Because of pass by reference, which means the object that we are saving inside the array is pointing to the same object everytime!




// First Way is using Append Child
const mainHeading = document.getElementById("main-heading");


// const h1heading = document.createElement("h1"); // <h1></h1>, this is not linked to the above variable yet

// h1heading.textContent = "Please fill the form here!";

// So we have to make h1 tag a child of mainHeading

// mainHeading.appendChild(h1heading); // So this makes h1 tag a child of main Heading


// Second Way is using innerHTML


mainHeading.innerHTML = "<h1>Please fill the form here!</h1>"



