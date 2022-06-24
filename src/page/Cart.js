import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  //  const cartItems = Cookies.get("favourites")
  //    ? JSON.parse(Cookies.get("favourites"))
  //    : [];
  const [cart, setCart] = useState([]);
  const favourites = useSelector((state) => state.favLists.favItems);
  useEffect(() => {
    setCart(favourites);
  }, [favourites]);
  return (
    <div>
      <div>
        {cart.map((car) => {
          return <div>{car.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Cart;
