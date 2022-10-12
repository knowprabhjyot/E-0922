// Plus Operator

let sum = 3 + 4;

// Minus Operator

let subtraction = 10 - 4;


// Divide operator

let dividedValue = 10 / 2;

console.log(dividedValue);


// Multiply Operator

let multipliedValue = 3 * 4;
console.log(multipliedValue);


// Percentage , Remainder Operator

let remainder = 10 % 3;
console.log(remainder);


// Comparison Operators

// Greater Than
let value1 = 4 > 3;
console.log(value1);

// Less Than
let value2 = 4 < 3;

console.log(value2);

// Greater than and equals to  >=

// Lesser than and equals to   <=



// Advance Comparisons (Logical Operators)


// AND Operator (&&) ****************

// true && true --> true
// true && false  --> false
// false && true --> false
// false && false --> false


let value4 = false && false;
console.log(value4);


// Real Example if block

let num1 = 4;
let num2 = 5;
let num3 = 10;

// if (num2 > num1 && num3 > num2 {
//     console.log("Prabh is right ");
// } else {
//     console.log("Prabh is Wrong");
// }


// If any of the condition is wrong, then the output will be false
// if (num2 < num1 && num3 > num2) {
//     console.log("Prabh is right ");
// } else {
//     console.log("Prabh is Wrong");
// }


// OR Operator (||) ****************

// true && true --> true
// true && false  --> true
// false && true --> true
// false && false --> false


if (num2 < num1 || num3 < num2) {
    console.log("Prabh is right ");
} else {
    console.log("Prabh is Wrong");
}