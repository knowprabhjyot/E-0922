

// Local Scope (Block)
let a = 4;
let b = 5;

if (b > a) { // true
    let success = "Yes b is greater than a"; // the life of this variable is inside the if block only
} else {
    let noSuccess = "Yes a is greater than b";
}

// console.log(success); // ReferenceError: success is not defined


// ********************************

// Function Scope


function sum () {
    let myName = 'Prabh'; // Variable here (which means its block scope is function)

    if (4 > 3) {
        var mySurName = "Gambhir"; // Function Scope
        console.log(myName); // This variable is accessible inside if, because the scope of myName variable is function which is the parent of if block
    }

    console.log(mySurName); // Function scope

}

sum();



// Global Scope
let myName = "prabh";

console.log(myName); // This variable is accessible in the global scope because it is not wrapped inside  a block

