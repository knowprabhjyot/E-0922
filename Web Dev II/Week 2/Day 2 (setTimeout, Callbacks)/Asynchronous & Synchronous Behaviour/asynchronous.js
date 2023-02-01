// Synchronous 
// Javascript is a synchronous single threaded language

console.log('1');

console.log('2');

console.log('3');

console.log('4');

console.log('5');

// 1 2 3 4 5


// Asynchronous behaviour, it means that javascript won't wait if a particular statement takes time to execute

// setTimeout, is a very beautiful example of how we can achieve asynchronous behaviour

console.log(1);

setTimeout(() => {
    console.log(2);
}, 2000);

console.log(3);


// Another Example

console.log(1);

setTimeout(() => {
    console.log(2);
}, 3000);


console.log(3);

setTimeout(() => {
    console.log(4);
}, 1000);

console.log(5);

setTimeout(() => {
    console.log(6);
}, 0);



// Another Example

setTimeout(() => {
    console.log(1);
}, 0);

setTimeout(() => {
    console.log(2);
}, 0);

setTimeout(() => {
    console.log(3);

}, 0);

console.log(4);

// Diego 1 2 3 4
// 4 1 2 3 (abed) (CORRECT)


// Please study online what are Promises!

// Fetch API

// MOVIE APP!