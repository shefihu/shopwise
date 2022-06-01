// HOC/needAuth.jsx

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const isAuthed = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const navigate = useNavigate();
      const AuthState = useSelector((state) => state.auth);

      // const accessToken = localStorage.getItem("accessToken");

      // If there is no access token we redirect to "/" page.
      if (AuthState.currentUser !== null) {
        // Router.back();
        navigate("/login");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default isAuthed;
