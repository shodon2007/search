import React from 'react';

const ShowList = (props) => {
    let { words, search } = props;
    return (
        <div className='word-list'>
            {
                words.map(word => {
                    let searchWord = word.indexOf(search.toLowerCase());
                    return <div key={Math.random()}>
                        <span>{word.slice(0, searchWord)}</span>
                        <span className="searched">{search.toLowerCase()}</span>
                        <span>{word.slice(searchWord + search.length)}</span>
                    </div>
                })
            }
        </div>
    );
};

export default ShowList;