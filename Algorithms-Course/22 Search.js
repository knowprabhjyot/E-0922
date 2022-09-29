let numList = [10, 20, 40, 50 , 11, -10, 30, 5];


function searchElement(array, target) {


    //Corner Cases
    if (array.length === 0) {
        return -1;
    }

    
    for (let i = 0 ; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    // Generally when we talk about indexes, if the value is not found we return -1
    return -1;
}

const foundIndex = searchElement(numList, 1000);

console.log("Found Index for -10 is ", foundIndex);




// FindIndex Method in Javascript *************************

// let numList = [10, 20, 40, 50 , 11, -10, 30, 5];


// let foundValue = numList.findIndex(function (val) {
//     if (val === 50) {
//         return true;
//     }
// }
// )

function callback(val) {
    if (val === 100000) {
        return true;
    }
}


let foundValue = numList.findIndex(callback);
console.log(foundValue, "found value");

// Find Method in Javascript *************************

function callback(val, index) {
    if (val === 50) {
        // console.log(index, "Index");
        return true;
    }
}

let findValue = numList.find(callback);

console.log(findValue, "Value");



// Index of ************************

let findIndexValue = numList.indexOf(10000);

console.log(findIndexValue, "indexOf");



// BINARY SEARCH

let sortedArray = [20, 40, 50, 80, 100, 200];

function binarySearch(array, target) {

    let low = 0;
    let high = array.length - 1;
    // let mid 

    while (high >= low) {
        let mid = Math.floor((low + high) / 2);

        if (target === array[mid]) {
            return mid;
        }

        if (target > array[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

    }

}


// Time Complexity = O(logn)

console.log(binarySearch(sortedArray, 400), "Found Value at index");