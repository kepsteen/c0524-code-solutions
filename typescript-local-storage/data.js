'use strict';
let todos = [];
let previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (!previousTodosJSON) throw new Error('no previous local storage');
todos = JSON.parse(previousTodosJSON);
window.addEventListener('beforeunload', () => {
  const todosJSON = JSON.stringify(todos);
  console.log(todosJSON);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
