const $letters = document.querySelectorAll('span');

const $body = document.querySelector('body');

if (!$letters) throw new Error('letters not found');
if (!$body) throw new Error('body not found');

let index = 0;
$body.addEventListener('keydown', (event: KeyboardEvent): void => {
  if (index > $letters.length) return;
  const letter = $letters[index].textContent;
  const keyPressed = event.key;
  console.log('key pressed: ', keyPressed);
  if (keyPressed === letter) {
    $letters[index].setAttribute('class', 'letter correct');
    index++;
    if (index > $letters.length) return;
    $letters[index].setAttribute('class', 'letter current');
  } else {
    $letters[index].setAttribute('class', ' letter wrong');
  }
});
