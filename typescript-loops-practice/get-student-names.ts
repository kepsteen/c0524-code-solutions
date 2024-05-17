/* exported getStudentNames */
interface Student {
  name: string;
}
function getStudentNames(students: Student[]): string[] {
  const nameArr = [];
  for (let i = 0; i < students.length; i++) {
    nameArr.push(students[i].name);
  }
  return nameArr;
}
