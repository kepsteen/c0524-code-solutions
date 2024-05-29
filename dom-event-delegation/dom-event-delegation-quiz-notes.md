# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?

the event.target is the object that initiated the event

- Why is it possible to listen for events on one element that actually happen its descendent elements?

Because of the event bubbling behavior which results in an event which occurs on a child element to propagate to the root element.

- What DOM element property tells you what type of element it is?

tagName

- What does the `element.closest()` method take as its argument and what does it return?

It takes a css selector as its argument and returns the closest ancestor element or itself, that matches the css selector

- How can you remove an element from the DOM?

element.remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?

If you add an event listener to the parent element, then any event is initiated by a child element will be caught by the parent as the event bubbles up the DOM tree.

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
