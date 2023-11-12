import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { FileUpload } from "../../FileUpload";
//import {fileUpload} from "../utils/FileUpload";

const RegisterSitterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    phoneNumber: "",
    vipServices: "",
    accommodations: "",
    // fileUpload: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    registerUser,
    defaultValues
  );

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Street Address:{" "}
          <input
            type="text"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
          />
        </label>
        <label>
          City:{" "}
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Zipcode:{" "}
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone Number:{" "}
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </label>
        <label>
          VIP Services(bully breeds, exotics, high maintenance personalities,
          medical):{" "}
          <input
            type="text"
            name="vipServices"
            value={formData.vipServices}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Accommodations(my house, your house, in your hotel, long-term,
          deployment foster) :{" "}
          <input
            type="text"
            name="accommodations"
            value={formData.accommodations}
            onChange={handleInputChange}
          />
        </label>
        <div className="App">
          <FileUpload />
        </div>

        <button>Register!</button>
      </form>
    </div>
  );
};

export default RegisterSitterPage;
