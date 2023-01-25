
// Arrays

let fruits = ["Mangoes", "Apples", "Bannas", "Peaches"]; // List of strings

let numList = [1,2, 3, 40, 50]; // Numbers list

let boolList = [true, false, false , true]; // Boolean List

let mixList = [true, 12, "Mangoes", { } , null, undefined]; // mix array

// This proves that javascript is a also loosely typed language

console.log(mixList[2]); // Mangoes



// Push Method

let array1 = [1,2,3,4];

array1.push(5);

console.log(array1);

// Pop Method

array1.pop();

console.log(array1);


// UnShift Method  (opposite of push function)
array1.unshift(10);

console.log(array1);


// Shift Method (Opposite of pop function)
  
array1.shift();

console.log(array1);


// Includes Method

let checkValue = array1.includes(10);

console.log(checkValue);

// Reverse Method (Inplace Method, because it changed the orignal array)

let reversedArray = array1.reverse();

console.log(reversedArray);


// Slice Method (Its not in place, which means it doesn;t change the orignal array)

let slicedValue = array1.slice(0, 2); // It didn't include the 2nd index, because it includes 2 - 1 index 

console.log(slicedValue); // [4, 3]



let array = [20, 40, 50];
let slic = array.slice(0, 1);

console.log(slic); // [20]


// Splice Function (It can be used to delete, and add values inside array) (THIS IS IN PLACES, changes the orignal array)


let array2 = [20, 40, 60, 80, 100];


// Delete 3 items from the array
// array2.splice(0, 3);

array2.splice(2, 0, 20, 40, 50, 60);



console.log(array2);



// Arrays in const

const fruitsBasket = ['mango', 'apple', 'orange'];

// fruitsBasket = ['orange', 'grapes']; // Here we are reassignng the array, so it will give you error

fruitsBasket.push('grapes'); // You are adding values, and not reassigning hence it will work

console.log(fruitsBasket);



// Nested Arrays

let nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

