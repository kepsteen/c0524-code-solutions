# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

hooks are special functions that allow components to have access to state and other features

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

1 - Must start with use and followed by an uppercase letter
2 - Hooks can only be called by React components and other hooks
3 - All hooks must be called at the top level of a component and in the same order

- What is the purpose of state in React?

To allow for components to save some values between component rerenders

- Why can't we just maintain state in a local variable?

every time the component is rendered the local variable will be reset

- What two actions happen when you call a `state setter` function?

creates the state variable an the function that updates the variable

- When does the local `state variable` get updated with the new value?

It is cached and then updated once the component rerenders

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
