import axios from "axios";
import React from "react";
import "./ResultsList.css";
import { Link } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
  return (
    <div className="resultsList">
      <h2>VIP Sitters For You:</h2>
      {searchResults.map((sitters, index) => (
        <Link to={`/${sitters.id}`} key={index}>
          <div key={index}>
            <h3>{sitters.vipServices}</h3>
            <h3>{sitters.accommodations}</h3>
            <h3>{sitters.favoritesCount}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default ResultsList;
