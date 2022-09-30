

// Sorted Array Ascending

let ascSortedArray = [4, 5, 8, 10, 20, 40, 100];

// First value at ascSortedarray[0] --> Smallest value
// Last value at ascSortedarray[ascSortedArray.length - 1] --> Largest value

// Sorted Array Descending

let dscSortedArray = [100, 40, 20, 20, 10, 5, 4];

// First value at dscSortedarray[0] --> Largest value  100
// Last value at dscSortedarray[dscSortedArray.length - 1] --> Smallest value


let ascSortedStringArray = ["Dec", "Feb", "Jan"]; // D > F > J



// Sorting Via Javascript inbuilt function .sort()

let unsortedArray = ["Feb", "April", "May", "December", "July"];


console.log(unsortedArray.sort()); // [ 'April', 'December', 'Feb', 'July', 'May' ]

console.log(unsortedArray, "orignal array"); //  [ 'April', 'December', 'Feb', 'July', 'May' ]


// THe orignal is also modified because sort() changes array inplace
// Another example - splice()

// Same operation of sorting on numbers how we can do that ?

let unSortedNumArray = [100, 4, 5, 11, 0, 20, 3, 4]; 

// Our Expected Output - [0, 3, 4,4, 5, 11, 20, 100];
// What we got ! [ 0, 100, 11, 20, 3,   4,  4,  5 ]

console.log(unSortedNumArray.sort());

// .sort() function changes the elements in the array to string first and then compares it and that's why we don't get the expected output

// So when num is converted to string, it compares between strings, because of which it works on the basis of UTF 16 code


// So lets to try fix it


function compareFun(a, b) {

    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    // They were equal numbers
    return 0;

}

console.log(unSortedNumArray.sort(compareFun));




// Descending sorting for numbers
function compareFunDesc(a, b) {

    if (a > b) {
        return -1;
    }

    if (a < b) {
        return 1;
    }

    // They were equal numbers
    return 0;

}

console.log(unSortedNumArray.sort(compareFunDesc), "Descending fashion");
// Output
// [
//     100, 20, 11, 5,
//       4,  4,  3, 0
//   ]


// Sort might be running recursion or Loop which works well along with the compare function


// Polyfills in Javascript



// Bubble Sort with JS




// WHEN WE TRY TO SWAP 2 VALUES

// [10, 5];  // [5, 10]
// array[0] = 10;
// array[1] = 5;

// let temp = array[0];   
// array[0] = array[1]; 
// array[1] = temp;


// Temp     array[0]        array[1]
// 10          10              5

// 10          5               5

// 10          5               10



function bubbleSort(array) {

    for (let i = 0 ; i < array.length;i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                // Swap Elements
                let temp = array[j]; // Tempoary variable
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        } // O (n)
    } // O (n)

    // Nesting --> O (n) * O (n) = O(n^2)

    return array;
}

// array = [10, 3, 4, 5, 10 , 11, 20];

let array = [10, 3, 4, 5, 10 , 11, 20];

console.log(bubbleSort(array));

// array = [10, 3, 4, 5, 10 , 11, 20];



// Explanation

// i    j     array[j]    array[j+1] array[i]    temp           array
// 0    0       3              10        10       10        [3, 10, 4, 5, 10 , 11, 20];
// 0    1       4             10         3        10       [3, 4, 10, 5, 10 , 11, 20];
// 0    2       5           10           3        10       [3, 4, 5, 10, 10 , 11, 20];
// 0    3       10          10          3          -        [3, 4, 5, 10, 10 , 11, 20];
// 0    4       10          11          3          -      [3, 4, 5, 10, 10 , 11, 20];
// 0    5       11          20          3          -        [3, 4, 5, 10, 10 , 11, 20];
// 1    0       3           4           3           -       [3, 4, 5, 10, 10 , 11, 20];
// 1    1       4           5           3           -       [3, 4, 5, 10, 10 , 11, 20];



// Best Case Scenario
let inputArray = [1,2,3,4,5];

bubbleSort(array); // O(n)


// Worst Case Scenario
let newArray = [10, 3, 4, 5, 10 , 11, 20]; // O(n^2)


// https://www.geeksforgeeks.org/bubble-sort/
// https://flexiple.com/javascript/bubble-sort-javascript/




// Selection Sort 

let numListArray = [20, 100, 4, 2, -10, -100, 50]; // [-100, -10, 2, 4, 20, 50, 100];

function selectionSort(array) {
    
    for (let i = 0 ; i < array.length; i++) {   
        let min = i; // 2
        for (let j = i + 1; j < array.length; j++) {

            if (array[j] < array[min]) {
                min = j;
            }
        }

        if (min !== i) {

            // If i and min are not equal we will swap the elements
            let temp = array[i];   // 100
            array[i] = array[min];  // -10
            array[min] = temp; // 100
        }
    }

    return array;
}


// Implementation

// Cycle 1
// i     j            min      array[j]       array[min]  
// 0     1 (0 + 1)      0         100              20       
// 0     2              2         4                20
// 0     3              3         2                 4     
// 0     4              4       -10                 2
// 0     5              5       -100                -10
// 0     6              5        50                 -100

// Cycle 2
// i     j (i  + 1)            min      array[j]       array[min]  
// 1     2                      2       4                  100
// 1     3                      3        2                  4
// 1     4                      4       -10                 2
// 1     5                      4          20               -10 
// 1     6                      4       50                  -10

// Cycle 3


// Cycle 4


// Cycle 5


// SO FAR AFTER FIRST ITERATION i = 0 = i + and j = i + 1 ---> array.length

// Now the array became

// Cycle 1
// [-100, 100, 4, 2, -10, 20, 50];


// Cycle 2
// [-100, -10, 4, 2, 100, 20, 50];


// Cycle 3



// Cycle 4


// Cycle 5


// We are trying to update the min index value to that index value where the minimum value is found so far

console.log(selectionSort(numListArray))




// AKITO'S SOLUTION 

function bubbleSort(array) {

    let count = 0;
    
    for (let i = 0 ; i < array.length;i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
        	count++;
            if (array[j] > array[j + 1]) {
                // Swap Elements
                let temp = array[j]; // Tempoary variable
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        } // O (n)
    } // O (n)

        		console.log(count, "first soultion");

    // Nesting --> O (n) * O (n) = O(n^2)

    return array;
}

let oddArrayLength = [20, 5, 1, 2, 10, -10, 0];

console.log(bubbleSort(oddArrayLength));
