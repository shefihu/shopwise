import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromFavorites } from "../store/actions/cartaction";
import robot from "../assets/svg/robot.svg";
import Modal from "../components/Modal";
import { motion } from "framer-motion";
const Cart = () => {
  //  const cartItems = Cookies.get("favourites")
  //    ? JSON.parse(Cookies.get("favourites"))
  //    : [];
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const favourites = useSelector((state) => state.favLists.favItems);
  useEffect(() => {
    setCart(favourites);
  }, [favourites]);
  const Increment = (id) => {
    // setQuantity(cart.map((x) => x.quantity + 1));
    console.log(cart.find((x) => x.id(0)));
  };

  const Decrement = () => {
    if (quantity <= 1) {
      setQuantity((quantity = 1));
    } else {
      setQuantity(cart.quantity - 1);
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    if (cart.find((heart) => heart.id === id)) {
      console.log("yeah");
    }
    dispatch(removeFromFavorites(id));
    navigate("/cart");
  };
  return (
    <div>
      <section
        className="container h-full pb-5 lg:flex  hidden flex-col"
        // style={{ height: "1200px" }}
      >
        <div className="mt-10">
          <h1 className="font-bold text-4xl">Cart</h1>
        </div>
        {cart.length === 0 ? (
          <>
            {" "}
            <div className="h-full">
              <div className="flex items-center justify-center py-12">
                <div className=" h-full  rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
                  <div className="flex flex-col items-center py-16 ">
                    <img
                      className="px-4 w-96 hidden md:block"
                      src={robot}
                      alt=""
                    />
                    <img
                      className="md:hidden"
                      src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
                      alt=""
                    />
                    <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
                      OOPS!{" "}
                    </h1>
                    <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
                      Your Cart is Empty
                    </p>
                    <button className="mx-4 h-10 w-44 border rounded-md text-white font-bold text-base bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">
                      Go Shopping
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="w-full flex justify-between h-full ">
              <div className="w-9/12  h-full  flex flex-col justify-between  ">
                {cart.map((cartItem) => {
                  return (
                    <div className="flex mt-20 items-center justify-between">
                      <div className="w-2">
                        <button
                          onClick={() => {
                            removeFromCart(cartItem.id);
                          }}
                          className="w-8 h-8 bg-white rounded-full flex justify-center items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="green"
                            class="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="w-60 h-40">
                        <img
                          src={cartItem.photo}
                          alt=""
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </div>
                      <div className="w-40 ">
                        <h1 className="font-bold text-xl">{cartItem.name}</h1>
                      </div>
                      <div className="">
                        <h1 className="text-xl font-bold">{cartItem.price}</h1>
                      </div>
                      <div className="w-40">
                        <div className="flex flex-row gap-6 ml-10 items-center">
                          <button
                            className="rounded-full h-10 w-10 bg-white flex items-center justify-center"
                            onClick={Decrement}
                          >
                            -
                          </button>
                          {cartItem.quantity}
                          <button
                            className="rounded-full h-10 w-10 bg-white flex items-center justify-center"
                            onClick={Increment}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-1/3 h-96 bg-white mx-8 mt-20 rounded-3xl">
                <div className="w-full container">
                  <h1 className="font-bold text-xl ml-6 mt-3">Order Summary</h1>
                  <div className="w-full  flex flex-col justify-between h-20 mt-10">
                    <div className="w-full container justify-between  flex h-8 items-center  ">
                      <h1 className="font-bold text-xl">Total items:</h1>
                      <h1 className="font-bold text-2xl">
                        {cart.reduce((a, c) => a + Number(c.quantity), 0)}
                      </h1>
                    </div>
                    <div className="w-full container justify-between  flex h-8 items-center  ">
                      <h1 className="font-bold text-xl">Total price:</h1>
                      <h1 className="font-bold text-2xl">
                        ₦{cart.reduce((a, c) => a + c.price * c.quantity, 0)}
                      </h1>
                    </div>
                  </div>
                  <div className="w-full mt-10">
                    <h1 className="text-center">
                      Shipping Info and payment will be seen as soon as you
                      checkout
                    </h1>
                  </div>
                  <div className="w-full mt-14 flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      className="bg-green-400 w-11/12 py-3 rounded-full text-white font-bold text-xl"
                    >
                      Checkout
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      <section className="lg:hidden container">
        <div className="mt-10">
          <h1 className="font-bold text-4xl">Cart</h1>
        </div>
        {cart.length === 0 ? (
          <>
            {" "}
            <div className="h-full">
              <div className="flex items-center justify-center py-12">
                <div className=" h-full  rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
                  <div className="flex flex-col items-center py-16 ">
                    <img
                      className="px-4 w-96 hidden md:block"
                      src={robot}
                      alt=""
                    />
                    <img className="md:hidden" src={robot} alt="" />
                    <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
                      OOPS!{" "}
                    </h1>
                    <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
                      Your Cart is Empty
                    </p>
                    <button className="mx-4 h-10 w-44 border rounded-md text-white font-bold text-base bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-indigo-800">
                      Go Shopping
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="w-full flex flex-col justify-between h-full  pb-32">
              <div className="w-full    h-full  flex flex-col justify-between  ">
                {cart.map((cartItem) => {
                  return (
                    <div className="flex  mt-20 items-center justify-between">
                      <div className="w-2">
                        <button
                          onClick={() => {
                            removeFromCart(cartItem.id);
                          }}
                          className="w-6 h-6  bg-white rounded-full flex justify-center items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="green"
                            class="bi bi-trash-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                          </svg>
                        </button>
                      </div>
                      <div className="w-24 h-20">
                        <img
                          src={cartItem.photo}
                          alt=""
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </div>
                      <div className="w-20 ">
                        <h1 className="font-bold text-lg">{cartItem.name}</h1>
                      </div>
                      <div className="">
                        <h1 className="text-lg font-bold">{cartItem.price}</h1>
                      </div>
                      <div className="w-14">
                        <div className="flex flex-row gap-2 items-center">
                          <button
                            className="rounded-full h-4 w-4 bg-white flex items-center justify-center"
                            onClick={Decrement}
                          >
                            -
                          </button>
                          {cartItem.quantity}
                          <button
                            className="rounded-full h-4 w-4 bg-white flex items-center justify-center"
                            onClick={Increment}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full h-96 bg-white container  mt-20 rounded-3xl">
                <div className="w-full container">
                  <h1 className="font-bold text-xl ml-6 mt-3">Order Summary</h1>
                  <div className="w-full  flex flex-col justify-between h-20 mt-10">
                    <div className="w-full container justify-between  flex h-8 items-center  ">
                      <h1 className="font-bold text-xl">Total items:</h1>
                      <h1 className="font-bold text-2xl">
                        {cart.reduce((a, c) => a + Number(c.quantity), 0)}
                      </h1>
                    </div>
                    <div className="w-full container justify-between  flex h-8 items-center  ">
                      <h1 className="font-bold text-xl">Total price:</h1>
                      <h1 className="font-bold text-2xl">
                        ₦{cart.reduce((a, c) => a + c.price * c.quantity, 0)}
                      </h1>
                    </div>
                  </div>
                  <div className="w-full mt-10">
                    <h1 className="text-center">
                      Shipping Info and payment will be seen as soon as you
                      checkout
                    </h1>
                  </div>
                  <div className="w-full mt-14 flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      className="bg-green-400 w-11/12 py-3 rounded-full text-white font-bold text-xl"
                    >
                      Checkout
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Cart;
