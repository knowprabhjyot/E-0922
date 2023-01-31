`reduce()` is a built-in JavaScript function that allows you to iterate over an array and cumulatively reduce its elements to a single value. The `reduce()` function takes a callback function as its first argument, which is applied to each element of the array, and an optional second argument, which is the initial value for the accumulator.

Here's an example of how to use `reduce()` to sum the elements of an array:

```js
let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 15
```

In this example, the `reduce()` function applies the callback function `function(accumulator, currentValue) { return accumulator + currentValue; }` to each element of the numbers array, and returns a single value sum which is the sum of all numbers in array. The second parameter of reduce method is the initial value of the accumulator, which is 0 in this case.

You can also use arrow function as callback function:

```js
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
```

You can also use reduce() to transform an array of objects:

```js
let people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 40 }];
let totalAge = people.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue.age;
}, 0);
console.log(totalAge); // 70
```

Regarding lab questions, you can use reduce() in a variety of ways, depending on your needs. Some examples are:

Find the maximum or minimum value in an array
Counting the number of elements that meet a specific condition
Flattening an array of arrays
Creating a new object from an array of objects.

Lab 1:

Q: Use the reduce() method to find the maximum number in an array
```js
let numbers = [12, 21, 13, 34, 55, 26, 51, 22];
```

Lab 2:

Q: Use the reduce() method to group the people by city

```js
let people = 
[
    { name: "Alice", age: 30, city: "New York" }, 
    { name: "Bob", age: 40, city: "Los Angeles" }, 
    { name: "Charlie", age: 25, city: "New York" }
];
```
