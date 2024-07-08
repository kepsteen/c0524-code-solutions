import { useState } from 'react';
import './App.css';
import { BannerButton } from './BannerButton';
import { RotatingBanner } from './RotatingBanner';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number>(1);

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
        <RotatingBanner
          items={items}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
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

export default App;
