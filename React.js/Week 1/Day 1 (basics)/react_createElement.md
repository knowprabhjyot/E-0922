`React.createElement` is a function in the React API that creates a new React element with the specified type, properties, and children.

The function takes three arguments:

`type`: The type of the element to create, either a string representing an HTML tag name (e.g. "div", "span", "img") or a reference to a custom React component function or class (e.g. MyComponent).

`props (optional)`: An object containing properties and attributes to apply to the element. These can include standard HTML attributes (e.g. "class", "id") and custom properties specific to the component. For example, for a button element, we might pass { type: "submit", className: "btn btn-primary", onClick: handleClick } as the props argument to specify the button type, CSS class, and click event handler function.

`children (optional)`: The child elements or text content to include inside the element. This can be a string of text, a React element created with createElement, or an array of elements.

Here's an example of how we might use React.createElement to create a simple div element with a class name and two child elements:

```js
const myDiv = React.createElement(
  "div",
  { className: "my-class" },
  React.createElement("h1", null, "Heading"),
  React.createElement("p", null, "Some text.")
);
```

In this code, we create a new React element called myDiv with a type of "div", a className of "my-class", and two child elements: an h1 element with the text "Heading" and a p element with the text "Some text." We can then use this myDiv element to render the component using ReactDOM.render:

```js
ReactDOM.render(myDiv, document.getElementById("root"));
```