import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./components/Navbar";
import ScrolltoTop from "./components/ScrolltoTop";
import Home from "./page/Home";
// import auth from "./firebase/utils";
function App() {
  const Authed = useSelector((state) => state.auth);
  const RequireAuth = ({ children }) => {
    return Authed.currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <div className="App bg-gray-200">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
      <ScrolltoTop />
    </div>
  );
}

export default App;
