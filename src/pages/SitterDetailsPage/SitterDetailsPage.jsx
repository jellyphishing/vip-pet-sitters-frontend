//
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import CustomButton from "../../components/CustomButton/CustomButton";
import ResultsList from "../../components/ResultsList/ResultsList";
import "./SitterDetailsPage.css";

const SitterDetailsPage = () => {
  const { sitterId, clientId } = useParams();
  console.log("SitterDetailsPage sitterId=", sitterId);
  const [sitterDetails, setSitterDetails] = useState();
  const [user, token] = useAuth();
  const [location, setLocation] = useState(null);
  const [newFavorite, setNewFavorite] = useState();
  const [clientReviews, setClientReviews] = useState();
  const [newReview, setNewReview] = useState();

  // const handleReviewSubmit = async (reviewText) => {
  //   try {
  //     let response = await axios.post(
  //       `https://localhost:5001/api/reviews/`,
  //       {
  //         sitterId: sitterId,
  //         clientId: clientId,
  //         reviewText: reviewText,
  //       },
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     );

  //     console.log("Review submitted:", reviewText);
  //   } catch (error) {
  //     console.error("Error submitting review:", error);
  //   }
  // };
  useEffect(() => {
    const fetchSitterDetails = async () => {
      try {
        let response = await axios.get(
          `https://localhost:5001/api/sitters/${sitterId}/`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setSitterDetails(response.data);
        console.log("sitterDetailsPage response.data=", response.data);
        // postNewReview();
        // postNewFavorite();
      } catch (error) {
        console.log("Error in fetch sitter details: ", error);
      }
    };
    // const fetchLocation = async () => {
    //   try {
    //     const apiKey = "AIzaSyDxUMDxleuv72lZ_iwW9xy3OK_9u7cQx_0";
    //     const response = await axios.get(
    //       `https://maps.googleapis.com/maps/api/geocode/json?address=${sitterId.address}&key=${apiKey}`,
    //       {
    //         headers: {
    //           Authorization: "Bearer " + token,
    //         },
    //       }
    //     );

    //     // Extract the location details from the response
    //     const { results } = response.data;
    //     if (results && results.length > 0) {
    //       const { formatted_address } = results[0];
    //       setLocation(formatted_address);
    //     }
    //   } catch (error) {
    //     console.error("Error fetching location:", error);
    //   }
    // };

    // const postNewFavorite = async () => {
    //   try {
    //     let response = await axios.post(
    //       `https://localhost:5001/api/favorites/`,
    //       {
    //         sitterId: sitterId,
    //   clientId: clientId,
    //
    //       },
    //       {
    //         headers: {
    //           Authorization: "Bearer " + token,
    //         },
    //       }
    //     );
    //     setNewFavorite(response.data);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.log("Error in post new favorite: ", error);
    //   }
    // };
    // const postNewReview = async (reviewText) => {
    //   if (!reviewText) return null;
    //   try {
    //     let response = await axios.post(
    //       `https://localhost:5001/api/reviews/`,
    //       {
    //         sitterId: sitterId,
    //         clientId: clientId,
    //         text: reviewText,
    //       },
    //       {
    //         headers: {
    //           Authorization: "Bearer " + token,
    //         },
    //       }
    //     );
    //     setNewReview(response.data);
    //     console.log(
    //       "sitterDetailsPage postNewReview response.data=",
    //       response.data
    //     );
    //   } catch (error) {
    //     console.log("Error in post new review: ", error);
    //   }
    // };

    //fetchLocation();
    fetchSitterDetails();
    // postNewFavorite();

    // postNewReview();
  }, [sitterId, token]);

  return (
    <div className="container">
      {sitterDetails ? (
        <div>
          <span>
            <h1>{sitterDetails[0].sitter.firstName}'s page!</h1>
          </span>

          <table>
            {/* <tr>
              <th>Field</th>
              <th>Value</th>
            </tr> */}
            <tr>
              <td>First Name:</td>
              <td>{sitterDetails[0].sitter.firstName}</td>
            </tr>
            <tr>
              <td>Last Name:</td>
              <td>{sitterDetails[0].sitter.lastName}</td>
            </tr>
            <tr>
              <td>All About Me:</td>
              <td>{sitterDetails[0].sitter.allAboutMe}</td>
            </tr>
            <tr>
              <td>Street Address:</td>
              <td>{sitterDetails[0].sitter.streetAddress}</td>
            </tr>
            <tr>
              <td>City:</td>
              <td>{sitterDetails[0].sitter.city}</td>
            </tr>
            <tr>
              <td>Zip Code:</td>
              <td>{sitterDetails[0].sitter.zipCode}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{sitterDetails[0].sitter.email}</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>{sitterDetails[0].sitter.phoneNumber}</td>
            </tr>
            <tr>
              <td>VIP Services:</td>
              <td>{sitterDetails[0].sitter.vipServices}</td>
            </tr>
            <tr>
              <td>Accommodations:</td>
              <td>{sitterDetails[0].sitter.accommodations}</td>
            </tr>
          </table>

          {/* <p>Sitter ID: {sitterId}</p> */}

          {/* {location && <p>Location: {location}</p>} */}
          <CustomButton
            onClick={setNewFavorite}
            active={newFavorite}
            label="Love Button!"
          />
          <ReviewForm clientId={clientId} sitterId={sitterId} />
          {/* <h2>Check out my reviews!</h2>turn this back on if the reviews list doesn't work */}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <ResultsList sitterDetails={sitterDetails} />
      <ReviewsList sitterDetails={sitterDetails} />
    </div>
  );
};

export default SitterDetailsPage;
