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