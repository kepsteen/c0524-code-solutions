'use strict';
const $letters = document.querySelectorAll('span');
const $body = document.querySelector('body');
if (!$letters) throw new Error('letters not found');
if (!$body) throw new Error('body not found');
let index = 0;
let correctKeyPress = false;
let attempts = 0;
$body.addEventListener('keydown', (event) => {
  if (index >= $letters.length) return;
  let letter = $letters[index].textContent;
  let keyPressed = event.key;
  console.log('key pressed: ', keyPressed);
  if (keyPressed !== letter) {
    $letters[index].setAttribute('class', 'letter wrong');
    correctKeyPress = false;
  } else if (keyPressed === letter && index < $letters.length - 1) {
    $letters[index].setAttribute('class', 'letter correct');
    index++;
    $letters[index].setAttribute('class', 'letter current');
    correctKeyPress = true;
  } else if (keyPressed === letter && index >= $letters.length - 1) {
    $letters[index].setAttribute('class', 'letter correct');
    index++;
    correctKeyPress = true;
  }
  if (!correctKeyPress) attempts++;
  if (index > $letters.length - 1) {
    console.log('Attempts: ', attempts);
    const accuracyScore = Math.round(
      ($letters.length / ($letters.length + attempts)) * 100
    );
    const $accuracyText = document.querySelector('#accuracy');
    const $statsContainer = document.querySelector('.stats');
    if (!$accuracyText) throw new Error('No accuracy found');
    if (!$statsContainer) throw new Error('No stats container found');
    $accuracyText.textContent = `Accuracy: ${accuracyScore}%`;
    console.log($accuracyText.textContent);
    $statsContainer.classList.remove('hidden');
  }
});
