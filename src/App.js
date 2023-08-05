import React, { useState } from 'react';
import wordsJSON from './words.json';
import WordList from './components/WordList';
import SearchInput from './components/SearchInput';

function App() {
  let [search, setSearch] = useState('');

  return (
    <div className='app'>
      <SearchInput search={search} setSearch={setSearch} />
      <WordList words={wordsJSON} search={search} />
    </div>
  );
}

export default App;
