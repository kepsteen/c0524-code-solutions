# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

This allows node to interact with the PostgreSQL database

- How do you tell `pg` which database to connect to?

You add the database name to the end of the connection string

- How do you send SQL to PostgreSQL from your Express server?

with the query method on the pool object and you pass in the query and the parameters

- How do you get the rows return from the SQL query?

By accessing the rows property of the result of the query

- What must you always remember to put around your asynchronous route handlers? Why?

the async keyword because querying the database is an asynchronous activity

- What is a SQL Injection Attack and how do you avoid it in `pg`?

A SQL injection attack is when a user injects their own sql queries into your requests. This can be avoided by using parameterized queries

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
