import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

const AddReviewForm = (props) => {
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const [newReview, setNewReview] = useState();

  // Define postNewReview before using it in useCustomForm
  const postNewReview = async () => {
    try {
      let response = await axios.post(
        `https://localhost:5001/api/reviews/`,
        formData,
        {
          headers: {
            Authorization: "Bearer " + token, // Added space after "Bearer"
          },
        }
      );
      console.log(response);
      setNewReview(response.data.clientId);
    } catch (error) {
      console.log("Error in post new review: ", error);
    }
  };

  const initialValues = {
    text: "",
  };

  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    postNewReview,
    initialValues
  );

  return (
    <div className="container">
      <h1>Share your thoughts! Write a review!</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Text:{" "}
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add New Review</button>
      </form>
    </div>
  );
};

export default AddReviewForm;
