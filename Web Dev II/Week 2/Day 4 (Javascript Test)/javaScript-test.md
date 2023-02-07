### Javascript Test

Just a quick test to test your javascript understanding.

###### 1- What is ES6?

###### 2- Name 3 examples of ES6 features which you learnt.

###### 3- What is the difference between let and const?

###### 4- How do you access object values? Give 3 examples

###### 5- What does setInterval and setTimeout do?

What will be the output of the following ?

# FIRST
```
 for (var i = 0 ; i < 5 ; i++) {
       setTimeout(() => {
       console.log(i);
}, 0);
}
```

# SECOND
```
 for (let i = 0 ; i < 5 ; i++) {
       setTimeout(() => {
       console.log(i);
}, 0);
}
```


###### 6- What are promises?

###### 7- Convert this async function to async/await

```js
getQuote().then((quote) => {
  console.log(quote);
}).catch(function(err) {
  console.log(err);
});
// after this line,

async function getQuotes() {
  const data = await getQuote();
}
```
  
###### 8- Convert this code to arrow function.

```js
function greeting(firstname, lastname) {
  return `Hello ${firstname} ${lastname}`;
}
// after this line,

```

###### 9- Explain what a callback function is.

###### 10- What does the functions pop and push do to an array? And what do they return ?

###### 11- What is the expected answer to this code?

```js
let string = "";
let object = { a: 1, b: 2, c: 3 };

for (let key in object) {
  string += object[key];
}

console.log(string);
```

###### 12- What data type would Array.map() and Array.filter() return?

Additionally what will be the output of this ?

```
let array = [1,2,3, 0, 4,10, 0];
let output = array.filter((item) => item); 
```

###### 13- What data type would Array.includes() and Array.some() return?

###### 14- Write down the 4 main methods of rest api

###### 15- What is the difference between JSON and a JavaScript object?


#### 16 - Use this endpoint and fetch the output using FETCH API and print them on the console. Use both .then and catch and try and catch block as well.

```
https://www.boredapi.com/api/activity
```

The above API returns what to do when you are bored.
