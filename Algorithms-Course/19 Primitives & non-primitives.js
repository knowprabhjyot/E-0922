// Primitive datatypes are those where pass by value is used
// Example - number, string, boolean, undefined and null

let a = 4;
let b = a;

console.log(a, "before change");
console.log(b, "before change");


a = 10;

console.log(a, "after change");
console.log(b, "after change");


// Non-Primitive Datatypes are those where pass by reference is used.
// Example - Object

let obj1 = {
    name: "Prabh"
}

let obj2 = obj1;


console.log(obj1.name, "before change");
console.log(obj2.name, "before change");


obj1.name = "Daniel";


console.log(obj1.name, "after change");
console.log(obj2.name, "after change");


let array1 = [1,2,3];
let array2 = array1;

console.log(array1, "before change");
console.log(array2, "before change");

array1[2] = 4; 

console.log(array1, "after change");
console.log(array2, "after change");

