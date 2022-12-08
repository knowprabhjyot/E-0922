# CSS Basic

Routes;

CSS pt 1: [CSS Syntax, Selector & Properties](#css-syntax)
* CSS Selector: [CSS Selector](#css-selector)
* CSS Properties: [CSS Properties](#css-properties)
* CSS Units: [CSS Units](#css-units)
* CSS Color: [CSS Color](#css-colors)
* CSS Background: [CSS Background](#css-backgrounds)
* CSS Border: [CSS Border](#css-border)
* CSS Margin: [CSS Margin](#css-margin)
* CSS Padding: [CSS Padding](#css-padding)
* CSS Font: [CSS Font](#css-fonts)
...
<!-- * CSS Text: [CSS Text](#css-text)
* CSS Box Model: [CSS Box Model](#css-box-model)
* CSS Display: [CSS Display](#css-display)
* CSS Position: [CSS Position](#css-position) -->
CSS pt 2-3: [Responsive Design](#css-responsive-design)


CSS is a language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language.

CSS is designed primarily to enable the separation of document content from document presentation, including elements such as the layout, colors, and fonts. This separation can improve content accessibility, provide more flexibility and control in the specification of presentation characteristics, enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, and reduce complexity and repetition in the structural content.

CSS can also be applied to any XML document, including plain XML, SVG and XUL. This module will concentrate on HTML and XHTML documents.

## CSS Syntax

CSS consists of a series of style rules. Each rule contains a selector and a declaration block. The selector indicates which element the rule applies to. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.

```css
selector {
  property: value;
}
```

## CSS Selector

CSS selectors are used to "find" (or select) the HTML elements you want to style.

Here are some examples of CSS selectors:

```css
p {
  color: red;
}
```

This example selects the element with id="intro".

```css
#intro {
  color: red;
}
```

This example selects all elements with class="intro".

```css
.intro {
  color: red;
}
```

This example selects all `<p>` elements with class="intro".

```css
p.intro {
  color: red;
}
```

This example selects all `<p>` elements with class="intro" inside a `<div>` element.

```css
div p.intro {
  color: red;
}
```

## CSS Properties

CSS properties are used to set the style of HTML elements.

Here are some examples of CSS properties:

```css
p {
  color: red;
}
```

This example sets the color of all `<p>` elements to red.

```css
p {
  color: red;
  text-align: center;
}
```

This example sets the color of all `<p>` elements to red and the text-align of all `<p>` elements to center.

```css
p {
  color: red;
  text-align: center;
  font-family: verdana;
}
```

#### CSS Colors

CSS colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.

Here are some examples of CSS colors:
This example sets the color of all `<p>` elements to red.

```css
p {
  color: dark;
}
```

```css
p {
  color: #ff0000;
  /* #ff0000 is the hexadecimal representation of the color red. */
}
```

```css
p {
  color: rgb(255, 0, 0);
  /* rgb takes values between 0 and 255 (red, green, blue) */
}
```

```css
p {
  color: rgba(255, 0, 0, 0.5);
    /* rgba takes values between 0 and 255 (red, green, blue, alpha) */
    /* alpha is a number between 0.0 (fully transparent) and 1.0 (fully opaque) */
}
```

#### CSS Backgrounds

CSS backgrounds are specified using background-color, background-image, background-repeat, background-attachment, background-position, background-clip, background-origin, background-size, background properties.

Here are some examples of CSS backgrounds:

```css
p {
  background-color: red;
  /* background-color is changing the background color of the element */
  background-image: url("img_tree.png");
    /* background-image is changing the background image of the element */
  background-repeat: no-repeat;
    /* background-repeat is changing if/how the background image will be repeated */
  background-attachment: fixed;
    /* background-attachment is changing whether a background image is fixed or scrolls with the rest of the page */
  background-position: right top;
    /* background-position is changing the starting position of a background image */
  background-clip: content-box;
    /* background-clip is changing whether an image is clipped to the border-box, padding-box, or content-box of the element */
  background-origin: content-box;
    /* background-origin is changing whether an image's position is relative to the border-box, padding-box, or content-box of the element */
  background-size: 50% 50%;
}
```

border-box, padding-box, and content-box are the three different values for background-clip and background-origin and they are used to define the area where the background image is placed.

#### CSS Fonts

CSS fonts are specified using font-family, font-style, font-variant, font-weight, font-size, line-height, font properties.

Here are some examples of CSS fonts:

```css
p {
  font-family: "Times New Roman", Times, serif;
  /* font-family is changing the font family for text */
  font-style: italic;
  /* font-style is changing the font style for text */
  font-variant: small-caps;
  /* font-variant is changing the font variant for text */
  font-weight: bold;
  /* font-weight is changing the font weight for text */
  font-size: 16px;
  /* font-size is changing the font size for text */
  line-height: 30px;
  /* line-height is changing the line height for text */
}
```

#### CSS Units

CSS units are used to specify the size of HTML elements.

Here are some examples of CSS units:

##### Absolute Length Units

```css
p {
  width: 300px;
  /* px is the unit for pixels */
  height: 300px;
  /* px is the unit for pixels */
}
```
<!-- ```css
p {
  width: 300ex;
  /* ex is the unit for exs */
  height: 300ex;
  /* ex is the unit for exs */
}
``` -->

```css
p {
  width: 300pt;
  /* pt is the unit for points */
  height: 300pt;
  /* pt is the unit for points */
}
```

```css
p {
  width: 300pc;
  /* pc is the unit for picas */
  height: 300pc;
  /* pc is the unit for picas */
}
```

```css
p {
  width: 300cm;
  /* cm is the unit for centimeters */
  height: 300cm;
  /* cm is the unit for centimeters */
}
```

```css
p {
  width: 300mm;
  /* mm is the unit for millimeters */
  height: 300mm;
  /* mm is the unit for millimeters */
}
```

```css
p {
  width: 300in;
  /* in is the unit for inches */
  height: 300in;
  /* in is the unit for inches */
}
```

##### Relative Length Units


```css
p {
  width: 75%;
  /* % is the unit for percentage */
  /* percentage is relative to the parent element which is the `<div>` element in this case */
  /* also related browser window size */
  height: 75%;
  /* % is the unit for percentage */
}
```

```css
p {
  width: 300em;
  /* em is the unit for ems */
  /* ems is relative to the font-size of the element (2em means 2 times the size of the current font) */
  /* em also related browser window size */
  /* good for responsive design */
  height: 300em;
}
```

```css
p {
  width: 300rem;
    /* rem is the unit for root ems */
    /* root ems is relative to the font-size of the root element (html) */
    /* good for responsive design */
  height: 300rem;
}
```

```css
p {
  width: 300vh;
    /* vh is the unit for viewport height */
    /* viewport height is relative to the height of the browser window */
    /* good for responsive design */
  height: 300vh;
}
```

```css
p {
  width: 300vw;
    /* vw is the unit for viewport width */
    /* viewport width is relative to the width of the browser window */
    /* good for responsive design */
  height: 300vw;
}
```

### CSS Border

CSS border is specified using border-width, border-style, border-color, border properties.

Here are some examples of CSS border:

```css
p {
  border-width: 5px;
  /* border-width is changing the width of the border */
  border-style: solid;
  /* border-style is changing the style of the border */
  border-color: red;
  /* border-color is changing the color of the border */
}
```

```css
p {
  border: 5px solid red;
  /* border is a shorthand property for border-width, border-style, and border-color */
}
```

### CSS Margin

CSS margin is specified using margin properties.

Here are some examples of CSS margin:

```css
p {
  margin-top: 50px;
  /* margin-top is changing the top margin of an element */
  margin-right: 100px;
  /* margin-right is changing the right margin of an element */
  margin-bottom: 150px;
  /* margin-bottom is changing the bottom margin of an element */
  margin-left: 200px;
  /* margin-left is changing the left margin of an element */
}
```

```css
p {
  margin: 50px 100px 150px 200px;
  /* margin is a shorthand property for margin-top, margin-right, margin-bottom, and margin-left */
}
```

```css
p {
  margin: 50px 100px 150px;
  /* margin is a shorthand property for margin-top, margin-right and margin-left, and margin-bottom */
}
```

```css
p {
  margin: 50px 100px;
  /* margin is a shorthand property for margin-top and margin-bottom, and margin-right and margin-left */
}
```

```css
p {
  margin: 50px;
  /* margin is a shorthand property for margin-top, margin-right, margin-bottom, and margin-left */
}
```

### CSS Padding

CSS padding is specified using padding properties.

Here are some examples of CSS padding:

```css
p {
  padding-top: 50px;
  /* padding-top is changing the top padding of an element */
  padding-right: 100px;
  /* padding-right is changing the right padding of an element */
  padding-bottom: 150px;
  /* padding-bottom is changing the bottom padding of an element */
  padding-left: 200px;
  /* padding-left is changing the left padding of an element */
}
```

```css
p {
  padding: 50px 100px 150px 200px;
  /* padding is a shorthand property for padding-top, padding-right, padding-bottom, and padding-left */
}
```

```css
p {
  padding: 50px 100px 150px;
  /* padding is a shorthand property for padding-top, padding-right and padding-left, and padding-bottom */
}
```

```css
p {
  padding: 50px 100px;
  /* padding is a shorthand property for padding-top and padding-bottom, and padding-right and padding-left */
}
```

```css
p {
  padding: 50px;
  /* padding is a shorthand property for padding-top, padding-right, padding-bottom, and padding-left */
}
```

### CSS Float

CSS float is specified using float property.
CSS float is used to float an element to the left or right of its container.
Here are some examples of CSS float:

```css
p {
  float: left;
  /* float is floating an element to the left */
}
```

```css
p {
  float: right;
  /* float is floating an element to the right */
}
```

```css
p {
  float: none;
  /* float is removing the float of an element */
}
```


# CSS Responsive Design

Responsive design is a web design approach that makes web pages render well on a variety of devices and window or screen sizes.

Practices that are used in responsive design:

  * Flexible layouts
  * Media queries
  * Flexible media

Fluid, Flex and Grid layouts are the most common layout methods used in responsive design.

Flexible layouts do not advocate the use of fixed measurement units, such as pixels or inches, but rather relative values, such as percentages, ems, or rems.

Media queries are used to apply different CSS styles for different screen sizes.

Flexible media are used to make media (images, videos, etc.) scale proportionally to the size of the screen.

### CSS Fluid Layout

Fluid layout is a web design approach that uses percentages to specify the width of elements.

Fluid layout is used to make web pages render well on a variety of devices and window or screen sizes.

Here is an example of fluid layout:

```css
p {
  width: 50%;
  /* 50% is the width of the parent element which is the `<div>` element in this case */
}
```

### CSS Media Queries

Media queries are used to apply different CSS styles for different screen sizes.

Media queries are used in responsive design.

Here is an example of media queries:

```css
@media screen and (max-width: 600px) {
  p {
    background-color: red;
  }
}
```

### CSS Flexbox

Flexbox is a layout mode in CSS3.
Flexbox is used to make the layout responsive.
Flexbox is a one-dimensional layout method for laying out items in rows or columns.
Flexbox is a good alternative to CSS grid.
Here is an example of flexbox:

```css
.container {
  display: flex;
  /* display: flex is used to enable flexbox */
  flex-direction: row;
  /* flex-direction: row is used to make the flex items are placed in the row direction */
  flex-wrap: nowrap;
  /* flex-wrap: nowrap is used to make the flex items are not wrapped */
  justify-content: flex-start;
  /* justify-content: flex-start is used to make the flex items are packed toward the start of the flex container */
  align-items: stretch;
  /* align-items: stretch is used to make the flex items are stretched to fit the container */
  align-content: stretch;
  /* align-content: stretch is used to make the flex lines are stretched to fit the container */
}
```

### CSS Grid

CSS Grid Layout (aka “Grid” or “CSS Grid”), is a two-dimensional grid-based layout system that, compared to any web layout system of the past, completely changes the way we design user interfaces. CSS has always been used to layout our web pages, but it’s never done a very good job of it. First, we used tables, then floats, positioning and inline-block, but all of these methods were essentially hacks and left out a lot of important functionality (vertical centering, for instance). Flexbox is also a very great layout tool, but its one-directional flow has different use cases — and they actually work together quite well! Grid is the very first CSS module created specifically to solve the layout problems

CSS grid is a layout mode in CSS3.
CSS grid is used to make the layout responsive.
CSS grid is a two-dimensional layout method for laying out items in rows and columns.
CSS grid is a good alternative to CSS flexbox.

Here is an example of CSS grid:

```css
.container {
  display: grid;
  /* display: grid is used to enable CSS grid */
  grid-template-columns: 50% 50%;
  /* grid-template-columns: 50% 50% is used to define the number of columns and the width of the columns */
  grid-template-rows: 50% 50%;
  /* grid-template-rows: 50% 50% is used to define the number of rows and the height of the rows */
  grid-gap: 10px;
  /* grid-gap: 10px is used to define the gap between the columns and the rows */
  grid-auto-flow: row;
  /* grid-auto-flow: row is used to define how auto-placed items are flowed into the grid*/
  grid-auto-columns: 50%;
  /* grid-auto-columns: 50% is used to define the width of the auto-placed columns */
  grid-auto-rows: 50%;
  /* grid-auto-rows: 50% is used to define the height of the auto-placed rows */
  grid-template-areas: "header header" "main main" "footer footer";
  /* grid-template-areas: "header header" "main main" "footer footer" is used to define the grid template areas */
  /* https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas */
}
```
Create a responsive design for desktop, table and mobile screen sizes using CSS Grid

```css
.container {
  display: grid;
  /* display: grid is used to enable CSS grid */
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-columns: 1fr 1fr 1fr is used to define the number of columns and the width of the columns */
  grid-template-rows: 50px 1fr 50px;
  /* grid-template-rows: 50px 1fr 50px is used to define the number of rows and the height of the rows */
  grid-gap: 10px;
  /* grid-gap: 10px is used to define the gap between the columns and the rows */
  grid-auto-flow: row;
  /* grid-auto-flow: row is used to define how auto-placed items are flowed into the grid */
  grid-auto-columns: 1fr;
  /* grid-auto-columns: 1fr is used to define the width of the auto-placed columns */
  grid-auto-rows: 1fr;
  /* grid-auto-rows: 1fr is used to define the height of the auto-placed rows */
  grid-template-areas: "header header header" "main main main" "footer footer footer";
  /* grid-template-areas: "header header header" "main main main" "footer footer footer" is used to define the grid template areas */
}

@media screen and (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
    /* grid-template-columns: 1fr is used to define the number of columns and the width of the columns */
    grid-template-rows: 50px 1fr 50px;
    /* grid-template-rows: 50px 1fr 50px is used to define the number of rows and the height of the rows */
    grid-template-areas: "header" "main" "footer";
    /* grid-template-areas: "header" "main" "footer" is used to define the grid template areas */
  }
}

@media screen and (min-width: 601px) and (max-width: 900px) {
  .container {
    grid-template-columns: 1fr 1fr;
    /* grid-template-columns: 1fr 1fr is used to define the number of columns and the width of the columns */
    grid-template-rows: 50px 1fr 50px;
    /* grid-template-rows: 50px 1fr 50px is used to define the number of rows and the height of the rows */
    grid-template-areas: "header header" "main main" "footer footer";
    /* grid-template-areas: "header header" "main main" "footer footer" is used to define the grid template areas */
  }
}
```

