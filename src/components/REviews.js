import React from "react";
import { useLocation } from "react-router-dom";
import { product } from "../data/Products";
import AboutProduct from "./AboutProduct";

const REviews = () => {
  const location = useLocation();
  const search = location.search;
  const id = new URLSearchParams(search).get("id");
  //   const picture = new URLSearchParams(search).get("image");
  const _product = product.find((x) => x.id === id);
  console.log(_product);
  return (
    <div>
      <div className="lg:flex hidden container justify-between w-full h-full  mt-32">
        <div className="w-7/12  ">
          {_product.reviews.map((review) => {
            return (
              <div className="w-full my-12 h-60 bg-white rounded-xl">
                <div className=" w-1/2 ml-10 justify-between  flex">
                  <div className="w-24 mt-4 h-24  rounded-full">
                    <img src={review.userImage} alt="" className="w-24 h-22" />
                  </div>
                  <div className="ml-12 mt-4  w-80">
                    <h1 className="font-bold text-xl">{review.userName}</h1>
                    <h1 className="font-bold text-lg">
                      {review.rating}/5 Ratings
                    </h1>
                  </div>
                </div>
                <div className="w-full  h-24 container">
                  <h1 className="ml-8 pt-2 text-lg">{review.detail}</h1>
                </div>
              </div>
            );
          })}
          {/* <div className="w-full my-12 h-60 bg-white rounded-xl"></div>
          <div className="w-full my-12 h-60 bg-white rounded-xl"></div> */}
        </div>
        <div className="w-1/3 rounded-xl mt-10 bg-white h-96 py-60"></div>
      </div>

      {/* <p>smalll</p> */}
      <div className="lg:hidden mt-20">
        <ul
          class="nav nav-tabs flex  md:flex-row  list-none border-b-0 pl-0 mb-4"
          id="tabs-tabFill"
          role="tablist"
        >
          <li class="nav-item flex-auto text-center" role="presentation">
            <a
              href="#tabs-homeFill"
              class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    "
              id="tabs-home-tabFill"
              data-bs-toggle="pill"
              data-bs-target="#tabs-homeFill"
              role="tab"
              aria-controls="tabs-homeFill"
              aria-selected="true"
            >
              Details
            </a>
          </li>
          <li class="nav-item flex-auto text-center" role="presentation">
            <a
              href="#tabs-profileFill"
              class="
      nav-link
      w-full
      block
      font-medium
      text-xs
      leading-tight
      
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    "
              id="tabs-profile-tabFill"
              data-bs-toggle="pill"
              data-bs-target="#tabs-profileFill"
              role="tab"
              aria-controls="tabs-profileFill"
              aria-selected="false"
            >
              Reviews
            </a>
          </li>
          <li class="nav-item flex-auto text-center" role="presentation"></li>
        </ul>
        <div class="tab-content" id="tabs-tabContentFill">
          <div
            class="tab-pane fade show active"
            id="tabs-homeFill"
            role="tabpanel"
            aria-labelledby="tabs-home-tabFill"
          >
            <AboutProduct />
          </div>
          <div
            class="tab-pane fade"
            id="tabs-profileFill"
            role="tabpanel"
            aria-labelledby="tabs-profile-tabFill"
          >
            <div
              className="flex   container justify-between w-full h-full  "
              style={{ height: "1200px" }}
            >
              <div
                className="w-full flex  flex-col justify-between  "
                style={{ height: "1200px" }}
              >
                {_product.reviews.map((review) => {
                  return (
                    <div className="w-full h-96 bg-white rounded-xl ">
                      <div className=" w-full  justify-between  flex">
                        <div className="w-24 mt-4 h-24  rounded-full">
                          <img
                            src={review.userImage}
                            alt=""
                            className="w-24 h-22 ml-4"
                          />
                        </div>
                        <div className="ml-12 mt-4  w-80">
                          <h1 className="font-bold text-xl">
                            {review.userName}
                          </h1>
                          <h1 className="font-bold text-lg">
                            {review.rating}/5 Ratings
                          </h1>
                        </div>
                      </div>
                      <div className="w-full  h-60 container">
                        <h1 className="ml-8 pt-2 text-lg">{review.detail}</h1>
                      </div>
                    </div>
                  );
                })}
                {/* <div className="w-full my-12 h-60 bg-white rounded-xl"></div>
          <div className="w-full my-12 h-60 bg-white rounded-xl"></div> */}
              </div>
              {/* <div className="w-1/3 rounded-xl mt-10 bg-white h-96 py-60"></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default REviews;
