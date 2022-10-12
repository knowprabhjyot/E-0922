// Question 1; (ADVANCE)
// Write a function that checks if an array is sorted ?
// Let numList = [1,2,3,4,5,6];
// Sorted array means the value starting —&gt; End , it should be either increasing
// Or decreasing

// [ 1 , 2, 5, 6, 11, 20 ] // Ascending
// [ 10 , 11, 20 , 5, 4, 20]

let numList = [1,2,5,4,5,6];

function ascnedingSortedList(array) {
// Write your logic here, // HINT: FOR LOOP
    let j;
    for (let i = 0; i < array.length; i++ ) {
        j = i + 1;
        if (array[i] > array[j]) { // Ascending Order
            return false;
        }
    }

    return true;
}


// Time Complexity - O(n)

// O(n) === O(n+1), O(n+100)

// O(n) !== O(n) * O(n) === O(n^2)


function descendingSortedList(array) {
    // Write your logic here, // HINT: FOR LOOP
        let j;
        for (let i = 0; i < array.length; i++ ) {
            j = i + 1;
            if (array[i] < array[j]) { // Ascending Order
                return false;
            }
        }
    
        return true;
}


let descendingList = [ 50, 10, 4, 4, 2, 1];

console.log(descendingSortedList(descendingList));


// Time Complexity = O(n)

// sortedList( [ 50, 10, 4, 4 , 2, 3])

function sortedList(array, direction) {


        if (Array.isArray(array) === false) {
            console.log("Input type for array is incorrect");
        }

        if (typeof direction !== "string") {
            console.log("Parameters passed are incorrect");
            return false;
        }

        if (direction === "asc" ) {
            ascnedingSortedList(array); // O (n)
        } else {
            descendingSortedList(array); // O (n)
        }    
}

// Time Complexity - O(n) ---> O(n) + O(n)

// sortedList(20, "asc")

// let numList = [4,5,6,7,8];

// // Instance of Array Class
// let array1 = new Array(1,2,3,4,5);

// console.log(numList, "First ARray");
// console.log(array1, "Second Arrray");


// console.log(Array.isArray(numList));




/// Question 2

// Write a function to check if there are duplicates in a sorted array ?
// let nums = [ 2, 10, 12, 12, 40, 50]; //



function duplicatesArrayInSorted(array) {
// Write your logic here

    // If there is any duplicate i can return value
    for (let i  = 0 ; i < array.length; i++) {
        if (array[i] === array[i+1]) {
            return array[i];
        }
    }
}

// Time Complexity - O(n)

// [ 2, 10, 12, 12, 40, 50]; //

// i    i+1     array[i]        array[i+1]
// 0     1      2               10
// 1     2      10              12
// 2     3      12              12 // array[i]



// HINT - You have to use 2 for loops nested to solve this problem
// Write a function to check if there are duplicates in an array ?
// Let numList = [ 20, 40, -10, 5, 40, 5, 11]; //

// BRUTE FORCE ---> it means a very bad solution, in which we are trying to test all possibilities

function findDuplicatesInUnsortedArray(array) {

    for (let i = 0 ; i < array.length ; i++) { // O(n)
        for (let j = i + 1; j < array.length; j++) { // O(n)
            if (array[i] === array[j]) {
                return true; // There is a duplicate
            }
         }
    }

    return false;
}

// Time Complexity - O(n^2)


let numberList = [ 20, 40, -10, 5, 100, 11]; //


console.log(findDuplicatesInUnsortedArray(numberList));


// .sort() // O(n log n)

// O (nlogn)

// O(logn)


// function duplicateInArray() {
    // Sort this array .sort() // O(nlogn)
    // duplicatesArrayInSorted()  // O(n)

    // Total time complexity = O(nlogn) + O(n) --->  O(nlogn)

    // Logarithm

// }

// We improved our solution from O(n^2) ---> O(nlogn)