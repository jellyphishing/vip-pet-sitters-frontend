import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ReviewsList from "../../components/ReviewsList/ReviewsList";
import ReviewForm from "../../components/ReviewForm/ReviewForm";
import CustomButton from "../../components/CustomButton/CustomButton";
import ResultsList from "../../components/ResultsList/ResultsList";
import "./SitterDetailsPage.css";
import FavoriteForm from "../../components/FavoriteForm/FavoriteForm";

const SitterDetailsPage = () => {
  const { sitterId, clientId } = useParams();
  console.log("SitterDetailsPage sitterId=", sitterId);
  const [sitterDetails, setSitterDetails] = useState();
  const [user, token] = useAuth();
  const [location, setLocation] = useState(null);
  const [newFavorite, setNewFavorite] = useState();
  const [clientReviews, setClientReviews] = useState();
  const [newReview, setNewReview] = useState();

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
      } catch (error) {
        console.log("Error in fetch sitter details: ", error);
      }
    };

    fetchSitterDetails();
  }, [sitterId, token]);

  return (
    <div className="container">
      {sitterDetails ? (
        <div>
          <span>
            <h1>{sitterDetails[0].sitter.firstName}'s page!</h1>
          </span>

          <table>
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

          <CustomButton
            onClick={setNewFavorite}
            active={newFavorite}
            label="Love Button!"
          />
          <ReviewForm clientId={clientId} sitterId={sitterId} />
          <FavoriteForm sitterId={sitterId} />
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
      <ResultsList sitterDetails={sitterDetails} />
      <ReviewsList sitterDetails={sitterDetails} />

      <form>
        <Link to="/updateSitter">Update Sitter Profile</Link>
      </form>
    </div>
  );
};

export default SitterDetailsPage;
