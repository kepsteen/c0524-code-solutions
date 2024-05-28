# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?

To debug and ensure code is working properly

- What is the purpose of events and event handling?

To perform an action through a callback function when a certain even occurs

- Are all possible parameters required to use a JavaScript method or function?

some paramters are not required

- What method of element objects lets you set up a function to be called when a specific type of event occurs?

the addEventListener method

- What is a callback function?

It is a function that is passed into another function as an argument

- What object is passed into an event listener callback when the event fires?

the event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?

the event.target is the element that initiated the event

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```

When a function reference without the parentheses is passed as an argument then the event can trigger the function. When the parenthes are used the return of the function handleClick is being passed as an argument and nothing will happen when the element is clicked

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
