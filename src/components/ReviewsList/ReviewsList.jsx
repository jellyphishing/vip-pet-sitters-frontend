// import axios from "axios";
import React from "react";
//import "./FavoritesList.css";
import { Link } from "react-router-dom";

const ReviewsList = ({ sitterDetails }) => {
  return (
    <div className="clientReviews">
      <h2>Reviews</h2>
      <table>
        <tbody>
          {sitterDetails &&
            sitterDetails.map((listOfReviews, index) => (
              <tr key={index}>
                <td>{listOfReviews.client.firstName} says:</td>
                <td>{listOfReviews.text}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default ReviewsList;

{
  /* // <table>
//   <tbody>
//     {listOfReviews.map((review, index) => ( */
}
//       <tr key={index}>
//         <td>{review.client.firstName} says:</td>
//         <td>{review.text}</td>
//       </tr>
//     ))}
//   </tbody>
// </table>
