import React, { useState } from "react";

function Search({handleSearch}) {
  const [searchPat, setSearchPat] = useState('');

  function handleSearch (e){
    setSearchPat(e.target.value)
    handleSearch(e.target.value)
  }

  return (
    <div className="search-box">    
      <input
          type="text"
          id="search"
          value={searchPat}
          placeholder="Search patient..."
          onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
