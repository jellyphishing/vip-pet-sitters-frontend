import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import SitterDetailsPage from "../../pages/SitterDetailsPage/SitterDetailsPage";
import { Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

const ReviewsList = ({ searchResults }) => {
  const { id, clientId } = useParams();
  console.log("ReviewsList searchResults = ", searchResults);

  if (!searchResults) {
    return null; // or you can return some default content or a loading indicator
  }

  return (
    <div className="reviewsList">
      <h2>Reviews:</h2>

      {searchResults.map((reviews, index) => (
        <div key={index}>
          <li>
            {reviews.text} {reviews.sitter}
          </li>
        </div>
      ))}
    </div>
  );
};
export default ReviewsList;
