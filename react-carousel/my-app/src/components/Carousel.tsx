import { PiCaretDoubleLeftBold, PiCaretDoubleRightBold } from 'react-icons/pi';
import { FaCircle, FaRegCircle } from 'react-icons/fa6';
import { Image } from '../App';
import React, { useEffect, useState } from 'react';

type Props = {
  images: Image[];
};

export function Carousel({ images }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(handleRightClick, 3000);
    return () => clearTimeout(timeoutId);
  }, [selectedIndex]);

  function handleLeftClick() {
    selectedIndex > 0
      ? setSelectedIndex(selectedIndex - 1)
      : setSelectedIndex(images.length - 1);
  }

  function handleRightClick() {
    selectedIndex < images.length - 1
      ? setSelectedIndex(selectedIndex + 1)
      : setSelectedIndex(0);
  }
  return (
    <>
      <div className="flex items-center gap-4">
        <button onClick={handleLeftClick}>
          <PiCaretDoubleLeftBold className="text-4xl" />
        </button>
        <img
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          className="w-[300px] h-[300px]"
        />
        <button id="right-caret" onClick={handleRightClick}>
          <PiCaretDoubleRightBold className="text-4xl" />
        </button>
      </div>
      <div className="flex justify-center mt-6 indicators">
        <ul className="flex gap-4">
          {images.map((image, index) =>
            index === selectedIndex ? (
              <button id={`${index}`} onClick={() => setSelectedIndex(index)}>
                <FaCircle key={image.src} className="text-2xl" />
              </button>
            ) : (
              <button id={`${index}`} onClick={() => setSelectedIndex(index)}>
                <FaRegCircle key={image.src} className="text-2xl" />
              </button>
            )
          )}
        </ul>
      </div>
    </>
  );
}
