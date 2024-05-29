'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('task list not found');
$taskList.addEventListener('click', (event) => {
  const $eventTarget = event.target;
  console.log('eventTarget: ', $eventTarget);
  if ($eventTarget.tagName === 'BUTTON') {
    const $taskListItem = $eventTarget.closest('.task-list-item');
    if (!$taskListItem) throw new Error('task list item not found');
    $taskListItem.remove();
  }
});
