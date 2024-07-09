import { useState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { SearchableList } from './components/SearchableList';
import { Title } from './components/Title';
import { Gradient } from './components/Gradient';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Title />
      <SearchBar setSearchTerm={setSearchTerm} />
      <SearchableList searchTerm={searchTerm} />
      <Gradient />
    </>
  );
}

export default App;
