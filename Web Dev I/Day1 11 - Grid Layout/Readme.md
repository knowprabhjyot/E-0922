# Grid

## Learning Objectives

- Explain the difference between a grid and a flexbox.
- Use the `display` property to create a grid.
- Use the `grid-template-columns` property to define the columns of a grid.
- Use the `grid-template-rows` property to define the rows of a grid.
- Use the `grid-template-areas` property to define the areas of a grid.
- Use the `grid-template` property to define the columns, rows, and areas of a grid.
- Use the `grid-column-gap` property to define the size of the gap between columns.
- Use the `grid-row-gap` property to define the size of the gap between rows.
- Use the `grid-gap` property to define the size of the gap between rows and columns.
- Use the `grid-auto-columns` property to define the size of an implicitly-created column track.
- Use the `grid-auto-rows` property to define the size of an implicitly-created row track.
- Use the `grid-auto-flow` property to control how auto-placed items are inserted in the grid.
- Use the `grid` property to define the columns, rows, and areas of a grid, as well as the size of the gap between rows and columns.
...


## Grid vs. Flexbox

- Flexbox is a one-dimensional layout method for laying out items in rows or columns.
- Grid is a two-dimensional layout method for laying out items in rows and columns.
- Flexbox is great for laying out items in a single direction.
- Grid is great for laying out items in multiple directions.

## Grid Container

- A grid container is an element on which `display: grid` is applied.
- It's used to establish a new grid formatting context for all of its direct children.

```css
.container {
  display: grid;
}
```

## Grid Items

- A grid item is an element that is a direct child of a grid container.
- It's used to lay out the content of the grid container.

```css
.container {
  display: grid;
}

.item {
  background-color: red;
}
```

## Grid Lines

- A grid line is the dividing lines that make up the structure of the grid.

## Grid Track

- A grid track is the space between two adjacent grid lines.
- A row track is the space between two adjacent horizontal grid lines.
- A column track is the space between two adjacent vertical grid lines.

## Grid Cell

- A grid cell is the space between four adjacent grid lines.
- It's a single "unit" of the grid.

## Grid Area

- A grid area is the total space surrounded by four grid lines.
- A grid area may be comprised of any number of grid cells.

## Grid Properties

- `display`

### `display`

- `display` is a shorthand property for setting the `display` property of an element.
- The value can be `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, or `inline-grid`.

```css
.container {
  display: grid;
}
```

## Grid Template

- `grid-template-columns`
- `grid-template-rows`
- `grid-template-areas`
- `grid-template`

### `grid-template-columns`

- `grid-template-columns` defines the columns of the grid with a space-separated list of values.
- Each value represents the width of the column.
- The number of values represents the number of columns in the grid.
- The values can be lengths, percentages, or auto.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
}
```

[grid-template-columns example](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)


### `grid-template-rows`

- `grid-template-rows` defines the rows of the grid with a space-separated list of values.
- Each value represents the height of the row.
- The number of values represents the number of rows in the grid.
- The values can be lengths, percentages, or auto.

```css
.container {
  display: grid;
  grid-template-rows: 100px 100px 100px;
}
```

[grid-template-rows example](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)

### `grid-template-areas`

- `grid-template-areas` defines a grid template by referencing the names of the grid areas which are specified with the `grid-area` property.

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "main main sidebar"
    "footer footer footer";
}
```

[grid-template-areas example](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)

### `grid-template`

- `grid-template` is a shorthand property for setting the `grid-template-columns`, `grid-template-rows`, and `grid-template-areas` properties at the same time.

```css
.container {
  display: grid;
  grid-template:
    "header header header" 100px
    "main main sidebar" 1fr
    "footer footer footer" 100px
    / 100px 1fr 100px;
}
```

[grid-template example](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template)


## Grid Column

- `grid-column-start`
- `grid-column-end`
- `grid-column`

### `grid-column-start`

- `grid-column-start` defines the line where the column starts.
- The value can be a line number, a line name, or `span`.

```css
.item {
  grid-column-start: 1;
}
```

[grid-column-start example](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start)

### `grid-column-end`

- `grid-column-end` defines the line where the column ends.
- The value can be a line number, a line name, or `span`.

```css
.item {
  grid-column-end: 3;
}
```

[grid-column-end example](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end)

### `grid-column`

- `grid-column` is a shorthand property for setting the `grid-column-start` and `grid-column-end` properties at the same time.

```css
.item {
  grid-column: 1 / 3;
}
```

[grid-column example](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)

## Grid Row

- `grid-row-start`
- `grid-row-end`
- `grid-row`

### `grid-row-start`

- `grid-row-start` defines the line where the row starts.
- The value can be a line number, a line name, or `span`.

```css
.item {
  grid-row-start: 1;
}
```

[grid-row-start example](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start)


### `grid-row-end`

- `grid-row-end` defines the line where the row ends.
- The value can be a line number, a line name, or `span`.

```css
.item {
  grid-row-end: 3;
}
```

[grid-row-end example](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end)

### `grid-row`

- `grid-row` is a shorthand property for setting the `grid-row-start` and `grid-row-end` properties at the same time.

```css
.item {
  grid-row: 1 / 3;
}
```

[grid-row example](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)

## Grid Area

- `grid-area`

### `grid-area`

- `grid-area` is a shorthand property for setting the `grid-row-start`, `grid-column-start`, `grid-row-end`, and `grid-column-end` properties at the same time.

```css
.item {
  grid-area: 1 / 1 / 3 / 3;
}
```

[grid-area example](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)

## Grid Placement

- `justify-self`
- `align-self`
- `place-self`

### `justify-self`

- `justify-self` aligns a grid item inside a cell along the inline (row) axis.
- The value can be `start`, `end`, `center`, `stretch`.

```css
.item {
  justify-self: center;
}
```

[justify-self example](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)

### `align-self`

- `align-self` aligns a grid item inside a cell along the block (column) axis.
- The value can be `start`, `end`, `center`, `stretch`.

```css
.item {
  align-self: center;
}
```

[align-self example](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)

### `place-self`

- `place-self` is a shorthand property for setting the `justify-self` and `align-self` properties at the same time.

```css

.item {
  place-self: center;
}
```

[place-self example](https://developer.mozilla.org/en-US/docs/Web/CSS/place-self)

## Grid Advance

## Grid Auto Placement

- `grid-auto-columns`
- `grid-auto-rows`
- `grid-auto-flow`

### `grid-auto-columns`

- `grid-auto-columns` defines the width of an implicitly-created grid column track.
- The value can be a length, a percentage, or `auto`.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-auto-columns: 100px;
}
```

### `grid-auto-rows`

- `grid-auto-rows` defines the height of an implicitly-created grid row track.
- The value can be a length, a percentage, or `auto`.

```css
.container {
  display: grid;
  grid-template-rows: 100px 100px 100px;
  grid-auto-rows: 100px;
}
```

### `grid-auto-flow`

- `grid-auto-flow` controls how auto-placed items are inserted in the grid.
- The default value is `row`.
- The value can be `row`, `column`, `row dense`, or `column dense`.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-auto-flow: column;
}
```

## Grid Properties

- `grid-template-columns`
- `grid-template-rows`
- `grid-template-areas`
- `grid-template`
- `grid-column-gap`
- `grid-row-gap`
- `grid-gap`
- `grid-auto-columns`
- `grid-auto-rows`
- `grid-auto-flow`
- `grid`

### `grid-template-columns`

- `grid-template-columns` defines the columns of the grid with a space-separated list of values.
- Each value represents the width of the column.
- The number of values represents the number of columns in the grid.
- The values can be lengths, percentages, or auto.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
}
```

### `grid-template-rows`

- `grid-template-rows` defines the rows of the grid with a space-separated list of values.
- Each value represents the height of the row.
- The number of values represents the number of rows in the grid.
- The values can be lengths, percentages, or auto.

```css
.container {
  display: grid;
  grid-template-rows: 100px 100px 100px;
}
```

### `grid-template-areas`

- `grid-template-areas` defines a grid template by referencing the names of the grid areas which are specified with the `grid-area` property.
- The syntax itself provides a visualization of the structure of the grid.
- The names of the grid areas are arbitrary.
- The number of rows and columns are determined by the number of names and the number of periods in the syntax.
- The names must be separated by periods and rows by newlines.
- The names must be surrounded by double quotes.

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "main main ."
    "footer footer footer";
}
```

### `grid-template`

- `grid-template` is a shorthand property for defining grid columns, rows, and areas at the same time.
- The syntax is similar to `grid-template-areas` but uses square brackets to represent an empty cell.

```css
.container {
  display: grid;
  grid-template: [row1-start] "header header header" 100px [row1-end]
                 [row2-start] "main main ." 200px [row2-end]
                 [row3-start] "footer footer footer" 100px [row3-end]
                 / 100px 100px 100px;
}
```

### `grid-column-gap`

- `grid-column-gap` defines the size of the gap between columns.
- The value can be a length or a percentage.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-column-gap: 10px;
}
```

### `grid-row-gap`

- `grid-row-gap` defines the size of the gap between rows.
- The value can be a length or a percentage.

```css
.container {
  display: grid;
  grid-template-rows: 100px 100px 100px;
  grid-row-gap: 10px;
}
```

### `grid-gap`

- `grid-gap` is a shorthand property for defining the size of the gap between rows and columns.
- The first value defines the size of the gap between rows.
- The second value defines the size of the gap between columns.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-gap: 10px 20px;
}
```

### `grid-auto-columns`

- `grid-auto-columns` defines the size of an implicitly-created column track.
- The value can be a length, a percentage, or `auto`.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-auto-columns: 100px;
}
```

### `grid-auto-rows`

- `grid-auto-rows` defines the size of an implicitly-created row track.
- The value can be a length, a percentage, or `auto`.

```css
.container {
  display: grid;
  grid-template-rows: 100px 100px 100px;
  grid-auto-rows: 100px;
}
```

### `grid-auto-flow`

- `grid-auto-flow` controls how auto-placed items are inserted in the grid.
- The default value is `row`.
- The value can be `row`, `column`, `row dense`, or `column dense`.

```css
.container {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-auto-flow: column;
}
```

### `grid`

- `grid` is a shorthand property for defining grid columns, rows, and areas at the same time.
- The first value defines the columns of the grid.
- The second value defines the rows of the grid.
- The third value defines the areas of the grid.

```css
.container {
  display: grid;
  grid: 100px 100px 100px / 100px 100px 100px;
}
```

## Grid Functions

- `repeat()`
- `minmax()`
- `fr`

### `repeat()`

- `repeat()` is a function that repeats a pattern of values the specified number of times.
- The first argument is the number of times to repeat the pattern.
- The second argument is the pattern to repeat.

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 100px);
}
```

### `minmax()`

- `minmax()` is a function that defines a minimum and maximum size for a track.
- The first argument is the minimum size.
- The second argument is the maximum size.

```css
.container {
  display: grid;
  grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr);
}
```

### `fr`

- `fr` is a unit that represents a fraction of the free space in the grid container.
- The value can be a positive integer or a decimal.

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

## Grid Areas

- `grid-column`
- `grid-row`
- `grid-area`

### `grid-area`

- `grid-area` is a shorthand property for defining the grid area of an item.
- The first value defines the row the item starts on.
- The second value defines the column the item starts on.
- The third value defines the row the item ends on.
- The fourth value defines the column the item ends on.

```css
.item {
  grid-area: 1 / 1 / 2 / 2;
}
```

### `grid-column`

- `grid-column` is a shorthand property for defining the column of an item.
- The first value defines the column the item starts on.
- The second value defines the column the item ends on.

```css
.item {
  grid-column: 1 / 2;
}
```

### `grid-row`

- `grid-row` is a shorthand property for defining the row of an item.
- The first value defines the row the item starts on.
- The second value defines the row the item ends on.

```css
.item {
  grid-row: 1 / 2;
}
```

## Grid Alignment

- `justify-items`
- `align-items`
- `place-items`
- `justify-content`
- `align-content`
- `place-content`
- `justify-self`
- `align-self`
- `place-self`

### `justify-content`

- `justify-content` aligns grid items along the inline (row) axis.
- The value can be `start`, `end`, `center`, `stretch`, `space-around`, `space-between`, `space-evenly`.

```css
.container {
  display: grid;
  justify-content: center;
}
```

### `align-items`

- `align-items` aligns grid items along the block (column) axis.
- The value can be `start`, `end`, `center`, `stretch`.

```css
.container {
  display: grid;
  align-items: center;
}
```

### `place-items`

- `place-items` is a shorthand property for defining the alignment of grid items along both the inline and block axes.
- The first value defines the alignment along the inline axis.
- The second value defines the alignment along the block axis.

```css
.container {
  display: grid;
  place-items: center center;
}
```

# Exercise

- [Grid Garden](https://cssgridgarden.com/)
<!-- - [Flexbox Froggy](https://flexboxfroggy.com/) -->
- [Flexbox Defense](http://www.flexboxdefense.com/)

# Examples

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Grid</title>
    <style>
      .container {
        display: grid;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: 100px 100px 100px;
        grid-gap: 10px 20px;
        grid-auto-columns: 100px;
        grid-auto-rows: 100px;
        grid-auto-flow: column;
        grid: 100px 100px 100px / 100px 100px 100px;
      }

      .item {
        grid-area: 1 / 1 / 2 / 2;
        grid-column: 1 / 2;
        grid-row: 1 / 2;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
  </body>
</html>
```

# Grid PT-2

In CSS, the grid layout is a system for creating page layouts that uses a series of rows and columns to arrange elements on a web page. It allows you to divide a page into sections and define the size, position, and behavior of the elements within each section.

To use the grid layout in CSS, you first need to create a container element that will hold the grid. This container element should have the display property set to grid:

```css
.container {
  display: grid;
}
```

Once you have a container element, you can use the grid-template-columns and grid-template-rows properties to define the number and size of the columns and rows in your grid. For example, the following code creates a grid with three columns and two rows:

```css
.container {
  display: grid;
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 200px 100px;
}
```

Once you have defined the columns and rows in your grid, you can use the grid-column and grid-row properties to position elements within the grid. For example, the following code positions an element in the second column and first row of the grid:

```css
.element {
  grid-column: 2;
  grid-row: 1;
}
```

The grid layout provides a flexible and powerful way to create page layouts in CSS. It allows you to easily control the size and position of elements on a page and create complex, responsive designs.

<hr>

In CSS, the grid layout allows you to define named grid areas that you can use to position elements on a grid. This can make it easier to create complex grid layouts, as you can use the names of the grid areas instead of specific grid coordinates to position elements.

To define grid areas, you use the grid-template-areas property on the container element. This property takes a string of space-separated names that define the grid areas. For example, the following code defines a grid with three columns and three rows, and assigns names to each grid area:

```css
.container {
  display: grid;
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 200px 100px 100px;
  grid-template-areas: "header header header"
                       "sidebar main main"
                       "footer footer footer";
}
```

Once you have defined the grid areas, you can use the grid-area property on individual elements to position them within the grid. This property takes the name of the grid area that you want to position the element in. For example, the following code positions an element in the main grid area:

```css
.main-content {
  grid-area: main;
}
```
Using named grid areas can make it easier to create and maintain complex grid layouts. Instead of having to keep track of specific grid coordinates, you can use the names of the grid areas to position elements on the grid. This can make your stylesheets more readable and maintainable.

The grid layout in CSS provides many other features and capabilities beyond what I have described so far. Some additional things you can do with the grid layout include:

- Using the grid-gap property to add space between the rows and columns in your grid.
- Using the grid-column-gap and grid-row-gap properties to add separate gaps for the rows and columns in your grid.
- Using the grid-column-start, grid-column-end, grid-row-start, and grid-row-end properties to define the start and end points of grid lines for an element, allowing you to span multiple rows and columns.
- Using the grid-auto-columns and grid-auto-rows properties to automatically generate additional rows and columns in your grid to accommodate the content of your elements.
- Using the justify-items, align-items, justify-content, and align-content properties to control the alignment of elements within their grid cells and the overall alignment of the grid within its container.

These are just some examples of the many features and capabilities of the grid layout in CSS. To learn more, you can refer to the CSS Grid Layout specification, which provides a detailed description of all the features and options available in the grid layout.