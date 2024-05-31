const $tabContainer = document.querySelector('.tab-container');
const $tabElements = document.querySelectorAll('.tab');
const $viewElements = document.querySelectorAll('.view');

if (!$tabContainer) throw new Error('tab container not found');
if (!$tabElements) throw new Error('tab Elements not found');
if (!$viewElements) throw new Error('view elements not found');

$tabContainer.addEventListener('click', (event: Event) => {
  // Change the Tab by toggling active class on tabElement
  const $eventTarget = event.target as HTMLDivElement;
  console.log($eventTarget.textContent);
  for (let i = 0; i < $tabElements.length; i++) {
    if ($tabElements[i].matches('.active')) {
      $tabElements[i].classList.toggle('active');
    } else if ($tabElements[i] === $eventTarget) {
      $tabElements[i].classList.toggle('active');
    }
  }

  // Change the view of corresponding tabElement
  const $eventTargetDataView = $eventTarget.dataset.view;
  for (let i = 0; i < $viewElements.length; i++) {
    const $viewElement = $viewElements[i] as HTMLDivElement;
    console.log('language', $viewElement.dataset.view);
    if (
      $viewElement.dataset.view !== $eventTargetDataView &&
      !$viewElement.classList.contains('hidden')
    ) {
      $viewElements[i].classList.toggle('hidden');
    } else if ($viewElement.dataset.view === $eventTargetDataView) {
      $viewElements[i].classList.toggle('hidden');
    }
  }
});
