// Callback Functions

// When a function is passed as a parameter to another function its called
// as funciton callback


function printName() {
    console.log("prabh");
}

// SO here callback is passed as a parameter
function greet(callback) {

    // We are calling that parameter since its a function
    // callback();
    callback();
    console.log("Print me after printing prabh");
}

greet(printName);

// call greet with printname as a paramater
// call the parameter which is printName
// console.log(Prabh)



// Multiple parameters as functions


function a(funB, funC) {
    funB();
    funC();
}

function b() {
    console.log("I am B");
}

function c() {
    console.log("I am C");
}

a(b, c);