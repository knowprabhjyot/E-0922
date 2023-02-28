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

type Company = {
    name: string,
    address: string,
    numberOfDepartments: number
}

type Employee = {
    name: string,
    email: string,
    age: number,
    company: Company
}

let employee: Employee = {
    name : "Prabh",
    age: 28,
    email: "prabh@ciccc.ca",
    company: {
        name: "CICCC",
        numberOfDepartments: 10,
        address: "Vancouver"
    }
}

// Interfaces
interface Student {
    name: string,
    // Question mark means that this field is optional
    rollNumber?: number | string | undefined,
    isGraduated: boolean
}

interface Point {
    x: number;
}

interface Point {
    y : number;
}

let point1 : Point = {
    x : 20,
    y : 40
}

let student1: Student = {
    name: 'Mike',
    isGraduated: false,
    // rollNumber: undefined
}

// Enum
// It is a type of data structure where you can save constant data

enum College {
    name = "Cornerstone",
    address = "Vancouver"
}

console.log(College);


// UNIONS
let age: number | string | boolean = true;


// Generic Type

// oldway of writing a function
function printArray(array: any) {
    return array;
}
let a1 = [1,2,3];
let a2 = ['1','2','3'];
printArray(a1);
printArray(a2);

function printArray2<T>(array: T): T {
    return array;
}

printArray(a1);
printArray(a2);

// Another Example

function concatArray<T>(items: T[]) : T[] {
    return new Array<T>().concat(items);
}

let array1 = concatArray<number>([1,2, 3]);
let array2 = concatArray<string>(['hello', ' ', 'world']);
const array3 = concatArray<boolean>([true, false]);

console.log(array2, "Value");

// Tuples
let studentArray : [number, string , boolean] = [1, 'Daniel', true];


// Type Assertions

let id: any = 2;

let numberID = <number>id;
// numberID = "helloworld"; // Not allowed

let numID = id as number;

// import { Component as XYZ } from '../'
