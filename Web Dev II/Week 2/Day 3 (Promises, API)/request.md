### HTTP requests

- OpenWeatherMap API: provides weather information. Endpoint: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}

- `https://pokeapi.co/api/v2/pokemon/` is a RESTful API for retrieving information about Pokémon.

- GitHub API: provides information about GitHub repositories, users, etc. Endpoint: api.github.com/users/{username}

- JSONPlaceholder: a simple fake REST API for testing and prototyping. Endpoint: jsonplaceholder.typicode.com/posts

- XMLHttpRequest is the original API for making HTTP requests in JavaScript. It has been around since the early days of the web, but it can be verbose and complicated to use.

- The Fetch API is a more modern alternative to XMLHttpRequest, and it provides a cleaner and more concise syntax for making HTTP requests.

- Axios is a popular JavaScript library that provides a simple API for making HTTP requests. It is based on the Fetch API, but with some additional features and abstractions, such as automatic transformation of data to JSON, built-in error handling, and support for cancelable requests.

In general, it's a good idea to choose a library like Axios or the Fetch API, as they provide a more convenient and modern way of making HTTP requests compared to XMLHttpRequest.

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhr.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    console.log(JSON.parse(this.responseText));
  }
};
xhr.send();
```

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

```js
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then(response => console.log(response.data))
  .catch(error => console.error(error));
```