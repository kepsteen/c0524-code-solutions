'use strict';
function checkIfFullTime(employeeObj) {
  if (employeeObj.daysOfWeekWorking.length >= 5) {
    employeeObj.fullTime = true;
  } else {
    employeeObj.fullTime = false;
  }
}
async function addEmployees() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) throw new Error(`Error: ${response.status}`);
    const users = await response.json();
    for (let i = 0; i < 4; i++) {
      const randomJob = jobs[Math.round(Math.random() * (jobs.length - 1))];
      const randomDays = [];
      const randomNumOfDays = Math.floor(Math.random() * 5) + 1;
      const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
      for (let i = 0; i < randomNumOfDays; i++) {
        const randomIndex = Math.floor(Math.random() * weekdays.length);
        randomDays.push(weekdays.splice(randomIndex, 1)[0]);
      }
      randomDays.push('Sat', 'Sun');
      business.employees[users[i].name] = {
        position: randomJob,
        daysOfWeekWorking: randomDays,
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
function addWeekends() {
  business.daysOpen.push('Sat', 'Sun');
  for (const employee in business.employees) {
    business.employees[employee].daysOfWeekWorking.push('Sat', 'Sun');
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
  totalEmployees: 4,
  daysOpen: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  employees: {
    Tim: {
      position: 'CEO',
      daysOfWeekWorking: ['Mon', 'Tue', 'Wed', 'Thu'],
    },
    Tom: {
      position: 'Unpaid Junior Development Associate',
      daysOfWeekWorking: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
    Tam: {
      position: 'CTO',
      daysOfWeekWorking: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
    Tammy: {
      position: 'CFO',
      daysOfWeekWorking: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    },
  },
};
window.addEventListener('DOMContentLoaded', async () => {
  addWeekends();
  await addEmployees();
  for (let employee in business.employees) {
    let employeeObj = business.employees[employee];
    checkIfFullTime(employeeObj);
  }
  deleteEmployee('Clementine Bauch');
  console.log(business);
});
