let clicks = 0;

const $hotButton = document.querySelector('.hot-button');
const $clicksTxt = document.querySelector('.click-count');

if (!$hotButton) throw new Error('Element not found');
if (!$clicksTxt) throw new Error('Element not found');

function handleClick(): void {
  if (!$hotButton || !$clicksTxt) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  clicks++;
  $clicksTxt.innerHTML = `Clicks: ${clicks}`;
  if (clicks === 4) {
    $hotButton.className = 'hot-button cool';
  } else if (clicks === 7) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicks === 10) {
    $hotButton.className = 'hot-button warm';
  } else if (clicks === 13) {
    $hotButton.className = 'hot-button hot';
  } else if (clicks >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', handleClick);
