import { useState, useEffect } from "react";
import "./style.scss";

const Search = (props) => {
  const { searchText, setSearchText } = props;

  return (
    <div className="search-container">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Pizzas, burgers..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button data-label="Register" class="rainbow-hover">
        Search
      </button>
    </div>
  );
};

export default Search;
