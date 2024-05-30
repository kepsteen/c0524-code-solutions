const $lightBulb = document.querySelector('#light-bulb');
const $body = document.querySelector('body');

if (!$lightBulb) throw new Error('No light bulb found');
if (!$body) throw new Error('No body found');

const classes = $lightBulb?.classList;
const classesBody = $body.classList;

$lightBulb.addEventListener('click', () => {
  classes.toggle('light');
  classesBody.toggle('light');
});
