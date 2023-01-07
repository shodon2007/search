import React from 'react';

const InputWord = ({ changer, search }) => {
    return (
        <input
            className="search"
            type='text'
            value={search}
            onChange={e => {
                changer(e);
            }} />
    );
};

export default InputWord;