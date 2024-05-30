interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $formElementObject = document.querySelector(
  '#contact-form'
) as HTMLFormElement;
if (!$formElementObject) throw new Error('form element not found');

$formElementObject.addEventListener('submit', (event: Event): void => {
  event.preventDefault();
  const $formElements = $formElementObject.elements as FormElements;
  const msgData = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    msg: $formElements.message.value,
  };

  console.log('message data: ', msgData);
  $formElementObject.reset();
});
