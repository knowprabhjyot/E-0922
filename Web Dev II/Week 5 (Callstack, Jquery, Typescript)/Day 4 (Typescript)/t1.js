// What is typescript ?
// In Laymen terms typescriopt ===> javacript + Types
// What are types ?
// When we declare a variable, or whenever a function returns something or
// let userName = 'prabh';
var userName = "Prabh";
var userAge = 28;
// userAge = 'Twenty Eight'; // This is not a valid Operation
var isHappy = true;
var unoknown = "string";
unoknown = 28;
console.log(userName);
// Array 
var fruitsList = ['apple', 'mango', 'orange'];
// fruitsList = [2, 4, 5]; // this wil throw an error
var numArray = [2, 4, 6, 8];
var randomArray = [2, 'hello', 'how', true];
// Object
var car = {
    make: "BMW",
    model: "3 Series"
};
// // Type Car
// let car : Car = {
// }
// Function 
function greeting(name, age) {
    return "Hello " + name + " you are " + age + " years old";
}
console.log(greeting('Prabh', 28));
var employee = {
    name: "Prabh",
    age: 28,
    email: "prabh@ciccc.ca",
    company: {
        name: "CICCC",
        numberOfDepartments: 10,
        address: "Vancouver"
    }
};
var point1 = {
    x: 20,
    y: 40
};
var student1 = {
    name: 'Mike',
    isGraduated: false
};
// Enum
// It is a type of data structure where you can save constant data
var College;
(function (College) {
    College["name"] = "Cornerstone";
    College["address"] = "Vancouver";
})(College || (College = {}));
console.log(College);
// UNIONS
var age = true;
// Generic Type
// oldway of writing a function
function printArray(array) {
    return array;
}
var a1 = [1, 2, 3];
var a2 = ['1', '2', '3'];
printArray(a1);
printArray(a2);
function printArray2(array) {
    return array;
}
printArray(a1);
printArray(a2);
// Another Example
function concatArray(items) {
    return new Array().concat(items);
}
var array1 = concatArray([1, 2, 3]);
var array2 = concatArray(['hello', ' ', 'world']);
console.log(array2, "Value");
// Tuples
var studentArray = [1, 'Daniel', true];
// Type Assertions
var id = 2;
var numberID = id;
// numberID = "helloworld"; // Not allowed
var numID = id;
// import { Component as XYZ } from '../'
