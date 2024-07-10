# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

During the initial render

- What is a React Effect?

A react effect is a hook that allows you to run some code after rendering that can sync with an external system

- When should you use an Effect and when should you not use an Effect?

You should use effects for timed functions or API calls not for user events or transforming data

- When do Effects run?

Effects run after a component is rendered

- What function is used to declare an Effect?

a callback function

- What are Effect dependencies and how do you declare them?

Effect dependencies allow for the Effect to run only after some kind of state change, you declare them as the 2nd argument in the useEffect hook

- Why would you want to clean up from an Effect?

A function is sometimes needed to stop the action that the Effect starts

- How do you clean up from an Effect?

You return the cleanup function in the Effect

- When does the cleanup function run?

The cleanup function runs each time before the Effect runs again and once more when the component is unmounted

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
