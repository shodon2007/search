import React from 'react'

const WordList = ({ words, search }) => {
    return (
        <div className='words'>
            {words.map((word) => {
                let searchIndex = word.indexOf(search);
                const notFound = searchIndex === -1;
                return notFound
                    ? ''
                    : <div key={word}>
                        {word.slice(0, searchIndex)}
                        <span>{search}</span>
                        {word.slice(searchIndex + search.length)}
                    </div>
            })}
        </div>
    )
}

export default WordList