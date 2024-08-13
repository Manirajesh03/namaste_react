import { useState, useEffect } from "react";
import "./style.scss";

const Search = (props) => {
  const { searchText, setSearchText } = props;

  return (
    <div className="m-4 py-4">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Pizzas, burgers..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="border px-3 py-2 rounded-lg shadow-sm"
      />
      <button
        data-label="Register"
        className="px-4 py-2 bg-red-500 text-white font-bold m-4 rounded-lg"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
