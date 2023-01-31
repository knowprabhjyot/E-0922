// REDUCE
// Reduce is HOF(Higher Order Function ) where you can reduce the whole array to  a single value

// For Example
let numList = [1,2,3,4,5,6];

// Sum of the array // 21

// However REDUCE can also be used to acheive a functionality just like filter and Map


function findSum(array) {
    let sum = 0;
    for (let i = 0 ; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log(sum);
    return sum;
}

findSum(numList);


// Here accumulator means sum in the above function
// currentValue is the array[i]
let finalSumValue = numList.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 here is the initial Value 

console.log(finalSumValue, 'using reduce');


// Multiplication

let multipliedValue = numList.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
}, 1); // initial value = 0

console.log(multipliedValue);


// Maximum value inside an array

let arrayOfNumbers = [20, -400, -10, 50, 160, -20, -11, 200];


function findMax(array) {
    let max = -Infinity; // Max = 160

    for (let i = 0 ; i < array.length ; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    console.log(max);
    return max;
}

findMax(arrayOfNumbers);

// Same logic using Reduce as welll

let maximumValue = arrayOfNumbers.reduce((accumulator, currentValue) => {
    
    if (currentValue > accumulator) {
        return currentValue;
    }

    return accumulator;

}, -Infinity);

console.log(maximumValue, "USING REDUCE");


let arrayOfStrings = ["hello", "helloworld", "hi", "yo!"];

// 5, 
let output = arrayOfStrings.reduce((accumulator, currentValue) => {
    if (currentValue.length > accumulator.length) {
        return currentValue;
    } 

    return accumulator;

}, arrayOfStrings[0]);

console.log(output);

