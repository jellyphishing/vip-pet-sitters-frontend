import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export default AuthContext;

function setUserObject(user) {
  if (!user) {
    return null;
  }
  return {
    userName: user.userName,
    id: user.id,
    email: user.email,
    isSitter: user.isSitter,
  };
}

export const AuthProvider = ({ children }) => {
  const BASE_URL = "https://localhost:5001/api/authentication";
  const userToken = JSON.parse(localStorage.getItem("token"));
  const decodedUser = userToken ? jwtDecode(userToken) : null;
  const [token, setToken] = useState(userToken);
  const [user, setUser] = useState(setUserObject(decodedUser));
  const [isServerError, setIsServerError] = useState(false);
  const navigate = useNavigate();

  const registerUser = async (registerData) => {
    try {
      let finalData = {
        userName: registerData.username,
        password: registerData.password,
        email: registerData.email,
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        isSitter: registerData.isSitter,
      };
      let response = await axios.post(`${BASE_URL}`, finalData);
      if (response.status === 201) {
        console.log("Successful registration! Log in to access token");
        setIsServerError(false);
        navigate("/login");
      } else {
        navigate("/register");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateUser = async (registerData) => {
    try {
      let finalData = {
        userName: registerData.username,
        password: registerData.password,
        email: registerData.email,
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        streetAddress: registerData.streetAddress,
        phoneNumber: registerData.phoneNumber,
        city: registerData.city,
        zipCode: registerData.zipCode,
        vipServices: registerData.vipServices,
        accommodations: registerData.accommodations,
        allAboutMe: registerData.allAboutMe,
      };
      let response = await axios.put(
        `https://localhost:5001/api/sitters/${user.id}`,
        finalData,
        {
          headers: {
            Authorization: "Bearer " + token, // Added space after "Bearer"
          },
        }
      );
      if (response.status === 201) {
        console.log("Successful update!");
        setIsServerError(false);
        navigate(`/sitterDetailsPage/${user.id}`);
      } else {
        navigate(`/sitterDetailsPage/${user.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (loginData) => {
    try {
      let response = await axios.post(`${BASE_URL}/login`, loginData);
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", JSON.stringify(response.data.access));
        setToken(JSON.parse(localStorage.getItem("token")));
        let loggedInUser = jwtDecode(response.data.access);
        console.log(">>>>>>>>>>>>> logged in user", loggedInUser);
        setUser(setUserObject(loggedInUser));
        setIsServerError(false);

        console.log("isSitter:", loggedInUser.isSitter);
        console.log("Navigating...");

        if (loggedInUser.isSitter === "True") {
          navigate(`/sitterDetailsPage/${loggedInUser.id}`);
        } else {
          navigate("/");
        }
      } else {
        navigate("/register");
      }
    } catch (error) {
      console.log(error);
      setIsServerError(true);
      navigate("/register");
    }
  };

  const logoutUser = () => {
    if (user) {
      localStorage.removeItem("token");
      setUser(null);
      setToken(null);
      navigate("/");
    }
  };

  const contextData = {
    user,
    token,
    loginUser,
    logoutUser,
    registerUser,
    updateUser,
    isServerError,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
