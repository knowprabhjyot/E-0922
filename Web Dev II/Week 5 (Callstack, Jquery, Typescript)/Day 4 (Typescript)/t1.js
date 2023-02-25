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
