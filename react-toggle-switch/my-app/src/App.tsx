import { useState } from 'react';
import './App.css';
import { SwitchContainer } from './components/SwitchContainer';

function App() {
  const [isActive, setActiveStatus] = useState(false);

  function handleToggle() {
    isActive ? setActiveStatus(false) : setActiveStatus(true);
  }
  return (
    <>
      <main
        className={`flex h-screen place-content-center ${
          isActive ? 'bg-slate-50' : 'bg-slate-700'
        } transition-colors`}>
        <SwitchContainer onToggle={handleToggle} isActive={isActive} />
      </main>
    </>
  );
}

export default App;
