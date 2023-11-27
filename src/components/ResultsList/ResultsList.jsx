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
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>VIP Services</th>
            <th>Accommodations</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((sitters, index) => (
            <tr key={index}>
              <td>
                <Link to={`/sitterDetailsPage/${sitters.id}`}>
                  {sitters.firstName}
                </Link>
              </td>
              <td>{sitters.lastName}</td>
              <td>{sitters.vipServices}</td>
              <td>{sitters.accommodations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsList;

//   return (
//     <div className="resultsList">
//       <h2>VIP Sitters For You:</h2>
//       <ul>
//         {searchResults.map((sitters, index) => (
//           <li key={index}>
//             <Link to={`/sitterDetailsPage/${sitters.id}`}>
//               {sitters.firstName} {sitters.lastName} {sitters.vipServices}{" "}
//               {sitters.accommodations}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default ResultsList;
