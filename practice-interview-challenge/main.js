'use strict';
function getRangeReport(start, end) {
  const rangeArr = [];
  const oddsArr = [];
  const evensArr = [];
  let sum = 0;
  for (let i = start; i <= end; i++) {
    rangeArr.push(i);
    sum += i;
    if (i % 2 === 0) {
      evensArr.push(i);
    } else {
      oddsArr.push(i);
    }
  }
  const report = {};
  report.range = rangeArr;
  report.odds = oddsArr;
  report.evens = evensArr;
  report.total = sum;
  report.average = sum / (end - start + 1);
  return report;
}
console.log(getRangeReport(1, 10));
