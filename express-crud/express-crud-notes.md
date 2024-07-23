# express-crud-notes

Type the data to be returned and use a generic like so

```typescript
interface Grade {
  name: string;
  course: string;
  score: number;
}

const result = await db.query<Grade>(sql);
```

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
