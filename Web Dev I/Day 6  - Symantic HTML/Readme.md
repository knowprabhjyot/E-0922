# Semantic HTML Example

## Meta Data

Definition and Usage. The `<meta>` tag defines metadata about an HTML document. Metadata is data (information) about data. `<meta>` tags always go inside the `<head>` element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.

-description: "This is an example of semantic HTML"
-description is for search engines to understand what the page is about

-character encoding is defined in the meta tag. This tells the browser what character encoding is used in the document. The default character encoding is UTF-8.

-viewport is used to control the dimensions and scaling of the browser viewport. The viewport is the user's visible area of a web page. It varies with the device, and will be smaller on a mobile phone than on a computer screen.

-http-equiv is an attribute used to provide an HTTP header for the information/value of the content attribute. It is used to simulate an HTTP response header.

-content is an attribute used to define the value associated with the http-equiv or name attribute.

```html
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">


```

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <header>
      <h1>Header</h1>
    </header>
    <main>
      <h2>Main</h2>
    </main>
    <footer>
      <h3>Footer</h3>
    </footer>
  </body>
</html>
```

# Non Semantic HTML Example

## HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>
      <h1>Header</h1>
    </div>
    <div>
      <h2>Main</h2>
    </div>
    <div>
      <h3>Footer</h3>
    </div>
  </body>
</html>
```
Semantic HTML is the use of HTML markup to reinforce the semantics, or meaning, of the information in webpages rather than merely to define its presentation or look. Semantic HTML elements clearly describe its meaning to both the browser and the developer.

Why does Semantic HTML matter? Writing semantic HTML makes your code easier to understand, making the source code more readable for other developers. Screen readers and browsers can interpret Semantic HTML better, which makes it more accessible. Semantic HTML is also SEO friendly.

Another example of semantic HTML is the use of the `<article>` element to wrap around blog posts, news articles, or any independent, self-contained content. This element clearly describes the meaning of the content. It is an article.

Another example of semantic HTML is the use of the `<nav>` element to wrap around a navigation section of a webpage. This element clearly describes the meaning of the content. It is a navigation section.

```html
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

Another example of semantic HTML is the use of the `<header>` element to wrap around a header section of a webpage. This element clearly describes the meaning of the content. It is a header section.

```html
<header>
  <h1>My Website</h1>
  <p>My website is the best website.</p>
</header>
```
- Article: The `<article>` tag specifies independent, self-contained content.
- Aside: The `<aside>` tag defines some content aside from the content it is placed in (like a sidebar).
- Details: The `<details>` tag specifies additional details that the user can view or hide on demand.
- Footer: The `<footer>` tag defines a footer for a document or section.
- Header: The `<header>` tag defines a header for a document or section.
- Main: The `<main>` element is used to denote the content of a webpage that relates to the central topic of that page or application. It should include content that is unique to that page and should not include content that is duplicated across multiple webpages, such as headers, footers, and primary navigation elements.
- Mark: The `<mark>` tag defines marked/highlighted text.
- Nav: The `<nav>` tag defines a set of navigation links.
- Section: The `<section>` tag defines a section in a document.
- Summary: The `<summary>` tag defines a visible heading for the `<details>` element.
