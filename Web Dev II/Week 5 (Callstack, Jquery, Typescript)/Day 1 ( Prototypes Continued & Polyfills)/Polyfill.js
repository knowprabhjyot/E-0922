// What is Polyfil ?

// Polyfill is a way through which you can provide functionality as an alternative if the browser is not compatible with existing functions

// map

let array = [1, 2, 3, 4, 5, 6];

// Multiply each number by 2

// [1, 2, 3, 4, 5, 6];  ---> [ 4, 8 ]  --> [2, 4, 6, 8, 10 , 12];
let newArray = array.map((item) => {
    return item * 2;
})

// What if this map function exits,but your browser doesn't understand it
// This means you have to provide an alternative which i will also call as polyfill so that your browsers understands it.


Array.prototype.mapify = function(callback) {
// First step is the function map takes a parameter called as callback
// Second step is where this map function is applied ? Its applied on the current Array === current Context
 let array = this;    // This keyword refers to the current context == the array on which it was called
 
 // Third Step - Creating a new array because the map function returns a new array and doesnt change the orignal one
 let modifiedArray = [];

// Fourth Step -  map function runs a loop behind the seen
 for (let i = 0 ; i < array.length; i++) {
    // Fifth step is callback returns a modified value after every iteration where the parameter is the current element
    let modifiedValue = callback(array[i], i);
    
    // Sixth Step is we push that modified value inside our own new created Array
    modifiedArray.push(modifiedValue);
 }

 return modifiedArray;

}

let newArrr = [20, 40, 50];

newArrr.map((item) => item * 2); // This is existing map function
newArrr.mapify((item) => item * 2); // This is our function

// IF MAP function is not understood by the browser, and your want to name the function as map only

if (!Array.prototype.map) { // Corner case which an interviewer might  be happy to see
    Array.prototype.map = function(callback) {
        let array = this;    // This keyword refers to the current context == the array on which it was called
 
        // Third Step - Creating a new array because the map function returns a new array and doesnt change the orignal one
        let modifiedArray = [];
       
       // Fourth Step -  map function runs a loop behind the seen
        for (let i = 0 ; i < array.length; i++) {
           // Fifth step is callback returns a modified value after every iteration where the parameter is the current element
           let modifiedValue = callback(array[i]);
           
           // Sixth Step is we push that modified value inside our own new created Array
           modifiedArray.push(modifiedValue);
        }
       
        return modifiedArray;
    }
}


// filter

let arrayList = [20, -10, 100, -50, 5];
// I want to make a new Array where i want to filter the positive numbers only
let positiveLit = array.filter((item) => {
    if (item > 0) {
        return true;
    }
})

// [20, 100, 5];

// Polyffill for Filter function ()
Array.prototype.filterify = function(callback) {
    let array = this;
    let filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {  // if this condition returns true only then i add it inside my new array
            filteredArray.push(array[i]);
        }
    }

    return filteredArray;
}


// Try to write down the polyfill for Foreach function

