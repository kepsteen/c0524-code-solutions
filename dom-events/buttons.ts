const $clickableButton = document.querySelector('.click-button');
if (!$clickableButton) throw new Error('Button not found');

function handleClick(event: Event): void {
  console.log('button clicked');
  console.log('event: ', event);
  console.log('event target: ', event.target);
}

$clickableButton.addEventListener('click', handleClick);

const $hoverBtn = document.querySelector('.hover-button');
if (!$hoverBtn) throw new Error('Hover btn not found');

function handleMouseover(event: Event): void {
  console.log('button hovered');
  console.log('event: ', event);
  console.log('event target: ', event.target);
}

$hoverBtn.addEventListener('mouseover', handleMouseover);

const $doubleClickBtn = document.querySelector('.double-click-button');
if (!$doubleClickBtn) throw new Error('Double click button not found');

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event target: ', event.target);
}

$doubleClickBtn.addEventListener('dblclick', handleDoubleClick);
