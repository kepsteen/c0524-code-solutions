import { useState } from 'react';
import './App.css';
import { ButtonContainer } from './ButtonContainer';

function App() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
  }
  return (
    <>
      <ButtonContainer onButtonClick={handleButtonClick} count={count} />
    </>
  );
}

export default App;
