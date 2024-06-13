# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?

fetch returns a promise that resolves to a response object

- What is the default request method used by `fetch()`?

GET

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?

pass an options object as the second argument of fetch with a "method" key and value of the method you want to specify

- How does `fetch` report errors?

Fetch will consider a promise rejected only if there are network failures or something prevent the request from completing. The response.ok can be used to handle an HTTP errors that may arise from the request

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
