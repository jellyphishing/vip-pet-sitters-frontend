import React from "react";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import ResultsList from "../../components/ResultsList/ResultsList";
import "./SearchPage.css";

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchresults] = useState([]);

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
  };
  return <div></div>;
};

export default SearchPage;
