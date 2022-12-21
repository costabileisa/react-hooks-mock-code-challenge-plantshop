import React, { useState, useEffect } from "react";

function Search({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value)
  }

  useEffect(() => {
    onSearch(search)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
