import React, { useState } from 'react';
import InputWord from './InputWord';
import ShowList from './ShowList';

const Search = () => {
    const id1 = 12121;
    const id2 = 24231413;
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
    const [newWords, setNewWords] = useState([...words]);
    function showLists() {
        setNewWords(words.filter(word => {
            let searchWord = word.indexOf(search.toLowerCase());
            if (searchWord != -1) {
                return true;
            } else {
                return false;
            }
        }));
    };
    function inputChange(e) {
        search = e.target.value;
        setSearch(search);
        showLists();
    }
    return (
        <div className='App'>
            <InputWord changer={inputChange} search={search} />
            <ShowList words={newWords} search={search} />
        </div>
    );
};

export default Search;