import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import ReviewForm from "../components/ReviewForm/ReviewForm";
import CustomForm from "../hooks/useCustomForm";

const useAuth = () => {
  const { user, token } = useContext(AuthContext);
  return [user, token];
};

export default useAuth;
