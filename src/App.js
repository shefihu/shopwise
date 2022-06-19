import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Navbar from "./components/Navbar";
import ScrolltoTop from "./components/ScrolltoTop";
import AllProducts from "./page/AllProducts";
import Callbac from "./page/Callbac";
import Home from "./page/Home";
import SearchResults from "./page/SearchResults";
import SIngleProduct from "./page/SIngleProduct";
// import auth from "./firebase/utils";
function App() {
  const Authed = useSelector((state) => state.auth);
  const RequireAuth = ({ children }) => {
    return Authed.currentUser ? children : <Navigate to="/login" />;
  };
  return (
    <div className="App  bg-gray-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="callback" element={<Callbac />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<AllProducts />} />
        <Route path="searched" element={<SearchResults />} />
        <Route path="product" element={<SIngleProduct />} />
      </Routes>
      <ScrolltoTop />
    </div>
  );
}

export default App;
