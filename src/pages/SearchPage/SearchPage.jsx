import React from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import ResultsList from "../../components/ResultsList/ResultsList";
import "./SearchPage.css";
import useAuth from "../../hooks/useAuth";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [user, token] = useAuth();

  const fetchSitters = async () => {
    try {
      let lowerCaseSearch = searchTerm.toLowerCase();
      let response = await axios.get(
        `https://localhost:5001/api/sitters/name/${lowerCaseSearch}/`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
      setSearchResults(response.data); //switched out .sitters for .items, then tried to delete the 3rd dot note
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

      <div>
        <h2>Please search here by Accommodations: </h2>
        <li>in your home</li>
        <li>in my home</li>
        <li>in your hotel</li>
        <li>long-term</li>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSubmit={handleSubmit}
        />
      </div>

      <div>
        <h2>Please search here by VIPServices: </h2>
        <li>bully breeds</li>
        <li>medical</li>
        <li>exotics</li>
        <li>high maintenance personalities</li>
        <li>deployment foster</li>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSubmit={handleSubmit}
        />
      </div>

      <ResultsList searchResults={searchResults} />
    </div>
  );
};

export default SearchPage;
