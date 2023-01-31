`sort():` 

The `sort()` method is a built-in JavaScript function that sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

```js
let numbers = [3, 1, 4, 2, 5];
console.log(numbers.sort()); // [1, 2, 3, 4, 5]
```

You can also pass a compare function as an argument to sort the elements according to the specific logic.

```js
let people = [{ name: "Alice", age: 30 }, { name: "Bob", age: 40 }, { name: "Charlie", age: 25 }];
people.sort((a, b) => a.age - b.age);
console.log(people);
/*
Output:
[
  { name: "Charlie", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 40 }
]
*/
```

`search():`
 The `search()` method is not a built-in JavaScript function but the indexOf() method can be used to search for a specific element in an array and returns the index of the first occurrence of the element. If the element is not found, it returns -1.

```js
let numbers = [3, 1, 4, 2, 5];
console.log(numbers.indexOf(4)); // 2
console.log(numbers.indexOf(6)); // -1
```
