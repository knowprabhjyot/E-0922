###### Spread Operator:

The spread operator (...) allows you to spread the elements of an iterable (e.g. array, string) into a new array or to spread the elements of an array into the arguments of a function call.
It can be used in different ways:

In array literals:

```js
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]
```
In function calls:

```js
let numbers = [1, 2, 3];
let max = Math.max(...numbers);
console.log(max); // 3
```
In object literals:

```js
let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
```

