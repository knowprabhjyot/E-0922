let array = [21,41,61,81, 11];

let checkValue = array.some((item) => {
    if (item % 2 === 0) {
        return true;
    }
})


let arrayOfPositiveNumbers = [20, 50, -10, -100];

let someValue = arrayOfPositiveNumbers.some((item) => item > 0);
let everyValue = arrayOfPositiveNumbers.every((item) => item > 0);
console.log(someValue, "SOME METHOD");
console.log(everyValue, "EVERY METHOD");