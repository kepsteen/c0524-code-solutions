import { useRef, useState } from 'react';
import './App.css';
import { Popup } from './components/Popup';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const positionTo = useRef<HTMLButtonElement | null>(null);
  const menu = ['dashboard', 'login', 'about'];

  function handlePopupClick() {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <>
      <button onClick={handlePopupClick} ref={positionTo}>
        Popup
      </button>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
        odio dolore quasi debitis. Adipisci porro eveniet animi aliquid
        voluptatibus harum, aspernatur necessitatibus nam error alias nobis
        officiis quae. Recusandae, quod.
      </p>
      <Popup
        isOpen={isOpen}
        positionTo={positionTo}
        onClose={() => setIsOpen(false)}>
        {menu.map((item) => (
          <li
            key={item}
            className="px-4 py-2 text-left bg-slate-100 hover:bg-slate-600 hover:text-white">
            {item}
          </li>
        ))}
      </Popup>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, incidunt
        quidem! Voluptatem nulla facere voluptatum. Id praesentium quae
        exercitationem ducimus, alias, dicta tenetur hic facere laboriosam
        explicabo at, sapiente sed.
      </p>
    </>
  );
}

export default App;
