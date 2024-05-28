# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

To debug and ensure we understand what is happening in our code

- What is a "model"?

A representation of something

- Which "document" is being referred to in the phrase Document Object Model?

The Document is referring to the html documents or web pages

- What is the word "object" referring to in the phrase Document Object Model?

It is referring to the representation of the html tree as a JavaScript object

- What is a DOM Tree?

The DOM Tree is the tree of objects that make up an HTML document, such as the HTML which serves as the root of the tree and all of the other elements that stem from it

- Give two examples of `document` methods that retrieve a single element from the DOM.

the querySelector method and the getElementById method

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.

the querySelectorAll method retrieves multiple elements from the DOM at once

- Why might you want to assign the return value of a DOM query to a variable?

Querying the DOM takes a long time as it has to scan the entire HTML document every time to locate the element so it is much faster to save the reference to the element.

- What `console` method allows you to inspect the properties of a DOM element object?

the dir method

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?

To allow for all of the DOM elements to load before any code needs to run

- What does `document.querySelector()` take as its argument and what does it return?

It takes a css selector and returns the first element with that selector

- What does `document.querySelectorAll()` take as its argument and what does it return?

It takes a css selector as an argument and returns a NodeList of elements with the css selector

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
