import { useState } from 'react';
import { BannerButton } from './BannerButton';
import { Indicators } from './Indicators';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

export function RotatingBanner() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <>
      <div className="flex flex-col items-center gap-4 grow-0">
        <h1>{items[selectedIndex]}</h1>
        <BannerButton
          buttonName={'Prev'}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          lastIndex={items.length - 1}
        />
        <Indicators
          items={items}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          lastIndex={items.length - 1}
        />
        <BannerButton
          buttonName={'Next'}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          lastIndex={items.length - 1}
        />
      </div>
    </>
  );
}
