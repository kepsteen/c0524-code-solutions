const $carousel = document.querySelector(
  '.carousel-container'
) as HTMLDivElement;
const $imageNodeList = document.querySelectorAll(
  '.carousel-img'
) as NodeListOf<HTMLImageElement>;
const $circleNodeList = document.querySelectorAll(
  '.fa-circle'
) as NodeListOf<HTMLElement>;
const $faster = document.querySelector('#faster') as HTMLAnchorElement;

if (!$carousel) throw new Error('no carousel found');
if (!$imageNodeList) throw new Error('no image node list found');
if (!$circleNodeList) throw new Error('no circle node list found');
if (!$faster) throw new Error('faster button not found');

let index = 0;
let delay = 3000;

function handleClick(direction: string): void {
  if (direction === 'left') {
    index--;
  } else if (direction === 'right') {
    index++;
  }
  if (index < 0) {
    index = $imageNodeList.length - 1;
  } else if (index > $imageNodeList.length - 1) {
    index = 0;
  }
}

function renderImg(imgIndex: number): void {
  for (let i = 0; i < $imageNodeList.length; i++) {
    if (i === imgIndex) {
      $imageNodeList[i].classList.remove('hidden');
      $circleNodeList[i].classList.remove('fa-regular');
      $circleNodeList[i].classList.add('fa-solid', 'fa-fade');
    } else {
      $imageNodeList[i].classList.add('hidden');
      $circleNodeList[i].classList.add('fa-regular');
      $circleNodeList[i].classList.remove('fa-solid', 'fa-fade');
    }
  }
}

function resetTimer(): void {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    handleClick('right');
  }, delay);
}

$carousel.addEventListener('click', (event: Event) => {
  const $eventTarget = event.target as HTMLElement;
  if ($eventTarget.classList.contains('fa-chevron-left')) {
    resetTimer();
    handleClick('left');
  } else if ($eventTarget.classList.contains('fa-chevron-right')) {
    resetTimer();
    handleClick('right');
  } else if (
    $eventTarget.classList.contains('fa-circle') &&
    $eventTarget.dataset.index
  ) {
    resetTimer();
    index = parseInt($eventTarget.dataset.index);
  }
  renderImg(index);
});

let intervalId = setInterval((): void => {
  handleClick('right');
  renderImg(index);
}, 3000);

$faster.addEventListener('click', (): void => {
  if (delay > 300) {
    delay -= 300;
    console.log(delay);
  }
  resetTimer();
});
