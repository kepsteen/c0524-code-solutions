import { Header } from './Header';
import { ImageContainer } from './ImageContainer';
import { ImageCaption } from './ImageCaption';
import { ImageDescription } from './ImageDescription';
import { ButtonContainer } from './ButtonContainer';
import './App.css';

const headerText = 'React Image Bank';
const imageSrc = [
  '/starry-sky.jpeg',
  '/wings-of-orion.jpg',
  '/north-american-and-pelicuan-nebulae.jpg',
];
const imageCap = [
  'A Beautiful Image of Space',
  'Wings of Orion',
  'North American and Pelican nebulae mosaic',
];
const imageDescrip = [
  'lorem ipsum beaituful picturem ofo Spaceti',
  'lorem Wingsum ofo Orinum',
  'lorem Pelicanit Nebualesum',
];

const buttonText = 'Click for Next Image';

export default function App() {
  return (
    <>
      <Header headerText={headerText} />
      <ImageContainer imageSrc={imageSrc} />
      <ImageCaption imageCap={imageCap} />
      <ImageDescription imageDescrip={imageDescrip} />
      <ButtonContainer buttonText={buttonText} />
    </>
  );
}
