import './App.css';
import { ButtonContainer } from './ButtonContainer';
import { ImageCaption } from './ImageCaption';
import { ImageContainer } from './ImageContainer';
import { ImageDescription } from './ImageDescription';
import { Header } from './header';

function App() {
  return (
    <>
      <Header />
      <ImageContainer />
      <ImageCaption />
      <ImageDescription />
      <ButtonContainer />
    </>
  );
}

export default App;
