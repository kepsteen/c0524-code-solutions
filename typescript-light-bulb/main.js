'use strict';
const $lightBulb = document.querySelector('#light-bulb');
const $body = document.querySelector('body');
if (!$lightBulb || !$body) throw new Error('No light bulb or body bro');
const classes = $lightBulb?.classList;
const classesBody = $body.classList;
$lightBulb.addEventListener('click', () => {
  classes.toggle('light');
  classesBody.toggle('light');
});
