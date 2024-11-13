import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

function Search({handleSearch}) {
  const [searchPat, setSearchPat] = useState('');

  function handleSearch (e){
    setSearchPat(e.target.value)
    handleSearch(e.target.value)
  }

  return (
    <div className="search-box">    
      <IoSearchOutline className="search-icon"/>
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
