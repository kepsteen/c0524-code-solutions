'use strict';
const $text = document.querySelector('.message');
if (!$text) throw new Error('no text found');
setTimeout(() => {
  $text.textContent = 'Hello There';
}, 2000);
