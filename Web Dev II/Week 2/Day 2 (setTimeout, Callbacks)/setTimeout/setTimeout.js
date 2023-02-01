// SetTimeout

function sayHi() {
    console.log("hello!");
}

// Execute this function after 5 seconds

// Not part of javascript engine, its actually part of the web browser and node
setTimeout(sayHi, 5000);


// Execute after 10 seconds
setTimeout(sayHi, 10000);

setTimeout(function() {
    console.log("Hey");
}, 1000);


// setInterval

// If you want to fire a function regularly/consistenly after the given delay, then we use setInterval


setInterval(sayHi, 2000); // This will keep on calling sayHi functio after 2 seconds

let timer = setInterval(sayHi, 3000);

clearInterval(timer); // This will stop the interval as well


// SetInterval and SetTimeout work together ?
let count = 0;
let timer1 = setInterval(() => {
    count += 2;
    console.log(count);
}, 1000);


setTimeout(() => {
    clearInterval(timer1);
}, 5000);
