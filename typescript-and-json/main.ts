interface Book {
  isbn: string;
  title: string;
  author: string;
}

const books: Book[] = [
  {
    isbn: '0',
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
  },
  {
    isbn: '1',
    title: 'Harry Potter',
    author: 'J.K. Rowline',
  },
  {
    isbn: '2',
    title: 'The Bible',
    author: 'Jesus',
  },
];

console.log('books: ', books);
console.log('type of books', typeof books);

const booksJSON = JSON.stringify(books);
console.log('booksJSON', booksJSON);
console.log('typeof booksJSON', typeof booksJSON);

const studentsJSON = '[{"id":"1","name":"Cody"},{"id":"2","name":"Mark"}]';
console.log('studentsJSON: ', studentsJSON);
console.log('typeof studentsJSON: ', typeof studentsJSON);

const students = JSON.parse(studentsJSON);
console.log('parsedJSON: ', students);
