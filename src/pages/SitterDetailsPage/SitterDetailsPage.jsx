import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const SitterDetailsPage = () => {
  const { sitterId } = useParams();
  const [sitterDetails, setSitterDetails] = useState();

  useEffect(() => {
    fetchSitterDetails();
  }, []);
  const fetchSitterDetails = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/sitters/${sitterId}/`
      );
      setSitterDetails(response.data);
    } catch (error) {
      console.log("Error in fetchSitterDetails: ", error);
    }
  };

  const postNewFavorite = async () => {
    try {
      let response = await axios.options(
        `https://localhost:5001/api/favorites/`
      );
      setNewFavorite(response.data.sitterId);
    } catch (error) {
      console.log("Error in post new favorite: ", error);
    }
  };
  return (
    <div className="container">
      {sitterDetails ? (
        <div>
          <h1>All About Me!</h1>
          <h3>Welcome to {sitterDetails.Id}'s page!</h3>
          <h3>{sitterDetails.allAboutMe}All About Me: </h3>
          <h3>{sitterDetails.firstName}First Name: </h3>
          <h3>{sitterDetails.lastName}Last Name: </h3>
          <h3>{sitterDetails.streetAddress}Street Address: </h3>
          <h3>{sitterDetails.city}City: </h3>
          <h3>{sitterDetails.zipCode}Zip Code: </h3>
          <h3>{sitterDetails.email}Email: </h3>
          <h3>{sitterDetails.phoneNumber}Phone Number: </h3>
          <h3>{sitterDetails.vipServices}VIP Services: </h3>
          <h3>{sitterDetails.accommodations}Accommodations: </h3>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SitterDetailsPage;
