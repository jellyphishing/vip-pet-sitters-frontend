import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

const ReviewForm = ({ clientId, sitterId }) => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [newReview, setNewReview] = useState();

  // Define postNewReview before using it in useCustomForm
  const postNewReview = async () => {
    let thingToPost = {
      clientId: user.id,
      sitterId: sitterId,
      text: data.text, //or text:reviewData.text
    };
    try {
      console.log("Token:", token);
      console.log("Thing to post:", thingToPost);
      let response = await axios.post(
        `https://localhost:5001/api/reviews/`,
        thingToPost,
        {
          headers: {
            Authorization: "Bearer " + token, // Added space after "Bearer"
          },
        }
      );
      console.log("reviewForm response=", response);
      setNewReview(response.data.clientId);
    } catch (error) {
      console.log("Error in post new review: ", error);
    }
  };

  const initialValues = {
    text: "",
  };

  const [data, handleInputChange, handleSubmit, reset] = useCustomForm(
    postNewReview,
    initialValues
  );

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Share your thoughts! Write a review:{" "}
          <input
            type="text"
            name="text"
            value={data.text} //reviewData.text
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add New Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
