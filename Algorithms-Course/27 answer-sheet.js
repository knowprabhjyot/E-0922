// calculates the sum of its elements.
// @param {number[]} arr - the array to sum
function sum(array) {
    // your code here
    var total   = 0;
    // total declared outside of the loop for scope reasons.
    for (var i = 0; i < array.length; i++) {
        // iterate through the array
        total += array[i];
        // total = total + array[i];
        // total is incremented by the value of the array at the current index.
    }
    // return the total
    return total;
}

console.log(sum([-1, 3, 11, 7, 2, 9, 10]));

// Write a function that takes in a string and returns a new string. The new string should be the same as the original with every duplicate character removed.
// @param {string} str - the string to remove duplicates from
function removeDuplicates(str) {
    // your code here
    var newString = "";
    // newString declared outside of the loop for scope reasons.
    for (var i = 0; i < str.length; i++) {
        // iterate through the string
        if (newString.indexOf(str[i]) === -1) {
            // if the newString does not contain the current character
            newString += str[i];
            // add the current character to the newString
        }
    }
    // return the newString
    return newString;
}

console.log(removeDuplicates("  "));
console.log(removeDuplicates("hello"));

// newstring    i      str[i]
//  ""          0      h
// "h"          1      e
// "he"         2      l
// "hel"        3       l
// "hel"        4       o
// hell


// Write a recursive function called 'productOfArray' which takes in an array of numbers and returns the product of them all.
// @param {number[]} arr - the array to multiply
function productOfArray(arr) {
    // your code here
    if (arr.length === 0) {
        // if the array is empty
        return 1;
        // return 1
    }
    // return the first element of the array multiplied by the product of the rest of the array.
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60


// arr            arr[0]   arr.slice(1)       arr[0] * productArray(arr.slice[1])
// [1,2,3]         1          [2,3]               1 * productArray([2,3]) ===> 1 * 6 ===> 6
// [2,3]           2            [3]             2 * productArray([3]) --> 2 * 3 ===> 6
// [3]             3            []              3 * productArray([]) ---> 1 --> 3 * 1 ==> 3
// []                             



// OTHER SOLUTUON USING LOOP
function multiply(array) {
    // your code here
    var total   = 1;
    // total declared outside of the loop for scope reasons.
    for (var i = 0; i < array.length; i++) {
        // iterate through the array
        total *= array[i];
        // total = total * array[i];
        // total is incremented by the value of the array at the current index.
    }
    // return the total
    return total;
}



// Write a recursive function called 'reverse' which accepts a string and returns a new string in reverse.
// @param {string} str - the string to reverse
function reverse(str) {
    // your code here
    if (str.length === 0) {
        // if the string is empty
        return "";
        // return an empty string
    }
    // return the last character of the string concatenated with the rest of the string reversed.
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}


// Reverse str


// let a = "awesome";
// reverseUsingLoop(a); // emosewa

function reverseUsingLoop(str) {
    let reverseStr = "";

    for (let i = str.length - 1 ; i > 0 ; i--) {
        reverseStr = reverseStr + str[i];
    }
}

// reverseStr     i             str[i]
// ""             6             a
// "e"            5             m
// "em"           4





console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'

// Write a recursive function called 'isPalindrome' which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.
// @param {string} str - the string to check
function isPalindrome(str) {
    // your code here
    if (str.length === 0 || str.length === 1) {
        // if the string is empty or has a length of 1
        return true;
        // return true
    }
    if (str[0] === str[str.length - 1]) {
        // if the first character of the string is the same as the last character of the string
        return isPalindrome(str.slice(1, str.length - 1));
        // return the result of isPalindrome with the first and last character removed.
    }
    // return false
    return false;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true

// How to swap 2 variables without a temporary variable?
let a = 2;
let b = 3;

function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(a, b);
}


// A prime number is a positive integer that is only divisible by 1 and itself. For example, 2, 3, 5, 7, 11 are the first few prime numbers. Count the number of prime numbers less than a non-negative number, n
// @param {number} n - the number to count primes up to
function countPrimes(n) {
    // your code here
    var count = 0;
    // count declared outside of the loop for scope reasons.
    for (var i = 2; i < n; i++) {
        // iterate through the numbers up to n
        if (isPrime(i)) {
            // if the current number is prime
            count++;
            // increment count
        }
    }
    // return count
    return count;
}

// @param {number} n - the number to check if prime
function isPrime(n) {
    // your code here
    for (var i = 2; i < n; i++) {
        // iterate through the numbers up to n
        if (n % i === 0) {
            // if n is divisible by i
            return false;
            // return false
        }
    }
    // return true
    return true;
}




console.log(countPrimes(10)); // 4
console.log(countPrimes(0)); // 0
console.log(countPrimes(1)); // 0
