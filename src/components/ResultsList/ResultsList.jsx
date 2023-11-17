import axios from "axios";
import React from "react";
import "./ResultsList.css";
import { Link } from "react-router-dom";

const ResultsList = ({ searchResults }) => {
  return (
    <div className="resultsList">
      <h2>VIP Sitters For You:</h2>
      {searchResults.map((sitters, index) => (
        <Link to={`/${sitters}`} key={index}>
          <div key={index}></div>
          {/* <li>{sitters.firstName}</li> */}
          <table>
            <tr>
              Name: {sitters.firstName} {sitters.lastName}
              <li>{sitters.accommodations}</li>
            </tr>
          </table>
        </Link>
      ))}
    </div>
  );
};
export default ResultsList;
