A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to write asynchronous code in a way that looks and behaves like synchronous code.

Here's how you can create a Promise in JavaScript:

```js
const promise = new Promise((resolve, reject) => {
  // Do something asynchronous
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});
```

You can use the `.then()` method to specify what should happen when the Promise is resolved, and the `.catch()` method to specify what should happen when the Promise is rejected.

Here's an example of using `.then()` and `.catch()`:

```js
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
```

You can also use the `.finally()` method to specify a callback that should be executed regardless of whether the Promise was resolved or rejected.

For more information, you can refer to the official documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Promise to handle the result of an asynchronous operation, like an API request:

```js
function getDataFromAPI() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.example.com/data');
    xhr.onload = function() {
      if (this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(new Error(`Request failed with status: ${this.status}`));
      }
    };
    xhr.send();
  });
}

getDataFromAPI()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

In this example, the `getDataFromAPI` function returns a Promise that makes an API request using the XMLHttpRequest object. The `.then()` method is used to log the data if the request is successful, and the `.catch()` method is used to log the error if the request fails.

`Promise.all` is a method in JavaScript that takes an iterable of promises as input and returns a single Promise that resolves to an array of the results of the input promises. The returned Promise is fulfilled when all the input promises have been fulfilled, or rejected if any of the input promises have been rejected.

`Promise.race` is a method in JavaScript that takes an iterable of promises as input and returns a Promise that is fulfilled or rejected as soon as one of the input promises is fulfilled or rejected, with the value or reason from that promise.

An example of using `Promise.all` to wait for multiple Promises to resolve:

```js
const promises = [
  fetch('https://api.example.com/data/1').then((response) => response.json()),
  fetch('https://api.example.com/data/2').then((response) => response.json()),
  fetch('https://api.example.com/data/3').then((response) => response.json())
];

Promise.all(promises)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

An example of using `Promise.race` to return the result of the first resolved Promise:

```js
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 2 resolved');
  }, 500);
});

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```
An example of using a Promise to handle the result of a `setTimeout` call:

```js
function wait(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

wait(1000)
  .then(() => {
    console.log('Waited for 1 second');
  });
```