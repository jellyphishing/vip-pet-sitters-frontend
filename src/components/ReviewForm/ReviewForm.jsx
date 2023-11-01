import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../..hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";

const addReviewPage = (props) => {
  const [user, token] = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    text: "",
  };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    postNewReview,
    initialValues
  );

  async function postNewReview() {
    console.log("Form Submitted");
  }
  //add axios post request here
  const postNewReview = async () => {
    try {
      let response = await axios.post(
        `https://localhost:5001/api/reviews/`,
        formData,
        {
          headers: {
            Authorization: "Bearer" + token,
          },
        }
      );
      console.log(response);
      setNewReview(response.data.clientId);
    } catch (error) {
      console.log("Error in post new review: ", error);
    }
  };
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
      </form>
      <button>Add New Review</button>
    </div>
  );
};

export default addReviewPage;
