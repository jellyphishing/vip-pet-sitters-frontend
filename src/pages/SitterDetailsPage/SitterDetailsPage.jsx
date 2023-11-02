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
      postNewFavorite(response.data.sitterId);
    } catch (error) {
      console.log("Error in post new favorite: ", error);
    }
  };
  return (
    <div className="container">
      {sitterDetails ? (
        <div>
          <h1>All About Me!</h1>
          <h3>Welcome to {sitterDetails.firstName}'s page!</h3>
          <h3>All About Me: {sitterDetails.allAboutMe}</h3>
          <h3>First Name: {sitterDetails.firstName}</h3>
          <h3>Last Name: {sitterDetails.lastName}Last Name: </h3>
          <h3>Street Address: {sitterDetails.streetAddress}</h3>
          <h3>City: {sitterDetails.city}</h3>
          <h3>Zip Code: {sitterDetails.zipCode}</h3>
          <h3>Email: {sitterDetails.email}</h3>
          <h3>Phone Number: {sitterDetails.phoneNumber}</h3>
          <h3>VIP Services: {sitterDetails.vipServices}</h3>
          <h3>Accommodations: {sitterDetails.accommodations}</h3>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SitterDetailsPage;
