import axios from "axios";
import React from "react";
import "./ResultsList.css";
import { Link } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
  return (
    <div className="resultsList">
      <h2>VIP Sitters For You:</h2>
      {searchResults.map((sitters, index) => (
        <div key={index}>
          <ul>
            <li>{sitters.firstName}</li>
            <li>{sitters.lastName}</li>
            <li>{sitters.favoritesCount}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
export default ResultsList;
