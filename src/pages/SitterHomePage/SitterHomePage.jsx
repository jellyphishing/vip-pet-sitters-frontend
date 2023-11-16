// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import useAuth from "../../hooks/useAuth";

// const SitterHomePage = ({ sitterId }) => {
//   const [sitterDetails, setSitterDetails] = useState();
//   const [user, token] = useAuth();

//   useEffect(() => {
//     fetchSitterDetails();
//   }, []);
//   const fetchSitterDetails = async () => {
//     try {
//       let response = await axios.get(
//         `https://localhost:5001/api/sitters/${sitterId}/`,
//         {
//           headers: {
//             Authorization: "Bearer " + token,
//           },
//         }
//       );
//       setSitterDetails(response.data);
//     } catch (error) {
//       console.log("Error in fetchSitterDetails: ", error);
//     }
//   };

//   return (
//     <div>
//       <h2>${sitterId.firstName}'s Home Page</h2>
//       <li>All About Me: {sitterDetails.allAboutMe}</li>
//       <li>First Name: {sitterDetails.firstName}</li>
//       <li>Last Name: {sitterDetails.lastName}</li>
//       <li>Street Address: {sitterDetails.streetAddress}</li>
//       <li>City: {sitterDetails.city}</li>
//       <li>Zip Code: {sitterDetails.zipCode}</li>
//       <li>Email: {sitterDetails.email}</li>
//       <li>Phone Number: {sitterDetails.phoneNumber}</li>
//       <li>VIP Services: {sitterDetails.vipServices}</li>
//       <li>Accommodations: {sitterDetails.accommodations}</li>
//     </div>
//   );
// };

// export default SitterHomePage;
