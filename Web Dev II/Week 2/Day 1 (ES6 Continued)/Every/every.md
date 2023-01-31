###### Using `Array.prototype.every()`

```js
const numbers = [1, 2, 3, 4, 5];
const allPositive = numbers.every(function(number) {
  return number > 0;
});
console.log(allPositive);
```

The `Array.prototype.every()` method tests whether all elements in the array pass the test implemented by the provided function. In this example, the function checks if all numbers in the array are greater than 0. If all numbers are greater than 0, `allPositive` variable will be `true`, otherwise it will be `false`.

- Checking if all elements in an array are of a certain type:

```js
const mixedArray = [1, 'hello', true, { key: 'value' }];
const allStrings = mixedArray.every(function(element) {
  return typeof element === 'string';
});
console.log(allStrings); // false
```

In this example, the `every()` method is used to check if all elements in the mixedArray are of the type 'string'. The function passed to `every()` takes in each element of the array and returns `true` if the element is of type 'string', and false otherwise. If all elements in the array return `true` when passed through this function, `allStrings` will be `true`.

- Checking if all elements in an array pass a custom validation function:

```js
const words = ['hello', 'world', 'goodbye'];
const allValidWords = words.every(function(word) {
  return word.length > 3 && word.indexOf('e') !== -1;
});
console.log(allValidWords); // false
```

In this example, the `every()` method is used to check if all elements in the words array are valid `words` according to a custom validation function. The function passed to `every()` takes in each element of the array and returns `true` if the element has more than 3 characters and contains the letter 'e', and false otherwise. If all elements in the array return `true` when passed through this function, `allValidWords` will be `true`.

- Checking if all elements in an array are truthy:

```js
const truthyArray = [1, 'hello', true];
const allTruthy = truthyArray.every(function(element) {
  return !!element;
});
console.log(allTruthy); // true
```

In this example, the `every()` method is used to check if all elements in the `truthyArray` are truthy (i.e. not false, null, undefined, 0, NaN, or an empty string). The function passed to `every()` takes in each element of the array and returns `true` if the element is truthy, and false otherwise. If all elements in the array return `true` when passed through this function, `allTruthy` will be `true`.
