import { useState, useEffect } from "react";
import "./style.scss";

const Search = (props) => {
  const { searchText, setSearchText } = props;

  return (
    <div className="m-4 p-4">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Pizzas, burgers..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border border-solid border-black"
      />
      <button
        data-label="Register"
        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
