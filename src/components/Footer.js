import React from "react";
import LogoWhite from "../assets/svg/Logo-white.svg";
import Facebook from "../assets/svg/Facebook-mono-icon.svg";
import Twitter from "../assets/svg/twitter-icon.svg";
import Instagram from "../assets/svg/instagram-icon.svg";
const Footer = () => {
  return (
    <div>
      <footer className="lg:flex flex-col bg-footer-bg md:px-12 lg:px-40 px-4 lg:py-16 bg-black  text-white hidden">
        <div className="grid grid-cols-3 container">
          <div>
            <h1 className="text-white text-4xl font-extrabold">Shopwise.</h1>
            <p className="my-4 max-w-[75%]">Parafa, IKorodu Lagos</p>
            <div className="flex flex-row justify-start items-center gap-4">
              <div className="bg-[#FFFFFF20] flex items-center justify-center p-2 rounded-full h-12 w-12">
                <img src={Facebook} alt="Anybuy" height="70" />
              </div>
              <div className="bg-[#FFFFFF20] flex items-center justify-center p-2 rounded-full h-12 w-12">
                <img src={Twitter} alt="Anybuy" height="70" />
              </div>
              <div className="bg-[#FFFFFF20] flex items-center justify-center p-2 rounded-full h-12 w-12">
                <img src={Instagram} alt="Anybuy" height="70" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <nav>
              <p className="text-lg font-extrabold">Pages</p>
              <ul className="flex flex-col gap-4 justify-start items-left mt-6">
                <li>Home</li>
                <li>Shop</li>
                <li>Buy Airtime</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div>
            <p className="text-lg font-extrabold">Newsletter</p>
            <p className="my-4 max-w-[75%]">
              Get more Information about Anypay and more update
            </p>

            <div className="w-full flex flex-row gap-2 items-center bg-white px-1 rounded-lg">
              <input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                className="input text-black w-full border-0 h-20 m-0 py-0"
              />
              <button className="h-14 w-48 text-white font-bold  btn bg-green-400  rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
