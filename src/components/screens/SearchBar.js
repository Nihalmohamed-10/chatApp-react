import React from 'react';

function SearchBar({ value, setValue, onSearch }) {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onSearch(inputValue);
  };

  return (
    <div className='search-container'>
      <div className='search-inner'>
        <input placeholder='search data...' type='text' value={value} onChange={handleInputChange} />
        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;