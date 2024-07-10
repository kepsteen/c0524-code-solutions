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
    const timeoutId = setTimeout(() => {
      selectedIndex < images.length - 1
        ? setSelectedIndex(selectedIndex + 1)
        : setSelectedIndex(0);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [selectedIndex]);
  function handleClick(event: React.MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    switch (target.id) {
      case 'left-caret':
        selectedIndex > 0
          ? setSelectedIndex(selectedIndex - 1)
          : setSelectedIndex(images.length - 1);
        break;
      case 'right-caret':
        selectedIndex < images.length - 1
          ? setSelectedIndex(selectedIndex + 1)
          : setSelectedIndex(0);
        break;
      default:
        setSelectedIndex(parseInt(target.id));
    }
  }

  return (
    <>
      <div className="flex items-center gap-4">
        <button id="left-caret" onClick={(e) => handleClick(e)}>
          <PiCaretDoubleLeftBold className="text-4xl" />
        </button>
        <img
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          className="w-[300px] h-[300px]"
        />
        <button id="right-caret" onClick={(e) => handleClick(e)}>
          <PiCaretDoubleRightBold className="text-4xl" />
        </button>
      </div>
      <div className="flex justify-center mt-6 indicators">
        <ul className="flex gap-4">
          {images.map((image, index) =>
            index === selectedIndex ? (
              <button id={`${index}`} onClick={(e) => handleClick(e)}>
                <FaCircle key={image.src} className="text-2xl" />
              </button>
            ) : (
              <button id={`${index}`} onClick={(e) => handleClick(e)}>
                <FaRegCircle key={image.src} className="text-2xl" />
              </button>
            )
          )}
        </ul>
      </div>
    </>
  );
}
