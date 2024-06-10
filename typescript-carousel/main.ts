interface PokemonImg {
  URL: string;
  alt: string;
  class: string;
  id: string;
}

const $carousel = document.querySelector(
  '.carousel-container'
) as HTMLDivElement;
const $imageNodeList = document.querySelectorAll(
  '.carousel-img'
) as NodeListOf<HTMLImageElement>;
const $circleNodeList = document.querySelectorAll(
  '.fa-circle'
) as NodeListOf<HTMLElement>;

if (!$carousel) throw new Error('no carousel found');
if (!$imageNodeList) throw new Error('no image node list found');
if (!$circleNodeList) throw new Error('no circle node list found');

const images: PokemonImg[] = [
  {
    URL: 'images/001.png',
    alt: 'Bulbasaur',
    class: 'carousel-img',
    id: 'bulbasaur',
  },
  {
    URL: 'images/004.png',
    alt: 'Charizard',
    class: 'carousel-img',
    id: 'charizard',
  },
  {
    URL: 'images/007.png',
    alt: 'squirtle',
    class: 'carousel-img',
    id: 'squirtle',
  },
  {
    URL: 'images/025.png',
    alt: 'Pikachu',
    class: 'carousel-img',
    id: 'pikachu',
  },
  {
    URL: 'images/039.png',
    alt: 'Jigglypuff',
    class: 'carousel-img',
    id: 'jigglypuff',
  },
];

let index = 0;
const delay = 3000;

function handleClick(direction: string): void {
  if (direction === 'left') {
    // if click left decrement index
    index--;
  } else if (direction === 'right') {
    // if click right increment index
    index++;
  }
  if (index < 0) {
    index = images.length - 1;
  } else if (index > images.length - 1) {
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
    renderImg(index);
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
