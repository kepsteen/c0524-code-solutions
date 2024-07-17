# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?

Insert, Select, Update, Delete

- How do you add a row to a SQL table?

insert into <table_name> (<column_name1>, <column_name2>)
-- values (<value1>, <value2>);

- How do you add multiple rows to a SQL table at once?

Separate the value for each row with a comma

- How do you update rows in a database table?

update <table_name>
--set <attribute>
--where <attribute> = <value>

- How do you delete rows from a database table?

delete
--from <table_name>
--where <attribute> = <value>
--returning \*;
^optional return clause to return deleted rows

- Why is it important to include a `where` clause in your `update` and `delete` statements?

If you do not include a where clause it will update or delete every row in the table

- How do you accidentally delete or update all rows in a table?

By not including a where clause

- How do you get back the modified row without a separate `select` statement?

with a returning clause

- Why did you get an error when trying to delete certain films?

There is matching data specifically the filmId in the castMembers table, so the database won't allow you to delete films that contain the same filmId found in the castMember rows

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
