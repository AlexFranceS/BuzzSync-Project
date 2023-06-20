import React, { useState } from 'react';
import "./searchBox.css";
import SearchIcon from '@mui/icons-material/Search';

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearch() {
    window.location.href = `https://www.tiktok.com/tag/${encodeURIComponent(searchQuery)}`;
    console.log('Pesquisando por:', searchQuery);
    setSearchQuery('');
  }

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="search_Box">
      <input
        type="text"
        className="search-box"
        placeholder="Pesquisar"
        value={searchQuery}
        onChange={handleChange}
      />
      <button className="search-button" onClick={handleSearch}>
        <SearchIcon className={searchQuery ? "active-icon" : "inactive-icon"} />
      </button>
    </div>
  );
}

export default SearchBox;
