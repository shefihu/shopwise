import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import AboutProduct from "../components/AboutProduct";
import Modal2 from "../components/Modal2";
import ProductList2 from "../components/ProductList2";
import REviews from "../components/REviews";
import { product } from "../data/Products";
import { addToFav } from "../store/actions/cartaction";
import SuccessImage from "../assets/svg/success.svg";
import Modal from "../components/Modal";
import { motion } from "framer-motion";
const SIngleProduct = () => {
  const location = useLocation();
  const search = location.search;
  const id = new URLSearchParams(search).get("id");
  //   const picture = new URLSearchParams(search).get("image");
  const _product = product.find((x) => x.id === id);
  const [quantity, setQuantity] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const Increment = () => {
    setQuantity(quantity + 1);
  };

  const Decrement = () => {
    if (quantity <= 1) {
      setQuantity((quantity = 1));
    } else {
      setQuantity(quantity - 1);
    }
  };
  const addTocart = (id, name, photo, price) => {
    // console.log("power");
    dispatch(addToFav(id, name, photo, price, quantity)).then(() => {
      setOpenModal(!openModal);
    });
  };
  const power = () => {
    console.log("power");
  };
  return (
    <div>
      <section className="hidden w-full xl:flex lg:flex">
        {/* <Modal /> */}
        <div className="container w-full  h-1/2  ">
          <div className="flex w-full bg-slate-200 justify-between mt-10  ">
            <img
              src={_product.thumbnail}
              alt=""
              className=" w-6/12 rounded-2xl object-cover "
              style={{ height: "600px", width: "700px" }}
            />
            <div className="  w-1/2 ml-10 flex justify-around  flex-col ">
              <h1 className="font-bold text-3xl "> {_product.name}</h1>
              <h2 className="font-extrabold text-4xl">{_product.price}</h2>
              <div>
                <p>Select A color</p>

                <div className="flex flex-row gap-6 mt-3">
                  {_product.image.map((color) => {
                    return (
                      <div>
                        <div
                          key={color.id}
                          className="rounded-full h-8 w-8 p-1 z-[3] relative  flex justify-center items-center cursor-pointer"
                          style={{
                            backgroundColor: `#FFFFFF00`,
                            border: `1px solid ${color.color}`,
                            borderWidth: `0rem`,
                          }}
                          swatch={color.color}
                          //   onClick={(e) => swatching(e, index)}
                        >
                          <div
                            key={color.id}
                            className="rounded-full h-6 w-6 p-1 z-[2] relative"
                            style={{ backgroundColor: `${color.color}` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <p>Quantity</p>
                <div className="flex flex-row gap-6 mt-3 items-center">
                  <button
                    className="rounded-full h-10 w-10 bg-white flex items-center justify-center"
                    onClick={Decrement}
                  >
                    -
                  </button>
                  {quantity}
                  <button
                    className="rounded-full h-10 w-10 bg-white flex items-center justify-center"
                    onClick={Increment}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex gap-6">
                <motion.button
                  layout
                  className=" rounded-xl bg-green-300 text-white text-lg font-bold h-14 w-40"
                  onClick={() => {
                    addTocart(
                      _product.id,
                      _product.name,
                      _product.thumbnail,
                      _product.price,
                      quantity
                    );
                  }}
                >
                  Add to Cart
                </motion.button>
                <Link to="/cart">
                  <button
                    className="btn rounded-xl bg-black text-white text-lg font-bold h-14 w-40"
                    // onClick={() => {
                    //   const activeType = image[activeColor].picture;
                    //   const activeTypeId = image[activeColor].id;
                    //   const promising = new Promise((resolve) => {
                    //     resolve(quantity * Number(sellingPrice));
                    //   });
                    //   promising.then((totalItemPrice) => {
                    //     dispatch(
                    //       AddToCart({
                    //         quantity,
                    //         id,
                    //         name,
                    //         activeType,
                    //         activeTypeId,
                    //         sellingPrice,
                    //         originalPrice,
                    //         totalItemPrice,
                    //       })
                    //     );
                    //   });
                    // }}
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:hidden md:h-full md:flex">
        <div className="container  h-full  ">
          <div className="flex flex-col justify-between mt-10   ">
            <img
              src={_product.thumbnail}
              alt=""
              className=" w-full rounded-2xl object-cover "
              style={{ height: "300px" }}
            />
            <div className="  w-full mt-10 h-96   flex justify-between  flex-col ">
              <h1 className="md:text-3xl md:ml-6 font-bold text-2xl ">
                {" "}
                {_product.name}
              </h1>
              <h2 className="md:text-4xl md:ml-6 font-extrabold text-3xl">
                {_product.price}
              </h2>
              <div>
                <p className="font-bold md:ml-10">Color</p>
                <div className=" flex flex-row gap-1 mt-3 md:ml-6   ">
                  {_product.image.map((color) => {
                    return (
                      <div>
                        <div
                          key={color.id}
                          className="rounded-full h-8 w-8 p-1 z-[3] relative  flex justify-center items-center cursor-pointer"
                          style={{
                            backgroundColor: `#FFFFFF00`,
                            border: `1px solid ${color.color}`,
                            borderWidth: `0rem`,
                          }}
                          swatch={color.color}
                          //   onClick={(e) => swatching(e, index)}
                        >
                          <div
                            key={color.id}
                            className="rounded-full h-6 w-6 p-1 z-[2] relative"
                            style={{ backgroundColor: `${color.color}` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div className=" w-full md:flex justify-end pb-10 md:mr-6">
                    {/* <p>Quantity</p> */}
                    <div className="flex flex-row gap-6 ml-10 items-center">
                      <button
                        className="rounded-full h-10 w-10 bg-white flex items-center justify-center"
                        onClick={Decrement}
                      >
                        -
                      </button>
                      {quantity}
                      <button
                        className="rounded-full h-10 w-10 bg-white flex items-center justify-center"
                        onClick={Increment}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex md:justify-center justify-between md:gap-40">
                <button
                  className=" rounded-xl bg-green-300 text-white text-lg font-bold h-14 w-40"
                  onClick={() => {
                    addTocart(
                      _product.id,
                      _product.name,
                      _product.thumbnail,
                      _product.price,
                      quantity
                    );
                  }}
                >
                  Add to Cart
                </button>

                <Link to="/cart">
                  <button
                    className="btn rounded-xl bg-black text-white text-lg font-bold h-14 w-40"
                    // onClick={() => {
                    //   const activeType = image[activeColor].picture;
                    //   const activeTypeId = image[activeColor].id;
                    //   const promising = new Promise((resolve) => {
                    //     resolve(quantity * Number(sellingPrice));
                    //   });
                    //   promising.then((totalItemPrice) => {
                    //     dispatch(
                    //       AddToCart({
                    //         quantity,
                    //         id,
                    //         name,
                    //         activeType,
                    //         activeTypeId,
                    //         sellingPrice,
                    //         originalPrice,
                    //         totalItemPrice,
                    //       })
                    //     );
                    //   });
                    // }}
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="lg:flex  hidden">
        <AboutProduct />
      </div>
      <div>
        <REviews />
      </div>
      <div className="lg:flex  hidden">
        <ProductList2 />
      </div>

      {openModal && (
        <>
          {" "}
          <Modal>
            <motion.div className="  w-96 mx-auto md:w-[36rem] flex flex-col items-center gap-8">
              <motion.button
                className="w-full  font-bold flex justify-end"
                onClick={() => setOpenModal(false)}
                // whileHover={{ scale: 1.2 }}
              >
                X
              </motion.button>
              <img src={SuccessImage} alt="success" height="100" />
              <p className="font-bold">Item Added to Cart</p>
              <div className="flex justify-center w-full gap-4">
                <Link to="/products" passHref>
                  <button className="w-full underline-offset-4 underline">
                    Continue Shopping
                  </button>
                </Link>

                <Link to="/cart" passHref>
                  <button className="btn rounded-xl w-full">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </motion.div>
          </Modal>
        </>
      )}
    </div>
  );
};

export default SIngleProduct;
