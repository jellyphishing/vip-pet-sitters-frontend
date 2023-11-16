import React from "react";
import "./SearchBar.css";
import axios from "axios";

const SearchBar = ({
  searchTerm = "",
  searchTermSecondary = "",
  setSearchTerm,
  setSearchTermSecondary,
  handleSubmit,
}) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)} className="searchForm">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        value={searchTermSecondary}
        onChange={(e) => setSearchTermSecondary(e.target.value)}
      />

      <button type="submit">Search!</button>
    </form>
  );
};
export default SearchBar;
