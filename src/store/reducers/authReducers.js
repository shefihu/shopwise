import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

let initialState = {
  currentUser: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null,
};

const Auth = (state = initialState, action) => {
  // const navigate = useNavigate();
  switch (action.type) {
    case "login":
      console.log("data");

      return {
        ...state,
        currentUser: action.payload,
      };

    case "logout":
      return {
        ...state,
        currentUser: null,
      };

    default:
      return state;
  }
};

export default Auth;
