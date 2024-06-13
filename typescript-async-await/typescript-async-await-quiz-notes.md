# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?

They are syntatic sugar for promises which allows asynchronous code to be essentially be written synchronously. The async keyword is used to denote the function as asynchronous and the await keyword tells the runtime to pause code execution until the promise is resolved or rejected.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?

The code is read sequentially in async wait and synchronously in promise.then and .catch. Also async await uses the the standard try/catch/finally exception handling.

- When do you use `async`?

You use async before the function name if the function returns a promise.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)

You use await before a callback function in order to tell the JS runtime to wait for the promise returned by the callback function to finish. If you use an await on a synchronous function it would treat the return value of the function as a promise and try to resolve and reject is as much, even though the value is readily available

- How do you handle errors with `await`?

try/catch/finally blocks

- What do `try`, `catch` and `throw` do? When do you use them?

Try will try to run code, but if there is an error the catch block will catch the error and execute code based on the result of the error. Throw will display the error to the user.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?

the promise will be stuck in the pending state.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?

async await because it feels more readable.

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
