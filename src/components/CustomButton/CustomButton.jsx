// import React from "react";

// const CustomButton = ({ onClick, active, label }) => {
//   const btnClass = active ? "active-btn" : "";

//   return (
//     <button className={btnClass} onClick={onClick}>
//       {label}
//     </button>
//   );
// };

// export default CustomButton;

import Reach from "react";
//import "./CustomButton.css";
import { useState } from "react";

const CustomButton = () => {
  const [likeButtonClass, setLikeButtonClass] = useState("inactive");

  const handleLikeButtonClick = () => {
    if (likeButtonClass === "inactive") {
      setLikeButtonClass("active");
    } else {
      setLikeButtonClass("inactive");
    }
  };

  return (
    <div>
      <button className={likeButtonClass} onClick={handleLikeButtonClick}>
        Loved!
      </button>
    </div>
  );
};
export default CustomButton;
