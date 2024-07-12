# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?

The dialog element is used to show popups on the screen

- How do you show and hide a modal dialog?

Using the showModal and close methods on the modal

- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?

by passing them down props. the dialog element is a normal html element which does not take props

- How do you call the dialog element's functions in React?

You must first get a reference to the element using the useRef hook then you can call the methods on the current property of the reference

- How can you render nested components or JSX elements in React?

By creating an opening and closing tag for the component and nesting any components inside

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
