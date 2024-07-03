# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to dynamically create a list of React components?

Any time there is a list that may be updated

- Why is it important for React components to be data-driven?

So that UI and views only render when users cause an action that needs to trigger a rerender

- What `Array` method is commonly used to create a list of React components?

map

- Why do components in a list need to have unique keys?

the keys tell react which item in the array that the react element corresponds to, which is necessary if the DOM is updated

- What is the best value to use as a "key" prop when rendering lists?

The best value when rendering a list is the index of the item

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
