import React from "react";
import s22 from "../assets/img/s22.png";
const Hero1 = () => {
  return (
    <div>
      <div className="lg:flex hidden">
        <div className="w-full container flex justify-between h-96 rounded-3xl bg-gradient-to-r from-gray-800 via-gray-500 to-gray-900 ">
          <div className="">
            <h1 className="text-white font-bold text-6xl pl-20 pt-20">
              The New{" "}
            </h1>
            <h1 className="text-white font-extrabold text-5xl px-20">
              Samsung S21 Ultra{" "}
            </h1>
            <p className="text-white w-80 font-bold mt-4 ml-20">
              Shoot stunning photos most advanced pro-grade camera yet. Sketch,
              draw and paint with our fastest S Pen yet. Power through the day
            </p>
          </div>
          <div className="  pt-2">
            <img src={s22} alt="" className="" style={{ width: "550px" }} />
          </div>
        </div>
      </div>
      <div className="lg:hidden ">
        <div className="w-full container block justify-between   bg-gradient-to-r from-gray-800 via-gray-500 to-gray-900 ">
          <div className="">
            <h1 className="text-white font-bold text-2xl  pl-4 pt-6">
              The New{" "}
            </h1>
            <h1 className="text-white font-extrabold text-2xl pl-4">
              Samsung S21 Ultra{" "}
            </h1>
            <p className="text-white w-80 font-bold mt-4 ml-4">
              Shoot stunning photos most advanced pro-grade camera yet. Sketch,
              draw and paint with our fastest S Pen yet. Power through the day
            </p>
          </div>
          <div className="flex items-center justify-center pl-20 pt-2">
            <img src={s22} alt="" className=" w-80 relative  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
