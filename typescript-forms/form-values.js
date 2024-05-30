'use strict';
const $formElementObject = document.querySelector('#contact-form');
if (!$formElementObject) throw new Error('form element not found');
$formElementObject.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $formElementObject.elements;
  const msgData = {
    name: $formElements['name'].value,
    email: $formElements['email'].value,
    msg: $formElements['message'].value,
  };
  console.log('message data: ', msgData);
  $formElementObject.reset();
});
