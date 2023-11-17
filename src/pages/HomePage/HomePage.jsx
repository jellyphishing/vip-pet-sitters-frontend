import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import FavoritesList from "../../components/FavoritesList/FavoritesList";

import axios from "axios";

const HomePageClientFavorites = () => {
  // The "user" value from this Hook contains user information (id, userName, email) from the decoded token
  // The "token" value is the JWT token sent from the backend that you will send back in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [clientFavorites, setClientFavorites] = useState([]);
  //const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchClientFavorites();
  }, []);

  const fetchClientFavorites = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/favorites/${user.id}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
      setClientFavorites(response.data);
    } catch (error) {
      console.warn("Error in fetch user favorites request", error);
    }
  };

  return (
    <div className="container">
      {console.log(user)}
      <h1>{user.userName}'s Favorite Sitters!</h1>
      <FavoritesList clientFavorites={clientFavorites} />
    </div>
  );
};

export default HomePageClientFavorites;
