'use strict';
function handleFocus(event) {
  console.log('event: focus');
  const eventTarget = event.target;
  console.log('eventTarget: ', eventTarget.name);
}
function handleBlur(event) {
  console.log('event: blur');
  const eventTarget = event.target;
  console.log('eventTarget: ', eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log('eventTarget value: ', eventTarget.value);
}
const $nameInput = document.querySelector('#user-name');
if (!$nameInput) throw new Error('name input not found');
$nameInput.addEventListener('focus', handleFocus);
$nameInput.addEventListener('blur', handleBlur);
$nameInput.addEventListener('input', handleInput);
const $emailInput = document.querySelector('#user-email');
if (!$emailInput) throw new Error('email input not found');
$emailInput.addEventListener('focus', handleFocus);
$emailInput.addEventListener('blur', handleBlur);
$emailInput.addEventListener('input', handleInput);
const $msgInput = document.querySelector('#user-message');
if (!$msgInput) throw new Error('msg input not found');
$msgInput.addEventListener('focus', handleFocus);
$msgInput.addEventListener('blur', handleBlur);
$msgInput.addEventListener('input', handleInput);
