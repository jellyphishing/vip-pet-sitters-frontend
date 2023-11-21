import axios from "axios";
import React from "react";
import "./ResultsList.css";
import { Link } from "react-router-dom";
import SitterDetailsPage from "../../pages/SitterDetailsPage/SitterDetailsPage";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
  const { id, clientId } = useParams();
  console.log("ResultsList searchResults = ", searchResults);

  if (!searchResults) {
    return null; // or you can return some default content or a loading indicator
  }

  return (
    <div className="resultsList">
      <h2>VIP Sitters For You:</h2>
      <ul>
        {searchResults.map((sitters, index) => (
          <li key={index}>
            <Link to={`/sitterDetailsPage/${sitters.id}`}>
              {sitters.firstName} {sitters.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ResultsList;
