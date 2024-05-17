'use strict';
function getStudentNames(students) {
  const nameArr = [];
  for (let i = 0; i < students.length; i++) {
    nameArr.push(students[i].name);
  }
  return nameArr;
}
