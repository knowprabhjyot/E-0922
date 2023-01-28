###### Arrow Functions:

Arrow functions are a shorthand syntax for writing function expressions in JavaScript. They are similar to regular function expressions, but with a more concise and easier-to-read syntax. Arrow functions are anonymous, which means they don't have a name like regular functions.

```js
let add = (a, b) => a + b;
```

It is equivalent to

```js
let add = function(a, b) {
  return a + b;
};
```

Arrow functions also have a shorter syntax for the function body when it's a single expression:

```js
let double = n => n * 2;
```

It is equivalent to

```js
let double = function(n) {
  return n * 2;
};
```

Arrow functions do not bind their own this value, instead, they inherit the this value of the surrounding scope. This means that you don’t need to use .bind(this) to ensure that the value of this remains the same inside the function.

