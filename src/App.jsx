import { useState } from "react";

function App() {
  let [search, setSearch] = useState('');
  const [words, setWords] = useState([
    'a', 'able', 'apple', 'above', 'across', 'shouted',
    'australia', 'against', 'apartment', 'beautiful', 'bitch',
    'business', 'become', 'between', 'breakfast', 'reservations',
    'building', 'cabinet', 'cafeteria', 'captain', 'fuck',
    'careful', 'century', 'children', 'cigarettes', 'president',
    'climbed', 'combustible', 'confidential', 'continued',
    'country', 'coupon', 'covered', 'daughter', 'decimal',
    'destination', 'developed', 'difference', 'discovered',
    'download', 'drawing', 'dress', 'each', 'edge', 'emergency',
    'english', 'employer', 'everyone', 'everything', 'experiment',
    'family', 'frontend', 'feeling', 'finished', 'firefighter',
    'flammable', 'flowers', 'fraction', 'gentlemen', 'supermarket',
    'government', 'grandparents', 'gamedev', 'ground', 'happened',
    'hardware', 'here', 'history', 'hospital', 'however', 'important',
    'information', 'instruments', 'interview', 'jumped', 'keyboard',
    'language', 'laptop', 'laundry', 'length', 'machine', 'manager',
    'message', 'middle', 'morning', 'mountain', 'northbound', 'newspapers',
    'often', 'paragraph', 'passengers', 'pedestrians', 'perishable',
    'probably', 'question', 'reached', 'receptionist', 'remember',
    'restaurant', 'round', 'scientist', 'sentence', 'senior', 'shodon',
    'skateboard', 'something', 'southbound', 'statement', 'students',
    'suppose', 'surprise', 'temperature', 'themselves', 'thousand',
    'together', 'training', 'understand', 'usually', 'warning', 'website',
    'whether', 'window', 'withdrawal', 'young', 'supermarket', 'girl',
  ]);

  const [newWords, setNewWords] = useState([...words])

  function showList() {
    setWords(words.map((el) => {
      let searchWord = el.indexOf(search.toLowerCase());
      if (searchWord != -1 || search == '') {
        return true;
      }
      return false;
    }))
  }

  return (
    <div className="App">
      <input value={search} onChange={e => {
        setSearch(e.target.value);
        showList()
      }} />
      <div className='word-list'>
        {newWords.map((word) => {
          let searchWord = word.indexOf(search.toLowerCase());
          if (searchWord != -1) {
            return <div className="word">
              <span>{word.slice(0, searchWord)}</span><b>{search}</b><span>{word.slice(searchWord + search.length)}</span>
            </div>;
          }
        })}
      </div>
    </div>
  );
}

export default App;
