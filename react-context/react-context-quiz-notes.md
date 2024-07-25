# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?

The purpose of context is to be able to pass data down deeply without the need for prop drilling

- What values can be stored in context?

primitives, objects, and functions that manipulate the data

- How do you create context and make it available to the components?

You create context using the createContext method. You can make it available to components by wrapping the first common parent in the Context provider

- How do you access the context values?

Access the context values with the useContext hook

- When would you use context? (in addition to the best answer: "rarely")

Rarely, You should first try to use local state, or pass it down through props before using context

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
