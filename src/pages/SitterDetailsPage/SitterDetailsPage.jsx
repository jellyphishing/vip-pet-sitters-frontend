import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import CustomButton from "../../components/CustomButton/CustomButton";

const SitterDetailsPage = () => {
  const { sitterId, clientId } = useParams();
  const [sitterDetails, setSitterDetails] = useState();
  const [user, token] = useAuth();
  const [location, setLocation] = useState(null);
  const [newFavorite, setNewFavorite] = useState();
  const [clientReviews, setClientReviews] = useState();

  const handleReviewSubmit = async (reviewText) => {
    try {
      //add logic to submit the review using axios post
      console.log("Review submitted:", reviewText);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const apiKey = "AIzaSyDxUMDxleuv72lZ_iwW9xy3OK_9u7cQx_0";
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${sitterId.address}&key=${apiKey}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        // Extract the location details from the response
        const { results } = response.data;
        if (results && results.length > 0) {
          const { formatted_address } = results[0];
          setLocation(formatted_address);
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

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
        console.log(response.data);
      } catch (error) {
        console.log("Error in fetch sitter details: ", error);
      }
    };

    // const postNewFavorite = async () => {
    //   try {
    //     let response = await axios.post(
    //       `https://localhost:5001/api/favorites/`,
    //       {
    //         sitterId: sitterId,
    //         firstName: sitterDetails.firstName,
    //         lastName: sitterDetails.lastName,
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

    const fetchClientReviews = async () => {
      try {
        let response = await axios.get(
          `https://localhost:5001/api/reviews/${clientId}/`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setClientReviews(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error in fetch client reviews: ", error);
      }
    };

    fetchLocation();
    fetchSitterDetails();
    // postNewFavorite();
    fetchClientReviews();
  }, [sitterId]);

  return (
    <div className="container">
      {sitterDetails ? (
        <div>
          <span>Welcome to {sitterDetails.firstName}'s page!</span>
          <li>First Name: {sitterDetails.sitterId}</li>
          <li>Last Name: {sitterDetails.lastName}</li>
          {/* <li>All About Me: {sitterDetails.allAboutMe}</li>
          <li>Street Address: {sitterDetails.streetAddress}</li>
          <li>City: {sitterDetails.city}</li>
          <li>Zip Code: {sitterDetails.zipCode}</li>
          <li>Email: {sitterDetails.email}</li>
          <li>Phone Number: {sitterDetails}</li>
          <li>VIP Services: {sitterDetails.vipServices}</li>
          <li>Accommodations: {sitterDetails.accommodations}</li> */}
          {/* <p>Sitter ID: {sitterId}</p> */}

          {location && <p>Location: {location}</p>}
          <CustomButton
            onClick={setNewFavorite}
            active={newFavorite}
            label="Love Button!"
          />
          <ReviewForm
            onSubmit={(reviewText) => handleReviewSubmit(reviewText)}
          />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <ReviewsList sitterDetails={sitterDetails} />
    </div>
  );
};

export default SitterDetailsPage;
