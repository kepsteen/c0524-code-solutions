# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  static
- How does setting `position: relative` on an element affect document flow?
  It will first take up the same space in the document flow but can be moved
- How does setting `position: relative` on an element affect where it appears on the page?
  It doesn't do anything unless top, bottom, left and right are used to modify its position
- How does setting `position: absolute` on an element affect document flow?
  It will no longer exist in document flow
- How does setting `position: absolute` on an element affect where it appears on the page?
  It will be positioned at the top of the containing element unless top, bottom, left and right are used to modify the position
- How do you constrain an absolutely positioned element to a containing block?
  the containing block must have the positioned property set to absolute. If not the containing block will be the inital containing block which takes up the whole view port
- What are the four box offset properties?
  top, bottom, left and right

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
