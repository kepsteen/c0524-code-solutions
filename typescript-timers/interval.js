'use strict';
const $countdownDisplay = document.querySelector('.countdown-display');
if (!$countdownDisplay) throw new Error('no countdown display found');
let count = $countdownDisplay.textContent;
let intervalId = setInterval(() => {
  count--;
  if (count === 0) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  } else {
    $countdownDisplay.textContent = count;
  }
}, 1000);
