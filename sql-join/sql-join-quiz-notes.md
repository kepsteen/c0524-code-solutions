# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?

An attribute that links two tables together

- How do you join two SQL tables? (Provide at least two syntaxes.)

Alias column names

select "<table_name>"."<column_name>" as "<alias>"
"<table2_name>"."<column2_name>" as "<alias2>"
from "<table_name>"
join "<table2_name>" using ("<column3_name>");

Alias table names

select "<table1_alias>"."<column1_name>" as "<column1_alias>"
"<table2_alias>"."<column2_name>" as "<column2_alias>"
from "<table1>" as "<table1_alias>"
join "<table2>" as "<table2_alias>" using ("<column3_name>)

- How do you temporarily rename columns or tables in a SQL statement?

You use an alias

- How do you create a one-to-many relationship between two tables?

the foreign key in one table points to a primary key in one table

- How do you create a many-to-many relationship between two tables?

a foreign key in one table points to another foreign key in another table

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
