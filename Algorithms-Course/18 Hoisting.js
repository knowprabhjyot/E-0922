
console.log(a); // undefined and not the error

var a = 5;

// Hoisting 
// hoisting is a concept where variables 
// declared from var keyword or functions declared from "function" keyword
// are pushed to the top of the scope

console.log(b); // Reference Error


let b = 10;


// What happens behind the scene
// Declaration / Definition
// Assignment / Call
var a;
console.log(a); // undefined 
a = 10;

console.log(c);  // Error Reference (Temporal Dead Zone)
let c = 100;




// Functions

function printName() {
    console.log("Prabh");
}

printName(); // Prabh


// The above concept is called as hoisiting, when function or var variables are accessed
// before there are declared

