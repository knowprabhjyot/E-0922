// Functions


// Function Declaration
function greeting() {
    console.log('Hey Daniel!');
}


// Function Execution/Calling 
greeting();


greeting();


// Function with parameters

function greetingWithParams(name) {
    console.log('Hey ' + name);
}


greetingWithParams('Prabh');

greetingWithParams('Mike');


// Find sum of 2 numbers

function sum(a, b) {
    console.log(a + b);
}

sum(2, 3); // 5

sum(10, 20); // 30


// String Literals

// Function with parameters but with string literals

function greetingWithParamsLiteral(name) {
    console.log(`Hey ${name}`);
}


greetingWithParamsLiteral('Prabh');


// Function with return


function multiply (a, b) {
   return  a * b;

   console.log("hi"); // Because the function ends on return statement
}

let value = multiply(10 , 20);

console.log(value);


// Scopes

let age = 20;

function getAge() {
    let age = 30; // This priority is given here!

    if (age > 20) {
        let age = 40;
        console.log(age); // 40
    }

    console.log (age); // 30
  
}


getAge(); //30


// Lexical Scope
function suma(a) {
    function sumb(b) {
        console.log(a + b);
    }

    sumb(20); // b = 20
}

suma(40); // a = 40 

/// 60


// Function Expression (Asigning function to a varial

let output = function divide(a, b) {
    return a / b;
}

console.log(output(20, 2));



// HIGHER ORDER FUNCTIONS - Those functions which accept a parameter as a function


function sayHi(fn) {
    fn();
}

function greeting() {
    console.log("Hey Everyone!");
}

sayHi(greeting);


/// Function returning another function

function sumify(a) {
    return function(b) {
        return a  + b;
    }
}


// CLosure
let val1 = sumify(4); // sumify was returning a function and we assigned to val1

let finaloutput = val1(10);

console.log(finaloutput);


// You can also write the above as

// let val2 = sumify(20)(30);

