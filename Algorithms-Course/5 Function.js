// Write a function that prints the sum of 2 numbers (4, 5)

// Declaration/Definition of a function
// function sum() {
//     let a = 4;
//     let b = 5;
//     console.log(a + b);
// }

// Function Call
// sum();

// Here a, b are the parameters that will change based on given input
function sum(a, b) {
    console.log(a + b);
}


// Here a, b are the parameters that will change based on given input

sum(2, 3); // 5
sum(4, 9); // 13
sum(-5, 2); // -3


// Here name is a parameter passed to the function greetUser
function greetUser(name) {
    // Here plus sign behaves as concatenation since we are using strings
    console.log('Hello ' + name);
} // returned value will be undefined



// Write a function to print area of a circle for given radius
// function areaOfCircle(radius) {
//     // We won't take PI (3.14) as parameter since its value is always fixed
//     console.log("Area of circle is" , 3.14 * radius * radius);
// }


// areaOfCircle(3);

// function myName(name) {
//     return 'Hi ' + name;
// }

// let prabh = myName('Prabh');

// console.log(prabh);



// function myName(name) {
//     console.log('Hello ' + name);
// }

// let prabh =  myName("prabh");

// console.log(prabh, "Final output");



// Lets try to play with numbers

// function areaOfCircle(radius) {
//     // return 3.14 * radius ** 2;
//     console.log(3.14 * radius ** 2);
// }

// console.log(areaOfCircle(4), "final value");

// let areaMultipledBy2 = 2 * areaOfCircle(4);


// console.log(areaMultipledBy2);


// function getLongLat() {
//     let long = 100 * 2 - 50; // Fake calculatio;
//     return long;
//     // returned value is 150
// }

// let longValue = getLongLat();

// console.log(longValue, "long value");





// let longLat = getLongLat(); // 150

// function getDistance(long) {
//     console.log(long);
// }

// getDistance(longLat);



/// ANOTHER EXAMPLE FOR RETURN STATEMENT

function addTen(number) {
    let newNumber = number + 10;
    return newNumber;
}

let newValue = addTen(5);

console.log(newValue);


// What happens when javascript function is returning something and we write something after the return statement
function multiply(num1, num2) {
    return num1 * num2;
    console.log("Hello am i reachable");
}

