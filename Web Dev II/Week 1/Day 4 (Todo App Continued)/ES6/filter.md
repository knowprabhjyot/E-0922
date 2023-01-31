`filter()` is a built-in JavaScript function that allows you to filter an array based on a given condition and return a new array with the elements that pass the condition. The `filter()` function takes a callback function as its first argument, which is applied to each element of the array, and an optional second argument, which is the this value for the callback function. The callback function should return a boolean value, indicating whether the element should be included in the new array (true) or not (false).

Here's an example of how to use `filter()` to find all even numbers in an array:

```js
let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]
```

In this example, the `filter()` function applies the callback function 
```js
function(number) { return number % 2 === 0; }
```
to each element of the numbers array, and returns a new array evenNumbers with the even numbers.

You can also use arrow function as callback function:

```js
let evenNumbers = numbers.filter(number => number % 2 === 0);
```

You can also use `filter()` to filter an array of objects:

```js
let people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 40 }, { name: "Charlie", age: 25 }];

let adults = people.filter(function(person) {
  return person.age >= 18;
});

console.log(adults); // [{ name: "Alice", age: 30 }, { name: "Bob", age: 40 }]
```

The `filter()` function creates a new array with the elements that pass the condition and does not modify the original array. The original array is left unchanged.

It's important to keep in mind that the callback function passed to `filter()` is invoked with three arguments:

- the current element being processed
- the index of the current element
- the array that filter was called upon

You can use `filter()` in a variety of ways, depending on your needs. It is a powerful tool for filtering arrays, and it can greatly simplify your code.

Please let me know if you have any other questions about the `filter()` function or if you want to learn more about JavaScript array functions.