// Loops means running over and over again to achieve a task until a condition is met


// Types of Loops
// Infinite Loops --> These are the loops which go on and on and never end,
// because the condition was never met

// Finite Loops --> These are the loops which terminate when the condition is met

// Print numbers 0 --> 5


// FOR LOOPS ***********************************


// for (let count = 0; count <= 5 ; count++) {
//     console.log(count);
// }

// function printValues(startValue, endValue) {
//     for (let count = startValue; count <= endValue ; count++) {
//         console.log(count);
//     }
// }

// printValues(0, 5); // 0 1 2 3 4 5 
// printValues(2, 4); // 2 3 4
// printValues(1, 40); // 1 2 3 4 ...... 40


// let array = [1,2,3,4,5];


// function addValuesToArray(startValue, endValue) {
//     for (let count = startValue; count <= endValue ; count++) {
//         array.push(count);
//     }

//     console.log(array);
// }

// addValuesToArray(6, 10); // [1,2,3,4,5,6,7,8,9,10]


// WHILE LOOPS ***********************************

// let i = 0;

// while (i <= 5) {
//     i++;
//     console.log(i);
// }


// Loops with arrays
                    //  0         1          2          3
let fruitsArray = ["Apples", "Mangoes", "Oranges", "Pineapple"];

// for (let i = 0 ; i <= fruitsArray.length - 1 ; i++) {
//     console.log(fruitsArray[i]);
// }

// i = 0 , "Apples"
// i = 1, "Mangoes"
// i = 2, "Oranges"
// i = 3, "Pineapples"
// i = 4, Undefined 


// Loops with Strings

let userName = "Prabh";

for (let i = 0 ; i < userName.length ; i++) {
    console.log(userName[i]);
}



