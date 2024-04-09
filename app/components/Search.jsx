import React, { useState } from "react";

function Search({ getLocation }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    getLocation(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter a location..."
          className="input w-full max-w-xs mb-8 mt-4"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn mb-8 mt-4 ml-4" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
