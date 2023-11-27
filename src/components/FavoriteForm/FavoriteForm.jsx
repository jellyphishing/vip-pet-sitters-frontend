import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const FavoriteForm = ({ sitterId }) => {
  const [user, token] = useAuth();
  const [favorites, setFavoritesCount] = useState(0);

  useEffect(() => {
    const fetchFavoritesCount = async () => {
      try {
        const response = await axios.get(
          `https://localhost:5001/api/favorites/count/${sitterId}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setFavoritesCount(response.data);
      } catch (error) {
        console.error("Error fetching favorites count:", error);
      }
    };

    fetchFavoritesCount();
  }, [sitterId, token]);

  return (
    <div>
      <p>Favorites Count: {favorites && favorites.favoritesCount}</p>
    </div>
  );
};

export default FavoriteForm;
