import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';
import { useState } from 'react';

const headerText = 'React Image Bank';
const imageSrc = ['/starry-sky.jpeg', '/cool-kitty.jpg', '/cool-car.jpg'];
const imageCap = ['A Beautiful Image of Space', 'A Cool Cat', 'A Cool Car'];
const imageDescrip = [
  'This is a wonderful sky full of stars!',
  'This is a picture of a very cool cat!',
  'This is a picture of a very cool car!',
];
const buttonText = 'Click for Next Image';

export function App() {
  const [captionIndex, setCaptionIndex] = useState(0);

  function handleCaptionClick() {
    if (captionIndex >= imageCap.length - 1) {
      setCaptionIndex(0);
    } else {
      setCaptionIndex(captionIndex + 1);
    }
  }
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer captionIndex={captionIndex} imageSrc={imageSrc} />
      <ImageCaption captionIndex={captionIndex} imageCap={imageCap} />
      <ImageDescription
        captionIndex={captionIndex}
        imageDescrip={imageDescrip}
      />
      <ButtonContainer
        onCaptionClick={handleCaptionClick}
        buttonText={buttonText}
      />
    </>
  );
}
