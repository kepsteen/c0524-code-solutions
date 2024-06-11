# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?

The && and || is used to check for the truthiness of the operands and take actions depending on those checks

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

The short-circuit evaluation means that if one of the operands is a falsey value then the function will stop and return that value regardless if they are other operands.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

It returns the right hand side operand if the left hand side operand is null or undefined. This differs from the || operator in that it ignores the other falsey values such as 0 or ''. In the case where 0 or '' is the left side operand then the right hand operand will be returned.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

It allows for a different expression to execute depending on if the condition is true or false. Unlike in if/else statements the ternary operator can return other values besides a boolean.

- What is the `?.` (optional chaining) operator? When would you use it?

The optional chaining operator accesess a property or method of an object and if the property or method is undefined or null the expression short circuits and evaluates to undefined instead of throwing an error.

- What is `...` (spread) syntax? How do you use it with arrays and objects?

```javascript
...iterableObj // array or object
```

It can be used to clone or merge arrays and objects into other arrays or objects.

- What data types can be spread into an array? Into an object?

Only iterable values like an array or string can spread in array literals. Arrays and primitives can be spread into objects but only strings have enumerable own properties.

- How does spread syntax differ from rest syntax?

the spread syntax is used in the function call as an arugment whereas the rest syntax is used as a parameter which allows for optional parameters to be placed within an array when the function is called.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
