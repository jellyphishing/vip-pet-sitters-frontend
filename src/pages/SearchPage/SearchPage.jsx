import React from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import ResultsList from "../../components/ResultsList/ResultsList";
import "./SearchPage.css";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const fetchSitters = async () => {
    try {
      let lowerCaseSearch = searchTerm.toLowerCase();
      let response = await axios.get(
        `https://localhost:5001/api/sitters/${lowerCaseSearch}/`
      );
      setSearchResults(response.data.sitters);
    } catch (error) {
      console.log("Error in fetchSitters: ", error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSitters();
  };

  return (
    <div className="container search">
      <h1>Find Your Sitter Here!</h1>
      <h2>Please search by typing in one of the following key words: </h2>
      <ul>
        <li>*bully breeds</li>
        <li>*high maintenance personalities</li>
        <li>*medical</li>
        <li>*exotics</li>
        <li>*in your home</li>
        <li>*in my home</li>
        <li>*in your hotel</li>
        <li>*long-term</li>
        <li>*deployment foster</li>
      </ul>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SearchPage;
