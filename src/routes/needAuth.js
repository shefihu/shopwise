// HOC/needAuth.jsx
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const needAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();
      const AuthState = useSelector((state) => state.auth);

      // const accessToken = localStorage.getItem("accessToken");

      // If there is no access token we redirect to "/" page.
      if (AuthState.currentUser === null) {
        window.location = "/login";
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default needAuth;
