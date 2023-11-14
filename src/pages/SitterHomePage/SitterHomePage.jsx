import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const SitterHomePage = ({ sitterId }) => {
  const [location, setLocation] = useState(null);
  const [sitterDetails, setSitterDetails] = useState();
  const [user, token] = useAuth();

  useEffect(() => {
    // Fetch user's location details using Geocoding API when the component mounts
    const fetchLocation = async () => {
      try {
        const apiKey = "AIzaSyDxUMDxleuv72lZ_iwW9xy3OK_9u7cQx_0";
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${sitterId.address}&key=${apiKey}`
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

    fetchLocation();
  }, [sitterId]);

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

  return (
    <div>
      <h2>${sitterId.firstName}'s Home Page</h2>
      <li>All About Me: {sitterDetails.allAboutMe}</li>
      <li>First Name: {sitterDetails.firstName}</li>
      <li>Last Name: {sitterDetails.lastName}</li>
      <li>Street Address: {sitterDetails.streetAddress}</li>
      <li>City: {sitterDetails.city}</li>
      <li>Zip Code: {sitterDetails.zipCode}</li>
      <li>Email: {sitterDetails.email}</li>
      <li>Phone Number: {sitterDetails.phoneNumber}</li>
      <li>VIP Services: {sitterDetails.vipServices}</li>
      <li>Accommodations: {sitterDetails.accommodations}</li>
      {location && <p>Location: {location}</p>}
    </div>
  );
};

export default SitterHomePage;
