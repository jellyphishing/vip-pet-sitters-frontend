import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const SitterDetailsPage = () => {
  const { sitterId } = useParams();
  const [sitterDetails, setSitterDetails] = useState();
  const [user, token] = useAuth();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    fetchSitterDetails();
  }, []);
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
    } catch (error) {
      console.log("Error in fetchSitterDetails: ", error);
    }
  };

  const postNewFavorite = async () => {
    try {
      let response = await axios.post(
        `https://localhost:5001/api/favorites/`,
        {
          sitterId: sitterId,
          firstName: sitterDetails.firstName,
        },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      fetchSitterDetails();
    } catch (error) {
      console.log("Error in post new favorite: ", error);
    }
  };
  return (
    <div className="container">
      {sitterDetails ? (
        <div>
          <h1>Welcome to {sitterDetails.firstName}'s page!</h1>
          <li>All About Me: {sitterDetails.allAboutMe}</li>
          <li>First Name: {sitterDetails.firstName}</li>
          <li>Last Name: {sitterDetails.lastName}</li>
          <li>Street Address: {sitterDetails.streetAddress}</li>
          <li>City: {sitterDetails.city}</li>
          <li>Zip Code: {sitterDetails.zipCode}</li>
          <li>Email: {sitterDetails.email}</li>
          <li>Phone Number: {sitterDetails}</li>
          <li>VIP Services: {sitterDetails.vipServices}</li>
          <li>Accommodations: {sitterDetails.accommodations}</li>
          <h3 onClick={postNewFavorite}>Love Button</h3>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default SitterDetailsPage;
