// console.log("I am inside the script file");


// window.document


// First way Document.getElementbyid helps you access a html element based on their ID
let myButton = document.getElementById("myButton");

console.log(myButton);



// Second Way

let myButtonList = document.getElementsByTagName("button");

console.log(myButtonList);


// Third Way

let myButtonListByClasses = document.getElementsByClassName("btn");


console.log(myButtonListByClasses);


// Fourth Way (Generic Way)

// By Tag Name
// let myButtonByQUery = document.querySelector("button");

// By Class Name
// let myButtonByQUery = document.querySelector(".btn");

// By ID name

let myButtonByQUery = document.querySelector("#myButton");


console.log(myButtonByQUery, "by Query selector");


// What we prefer for accessing elements from the DOM (HTML) - Document Object Model

// 1. document.getElementByID
// 2. querySelector (My personal Preference)


// EVENTS **************
// When we talk about events, its more like The type of event being fired + the event Handler (What should happen)
// Lets say if we have a button, If someone clicks , it should do something

// Now here remember - What is the event being called - click
// Event Handler - Here it would be what should happen if click event is fired.


// We can add events in mutliple ways ***********************

// 1. By using add event listener

// mybuttonQuery, i want to attach an event listerner to it

myButtonByQUery.addEventListener("click", function() {
    // console.log("I am called!");

    alert("Hello How are you ??")
})  

const myDiv = document.querySelector("#myDiv");

console.log(myDiv, "myDiv");

myDiv.addEventListener("mouseover", function() {
    console.log("I entered the red block");
})

myDiv.addEventListener("mouseout", function() {
    console.log("I left the red block");
})

// let sumButton = document.querySelector("#sum23");

// sumButton.addEventListener("click", function() {
//     let a = 2;
//     let b = 3;
//     console.log(a + b);
// })

// If you want to explore other types of events :)
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp#:~:text=The%20addEventListener()%20method%20allows%20you%20to%20add%20event%20listeners,events%2C%20like%20the%20xmlHttpRequest%20object.


// 2. By directly calling events in the HTML (RECOMMENDED WAY)

// Global Variable
let firstNumber;
let secondNumber;

function findSum() {
    console.log(firstNumber + secondNumber, "final sum");
}

function setFirstNumber(event) {

    // We are using parseInt because input box gave the value as a string, and we have to
    // convert it into a number since we are adding it.
    firstNumber = parseInt(event.target.value);

}

function setSecondNumber(event) {
        // We are using parseInt because input box gave the value as a string, and we have to
    // convert it into a number since we are adding it.
    secondNumber = parseInt(event.target.value);
}