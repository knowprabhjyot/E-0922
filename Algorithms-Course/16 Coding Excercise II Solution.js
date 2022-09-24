// Print all the odd numbers from 0 → n , where n will be dynamic inside a function

function printOddNumbers(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      console.log(i, "Odd Number");
    }
  }
}

printOddNumbers(20);
printOddNumbers(100);

// Write a function that takes an array as a parameter and calculates the sum of the numbers
// inside the array

let numList = [1, 2, 3, 4, 5, 6]; // 1 + 2 + 3 + 4 + 5 + 6 → 21

function sumOfElements(array) {
  // Write your logic here, // HINT: FOR LOOP

  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    // let sum = 0; // If we declare sum inside,  The problem will be whenever the loop  runs the sum will reassigned to be 0
    sum = sum + array[i]; // 1
  }
  return sum;
}


// i       array[i]    sum
// 0        1           0 + 1 = 1
// 1        2           1 + 2 = 3
// 2        3           3 + 3 = 6
// 3        4           6 + 4 = 10
// 4        5           10 + 5 = 15
// 5        6           15 + 6 = 21

console.log(sumOfElements(numList));



// Write a function that takes an array as a parameter and returns the largest number inside that
// array
let numbersList = [ 20, 40, -10, 5, 40, 5, 11]; // 40
function largestNumber(array) {
// Write your logic here
// Print the largest number inside the array // 40
    let max = array[0]; // 20
    for (let i = 1 ; i < array.length ; i++) {
        if (array[i] > max) {  // 11 > 40 // false
            max = array[i];  // 40
        }
    } // loop breaks here

    return max;
}

let largestValue = largestNumber(numbersList); // 40
console.log(largestValue);

largestNumber(numList); // 6