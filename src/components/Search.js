import React, { useState } from "react";

function Search({handleSearch}) {
  const [searchPat, setSearchPat] = useState('');

  return (
    <div className="search-box">    
      <input
        type="text"
        id="search"
        value={searchPat}
        placeholder="Search patient..."
        onChange={(e) => {
          setSearchPat(e.target.value)
          handleSearch(e.target.value)
        }}
      />
    </div>
  );
}

export default Search;
