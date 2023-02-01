// SPREAD OPERATOR

let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [7, 8, 9, 10, 11];

// Concatenate or Merge both arrays
// [ 7, 8, 9, 10, 11];

let combinedArray = [...array1, ...array2]; 
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

let combinedArrayConcat = array1.concat(array2); // Alternate way of doing it


// More example 

let prabhObject = {
    address: "Vancouver",
    email: "prabh@ciccc.ca"
}

let student = {
    name: "Prabh",
    college: "CICCC",
    age: 28,
    ...prabhObject // Spread operator
}





// Another Example

let array = [10, 200, -10, 60, 100]; // 200

// Reduce to find maximum value
// Math.max

let maxValue = Math.max(...array); // Math.max accepts values liek Math.max(12, 20, 40, 50)

console.log(maxValue, "MAX VALUE");



// Iterable --> Spreading into individual values (SPREAD OPERATOR)

// Individual items --> Rest/add  it in an array (REST OPERATOR)