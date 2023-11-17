import axios from "axios";
import React from "react";
import "./FavoritesList.css";
import { Link } from "react-router-dom";

const FavoritesList = ({ clientFavorites }) => {
  return (
    <div className="favoritesList">
      <h2>I LOVED these sitters:</h2>
      {clientFavorites.map((listOfSitters, index) => (
        <div key={index}>
          <li>
            {listOfSitters.sitter.firstName} {listOfSitters.sitter.lastName}
          </li>
        </div>
      ))}
    </div>
  );
};
export default FavoritesList;
