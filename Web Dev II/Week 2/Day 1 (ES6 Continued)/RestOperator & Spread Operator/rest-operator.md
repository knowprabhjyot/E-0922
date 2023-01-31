Yes, the rest operator (...) allows you to represent an indefinite number of arguments as an array. It is indicated by three dots (...) followed by a variable name. The rest operator allows you to pass an indefinite number of arguments to a function, and they will be stored in an array.
For example:

```js
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
```

In this example, the rest operator is used to collect all the arguments passed to the `sum()` function into an array called `args`. The `args` array can then be used in the function body to perform some operation on all the passed arguments.

The rest parameter should be the last parameter in the function signature, and it can only be used once.

```js
function myFunc(param1, param2, ...rest) {
  console.log(param1); // 1
  console.log(param2); // 2
  console.log(rest); // [3, 4, 5]
}
myFunc(1, 2, 3, 4, 5);
```

###### Spread vs Rest

The spread operator `(...)` and the rest operator `(...)` may look similar because they both use the same syntax (three dots), but they are used for different purposes:

The spread operator is used to spread elements of an iterable (e.g. array, string) into a new array or to spread the elements of an array into the arguments of a function call. It allows you to take an iterable and expand it into multiple elements.

The rest operator is used to represent an indefinite number of arguments as an array. It allows you to collect all the remaining elements passed to a function into an array.

In other words:

The spread operator takes an iterable and spreads its elements.
The rest operator takes multiple elements and collects them into an array.
Here is an example that illustrates the difference:

```js
// Using the spread operator
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]
```

```js
// Using the rest operator
function sum(...args) {
  return args.reduce((acc, curr) => acc + curr);
}
console.log(sum(1, 2, 3)); // 6
```

In the first example, the spread operator is used to spread the elements of the numbers array into a new array. 

In the second example, the rest operator is used to collect all the arguments passed to the sum() function into an array called args. The args array can then be used in the function body to perform some operation on all the passed arguments.

It's important to note that the spread operator can be used in array literals, function calls, and object literals, while the rest operator can only be used in function parameter.

Please let me know if you have any other questions or if you want to learn more about these JavaScript features.