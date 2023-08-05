import React from 'react'

const SearchInput = ({ search, setSearch }) => {
    return (
        <input
            className="search"
            placeholder='enter search'
            type='text'
            value={search}
            onChange={e => setSearch(e.target.value.toLowerCase())}
        />
    )
}

export default SearchInput;