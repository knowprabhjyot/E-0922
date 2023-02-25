// What is typescript ?
// In Laymen terms typescriopt ===> javacript + Types

// What are types ?
// When we declare a variable, or whenever a function returns something or

// let userName = 'prabh';

let userName: string = "Prabh";
let userAge: number = 28;

// userAge = 'Twenty Eight'; // This is not a valid Operation

let isHappy: boolean = true;

let unoknown: any = "string";
unoknown = 28;

console.log(userName);

// Array 
let fruitsList : string[] = ['apple', 'mango','orange'];

// fruitsList = [2, 4, 5]; // this wil throw an error

let  numArray: number[] =  [2, 4, 6, 8];

let randomArray: any = [2, 'hello', 'how', true];

// Object

let car: object = {
    make: "BMW",
    model: "3 Series"
} 
 
// // Type Car

// let car : Car = {

// }


// Function 
function greeting(name: string, age: number): string {
    return `Hello ${name} you are ${age} years old`;
}

console.log(greeting('Prabh', 28));

// Types

// Classes

// Interfaces

// Enum

// UNIONS

// Generic Type

// Tuples

// Lodash
