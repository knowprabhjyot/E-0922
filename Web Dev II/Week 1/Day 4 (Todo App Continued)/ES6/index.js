// ES6 - Ecmascript
// Ecma - is an organization
// Ecmascript is not Javascript!
// Ecmascript is a standard used by other scripting languages
    // - Javascript
    // Typescript
    // Coffeescript

// ES6 - 2015
    // Let and const
    // BEfore ecma script we could only create variables using var keyword
    // After ES6 we could create variables with Let and Const
    // Arrow Functions
    // Spread Operators
    // Rest Operators
    // String Literal


// let and const

 let userName = "Prabh"; // We can modify them
 userName = "Daniel"; // Valid Operation

 const age = 28;
 age = 28; // Error

 const student = {
    name : " Mike ",
    age : 21
 } // Pass by reference

 student =  "prabh" // this was invalid

 student.age = 23; // This is a valid operation

 const array = [1,2,3,4];
 array = []; // Error / Invalid Operation 

 array[1] = 4; // This is a valid operation


// Arrow Functions *********************

// Using traditional function keyword
function sum(num1, num2) {
    return num1 + num2;
}

let valueOfSum = sum(4, 5);

// Arrow Function
let valueOfSumUsingArrow = (num1, num2) => {
    return num1 + num2;
}


// Differences between Functions and Arrow Functions

// FIRST DIFFERENCE 

    // 1. Hoisting

    console.log(collegeName); // Undefined and no error
    var collegeName  = "CICCC";

    // The above is broken down by the interpreter like this

    var collegeName; // DECLARATION
    console.log(collegeName);
    collegeName = "CICCC"; // ASSIGNMENT


    // IN CASE of Function

    sum(2, 4); // 

    function sum(a, b) { // DECLARATION
        return  a + b;
    }

     // The above is broken down by the interpreter like this

     function sum(a, b) { // DECLARATION
        return  a + b;
     }

     sum(2, 4); //  6

    //  https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/


    // In case of let and const keyword
    console.log(myAge); // Referential error because of temporal dead zone
    let myAge = 29;



   // Incase of Arrow Functions

   guessMyAge(); // This will give referential error

    let guessMyAge = () => {
        console.log('Your age is 28');
    }

// SECOND DIFFERENCE 
// You can write short hand in arrow functios as well

// Here you can remove curly braces because it only has 1 statement
// If one parameter you can remove () these as well
let multiply = a => console.log(a * 4);

let guessMyName = () => {
    console.log("Prabh is your first name"); // line 1
    console.log("Gambhir is your second name"); // line 2
}


// THIRD MAJOR DIFFERENCE (THIS KEYWORD)
// When we use arrow functions we change the current the context to global contenxt

var danielAge = 20;
let student = {
    firstName : "Daniel",
    danielAge: 28,

    getFirstName: function() {
        console.log(this.firstName); // student.firstName = "daniel"
    },
    getAge: () => {
        console.log(this.danielAge); // 20 , since we are using arrow functions it changes the context to global context
    }

}





// ES7
// ES8 

