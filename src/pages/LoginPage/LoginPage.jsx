import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const { loginUser, isServerError } = useContext(AuthContext);
  const defaultValues = { userName: "", password: "" };
  const [formData, handleInputChange, handleSubmit, reset] = useCustomForm(
    loginUser,
    defaultValues
  );

  useEffect(() => {
    if (isServerError) {
      reset();
    }
  }, [isServerError]);

  return (
    <div>
      <div>
        <h1>Hello! Welcome to VIP Pet Sitters!</h1>
        <p>
          We are so glad you stopped by!There are many pet sitting companies out
          there nowadays, so why choose us? We require our sitters to carry
          insurance so you can be rest assured that should an issue arise, you
          are covered. We learned the hard way and not only did it cost us
          financially, our pet paid the price. This is why we created VIP Pet
          Sitters!
        </p>
        <br></br>
        <p>
          Need to find a pet sitter for your animal and struggling to find the
          right fit? Maybe you have a high maintenace bully breed? Or an exotic
          pet that takes medication? Do you need services in our home or maybe
          you want us to come to you in your house or hotel? Are you being
          deployed and need someone who will safely and lovingly foster your pet
          so you don't have to worry while you are away serving our country? We
          are here for you!
        </p>
      </div>

      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <label>
            Username:{" "}
            <input
              type="text"
              name="userName"
              value={formData.userName}
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
          {isServerError ? (
            <p className="error">Login failed, incorrect credentials!</p>
          ) : null}
          <button>Login!</button>
          <Link to="/registerSitter">Click to register as a sitter!</Link>
          <Link to="/registerClient">Click to register as a client!</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
