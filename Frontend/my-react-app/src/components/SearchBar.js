import React from 'react';

const SearchBar = () => {
    return (
        <header className='header'>
            <input className='input-field' type='text' placeholder='Try enter: Shoes' />
            <button className='input-button' type='submit'>Search</button>
        </header>
    );
};

export default SearchBar;
