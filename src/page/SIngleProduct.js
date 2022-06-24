import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import AboutProduct from "../components/AboutProduct";
import ProductList2 from "../components/ProductList2";
import REviews from "../components/REviews";
import { product } from "../data/Products";
import { addToFav } from "../store/actions/cartaction";

const SIngleProduct = () => {
  const location = useLocation();
  const search = location.search;
  const id = new URLSearchParams(search).get("id");
  //   const picture = new URLSearchParams(search).get("image");
  const _product = product.find((x) => x.id === id);
  const [quantity, setQuantity] = useState(1);
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
    dispatch(addToFav(id, name, photo, price, quantity));
  };
  const power = () => {
    console.log("power");
  };
  return (
    <div>
      <section className="hidden w-screen xl:flex lg:flex">
        <div className="container  h-1/2  ">
          <div className="flex w-full bg-slate-200 justify-between mt-10  ">
            <img
              src={_product.thumbnail}
              alt=""
              className=" w-5/12 rounded-2xl object-cover "
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

      <section className="lg:hidden md:flex">
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
      <div className="lg:flex hidden">
        <AboutProduct />
      </div>
      <div>
        <REviews />
      </div>
      <div className="lg:flex hidden">
        <ProductList2 />
      </div>
      <button onClick={power}>POWER</button>
    </div>
  );
};

export default SIngleProduct;
