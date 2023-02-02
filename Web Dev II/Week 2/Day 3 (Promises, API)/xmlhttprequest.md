XMLHttpRequest is an API available in JavaScript that enables you to send HTTP requests to a server and receive data as a response. It is widely used in AJAX (Asynchronous JavaScript and XML) applications to dynamically update web pages without requiring a page refresh.

Here's an example of how you can use XMLHttpRequest to send a GET request to retrieve data from a server:

```js
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.example.com/data");
xhr.onload = function() {
  if (xhr.status === 200) {
    let data = JSON.parse(xhr.responseText);
    console.log(data);
  }
};
xhr.send();
```
