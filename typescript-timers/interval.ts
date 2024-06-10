const $countdownDisplay = document.querySelector(
  '.countdown-display'
) as HTMLHeadingElement;
if (!$countdownDisplay) throw new Error('no countdown display found');

let count: any = $countdownDisplay.textContent;
const intervalId = setInterval(() => {
  count--;
  if (count === 0) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  } else {
    $countdownDisplay.textContent = count;
  }
}, 1000);
