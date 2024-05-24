# css-cascade-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the four components of "the Cascade".
  source order, inheritance, specificity and !important
- What does the term "source order" mean with respect to CSS?
  It's the order of the css rulesets in the document. If multiple rules affect a property of an element the one that comes last will have priority
- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  the computed value of an inherited property will be assigned to the child if that property has no value
- List the three selector types in order of increasing specificity.
  tag name, class , id
- Why is using `!important` considered bad practice?
  Becuase it can make error handling and debuggin more difficult

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
