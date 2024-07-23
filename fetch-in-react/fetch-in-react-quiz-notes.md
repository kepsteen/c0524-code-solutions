# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?

The fetch method can make http requests

- What two things need to be done to properly handle HTTP request errors? Why?

You must first check if the response was successful by accessing the ok property of the response. This is necessary because some error statuses won't reject the promise. Finally if the promise is rejected or some other error occurs the error will be caught in the try catch block

- How can `useEffect` be used to load data for a component?

useEffect can be used to load data for a component by defining an async function within the use effect which will fetch the data

- How do you use `useEffect` to load component data just once when the component mounts?

If you include an empty dependency array in the useEffect then it will load the component data once after the component mounts

- How do you use `useEffect` to load component data every time the data key changes?

You use useEffect to load component data every time the data key changes by adding the data key as a dependency so every time it changes the useEffect will run

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

React query or Vercel SWR

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
