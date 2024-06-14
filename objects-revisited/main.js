'use strict';
function checkIfFullTime(daysWorking) {
  return daysWorking.length >= 5;
}
async function addEmployees() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const users = await response.json();
    for (let i = 0; i < 4; i++) {
      let randomJob = jobs[Math.round(Math.random() * (jobs.length - 1))];
      let randomDays = [];
      let randomNumOfDays = Math.floor(Math.random() * 5) + 1;
      const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      for (let i = 0; i < randomNumOfDays; i++) {
        let randomIndex = Math.floor(Math.random() * weekdays.length);
        randomDays.push(weekdays.splice(randomIndex, 1)[0]);
      }
      randomDays.push('Sat', 'Sun');
      let fullTimeStatus = checkIfFullTime(randomDays);
      business.employees[users[i].name] = {
        position: randomJob,
        daysOfWeekWorking: randomDays,
        fullTime: fullTimeStatus,
      };
      business.totalEmployees++;
    }
  } catch (error) {
    console.log('Error occurred: ', error);
  }
}
function deleteEmployee(employeeName) {
  if (business.employees[employeeName]) {
    delete business.employees[employeeName];
    business.totalEmployees--;
  } else {
    console.log('Employee not found');
  }
}
const jobs = [
  'CIO',
  'CMO',
  'Facility Maintenance Specialist',
  'Administrative Support Specialist',
  'Office Operations Specialist',
  'Product Manager',
  'Senior Software Dev',
  'Junior Software Dev',
  'Culture and Engagement Specialist',
  'Digital Marketing Strategist',
  'Unpaid Junior Development Associate',
];
const business = {
  opens: '8:00am',
  closes: '5:00pm',
  totalEmployees: 0,
  daysOpen: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  employees: {},
};
function addWeekends() {
  business.daysOpen.push('Sat', 'Sun');
  for (let employee in business.employees) {
    business.employees[employee].daysOfWeekWorking.push('Sat', 'Sun');
  }
}
window.addEventListener('DOMContentLoaded', async () => {
  addWeekends();
  await addEmployees();
  deleteEmployee('Clementine Bauch');
  console.log(business);
});
