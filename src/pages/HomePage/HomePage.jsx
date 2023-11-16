import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

const HomePageClientFavorites = (clientId) => {
  // The "user" value from this Hook contains user information (id, userName, email) from the decoded token
  // The "token" value is the JWT token sent from the backend that you will send back in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [clientFavorites, setClientFavorites] = useState([]);

  useEffect(() => {
    const fetchClientFavorites = async () => {
      try {
        let response = await axios.get("https://localhost:5001/api/favorites", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setClientFavorites(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchClientFavorites();
  }, [clientId]);

  return (
    <div className="container">
      {console.log(user)}
      <h1>{user.userName}'s Favorite Sitters!</h1>
      <ul>
        {clientFavorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePageClientFavorites;
