JSX is a syntax extension for JavaScript that allows developers to write HTML-like code in their JavaScript code. It was created by Facebook as part of the React library, but it has since been adopted by other frameworks and libraries.

With JSX, developers can write code that combines HTML markup and JavaScript logic, which makes it easier to create dynamic user interfaces. JSX code is typically transpiled into regular JavaScript code before it is executed in the browser.

Here's an example of JSX code:

```jsx
const element = <h1>Hello, world!</h1>;
```

In this example, the JSX code is used to create a new element that represents a heading with the text "Hello, world!" inside. This element can be rendered on a web page using a library like React or other compatible tools.

Here are some of the key differences between JSX and regular JavaScript (JS):

Syntax: JSX syntax looks similar to HTML, but it is not valid HTML code. Regular JavaScript syntax follows the rules of the JavaScript language.

Usage: JSX is typically used in combination with a library or framework that supports it, such as React or Vue. Regular JavaScript can be used in any JavaScript application, regardless of the framework or library being used.

Expressiveness: JSX allows developers to express their code in a more concise and readable way, especially when working with user interfaces. Regular JavaScript requires more verbose code to achieve the same functionality.

Here's an example of JSX code:

```jsx
const element = <h1>Hello, world!</h1>;
```
In this example, we are using JSX to create a new element that represents a heading with the text "Hello, world!" inside.

Here's an example of the equivalent code in regular JavaScript:

```jsx
const element = document.createElement('h1');
element.textContent = 'Hello, world!';
```

In this example, we are using regular JavaScript to create a new HTML heading element and set its text content to "Hello, world!".

Another example of JSX code:

```jsx
const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const element = (
  <h1>
    Hello, {user.firstName} {user.lastName}!
  </h1>
);
```
In this example, we are using JSX to create a new element that represents a heading with the text "Hello, John Doe!" inside. We are also using JavaScript expressions within curly braces to interpolate the values of the user.firstName and user.lastName properties.

The equivalent code in regular JavaScript would be:

```jsx
const user = {
  firstName: 'John',
  lastName: 'Doe'
};

const element = document.createElement('h1');
element.textContent = 'Hello, ' + user.firstName + ' ' + user.lastName + '!';
```

In this example, we are using regular JavaScript to create a new HTML heading element and set its text content to "Hello, John Doe!". We are also concatenating strings using the + operator to interpolate the values of the user.firstName and user.lastName properties.