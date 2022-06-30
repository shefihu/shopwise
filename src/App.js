import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrolltoTop from "./components/ScrolltoTop";
import { auth, db } from "./firebase/config";
import AllProducts from "./page/AllProducts";
import Callbac from "./page/Callbac";
import Cart from "./page/Cart";
import Checkout from "./page/Checkout";
import ContactMe from "./page/ContactMe";
import Home from "./page/Home";
import Profile from "./page/Profile";
import SearchResults from "./page/SearchResults";
import SIngleProduct from "./page/SIngleProduct";
import { login } from "./store/actions/userActions";
// import auth from "./firebase/utils";
function App() {
  const Authed = useSelector((state) => state.auth);
  const RequireAuth = ({ children }) => {
    return Authed.currentUser ? children : <Navigate to="/login" />;
  };
  const dispatch = useDispatch();
  // useEffect(() => {
  //   auth.onAuthStateChanged(async (user) => {
  //     if (user === null) return;
  //     // ShowSpinner();
  //     const userId = user.uid;
  //     const docSnap = onSnapshot(doc(db, "users", `${userId}`), (doc) => {
  //       if (doc.data() !== null) {
  //         dispatch(login(doc.data()));
  //         // hideSpinner();
  //       } else {
  //         console.log("No such document!");
  //         // hideSpinner();
  //       }
  //     });
  //   });
  // }, [dispatch]);
  // const docSnap = onSnapshot(
  //   doc(db, "users", `${Authed.currentUser}`),
  //   (doc) => {
  //     if (doc.data() !== null) {
  //       dispatch(login(doc.data()));
  //       // hideSpinner();
  //     } else {
  //       console.log("No such document!");
  //       // hideSpinner();
  //     }
  //   }
  // );
  console.log();
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
        <Route path="contact" element={<ContactMe />} />
        <Route path="profile" element={<Profile />} />
        <Route
          path="cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
      </Routes>
      <ScrolltoTop />
      <Footer />
    </div>
  );
}

export default App;
