import React, { Suspense, useState } from "react";
import { Img, useImage } from "react-image";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signingOut } from "../firebase/config";
import { logout } from "../store/actions/userActions";
import EmptyImage from "../assets/svg/user.svg";
const Navbar = () => {
  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const LoginPage = () => {
    navigate("/login");
  };
  const RegisterPage = () => {
    navigate("/register");
  };
  const dispatch = useDispatch();
  const Authed = useSelector((state) => state.auth);
  // function MyImageComponent() {
  //   const { src } = useImage({bg-slate-500
  //     srcList: Authed.currentUser.photoURL,
  //   });

  //   return <img src={src} className="w-14 h-14 rounded-full" alt="" />;
  // }
  const cartPage = () => {
    navigate("/cart");
  };
  const profile = () => {
    navigate("/profile");
    setShowMenu(false);
  };
  const home = () => {
    navigate("/");
  };
  const cart = useSelector((state) => state.favLists.favItems);
  return (
    <div>
      {" "}
      <div className="bg-gray-900">
        <div>
          <div className="relative">
            {/* For md screen size */}

            {/* For md screen size */}
            {/* For large screens */}
            <div className="dark:bg-gray-900  bg-gray-50 px-6 py-9">
              <div className="container mx-auto flex items-center justify-between">
                <h1
                  className="md:w-2/12 cursor-pointer font-extrabold text-4xl text-gray-800 dark:text-white"
                  aria-label="shopAlon."
                  onClick={home}
                >
                  shopwise.
                </h1>
                <ul className="lg:flex hidden w-8/12 md:hidden items-center justify-center space-x-8">
                  <li>
                    <a
                      href="/"
                      className="dark:text-white text-base text-gray-800 font-bold text-xl  hover:text-green-300"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" text-base text-gray-800 text-xl font-bold  hover:text-green-300"
                    >
                      Mobile Phones
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products"
                      className="dark:text-white text-base text-gray-800 font-bold  text-xl  hover:text-green-300"
                    >
                      Shop
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="dark:text-white text-xl font-bold text-base text-gray-800   hover:text-green-300"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
                {}
                <div className="w-2/5  justify-end flex items-center space-x-4 xl:space-x-8">
                  <div className="relative text-gray-700 transition-colors duration-200 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300">
                    <button
                      onClick={cartPage}
                      aria-label="go to cart"
                      className="text-gray-800 dark:hover:text-gray-300 dark:text-white"
                    >
                      <svg
                        className="fill-stroke"
                        width={28}
                        height={28}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 1L1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8L21 1H5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 5.7998H25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.3346 10.6001C18.3346 11.8731 17.7727 13.094 16.7725 13.9942C15.7723 14.8944 14.4158 15.4001 13.0013 15.4001C11.5868 15.4001 10.2303 14.8944 9.23007 13.9942C8.22987 13.094 7.66797 11.8731 7.66797 10.6001"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {cart.length > 0 && (
                        <span
                          className="absolute font-bold    p-1 text-xs text-white bg-green-500 "
                          style={{
                            borderRadius: "50%",
                            width: "17px",
                            height: "17px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            top: "-2px",
                            left: "-4px",
                          }}
                        >
                          {cart.length}
                        </span>
                      )}
                    </button>
                  </div>
                  <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                    {/* <button
                      aria-label="view favourites"
                      className="text-gray-800 dark:hover:text-gray-300 dark:text-white "
                    >
                      <svg
                        className="fill-stroke font-bold"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button> */}
                    {console.log(Authed)}
                    {Authed.currentUser === null ? (
                      <>
                        <a
                          // onClick={RegisterPage}
                          href="/register"
                          className="w-24 bg-green-300 text-white font-bold h-10 flex justify-center items-center rounded-2xl "
                        >
                          Sign Up
                        </a>
                        <a
                          // onClick={LoginPage}
                          href="/login"
                          className="w-24 bg-green-300 text-white font-bold h-10 flex justify-center items-center rounded-2xl "
                        >
                          Sign In
                        </a>
                      </>
                    ) : (
                      <>
                        {/* <h1>{Authed.currentUser.displayName}</h1> */}
                        {/* <h1 className="">{Authed.currentUser?.photoURL}</h1> */}
                        {/* <div className="rounded-full">
                          <MyImageComponent />
                        </div> */}
                        {/* {console.log(MyImageComponent)} */}
                        {Authed.currentUser?.photoURL == null ? (
                          <>
                            <img
                              className="h-12 w-12"
                              src={EmptyImage}
                              alt="yeah"
                              onClick={profile}
                            />
                          </>
                        ) : (
                          <>
                            <div className="rounded-full">
                              {/* <Suspense>
                                <MyImageComponent />
                              </Suspense> */}
                              <img
                                className="w-14 h-14 rounded-full"
                                src={Authed.currentUser.photoURL}
                                alt="rr"
                                onClick={profile}
                              />
                              {/* <h1>{Authed.currentUser.photoURL}</h1> */}
                            </div>
                          </>
                        )}

                        <button
                          onClick={() => {
                            signingOut();
                            dispatch(logout());
                          }}
                          className="w-24 bg-green-300 text-white font-bold h-10 rounded-2xl "
                        >
                          Logout
                        </button>
                      </>
                    )}
                  </div>
                  <div className="flex lg:hidden">
                    <button
                      aria-label="open menu"
                      onClick={() => setShowMenu(true)}
                      className=" dark:text-white dark:hover:text-gray-300  focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                    >
                      <svg
                        className="fill-stroke"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6H20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 12H20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 18H20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* For small screen */}
            <div
              id="mobile-menu"
              className={`${
                showMenu ? "flex" : "hidden"
              } absolute dark:bg-gray-900 z-20 bg-gray-100 inset-0  flex-col h-80 w-full`}
            >
              <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4">
                <button
                  onClick={() => setShowMenu(false)}
                  aria-label="close menu"
                  className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                >
                  <svg
                    className="fill-stroke text-gray-800 dark:text-white"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4L4 12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 4L12 12"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>{" "}
                <h1
                  className="md:w-2/12 cursor-pointer font-extrabold text-3xl text-gray-800 dark:text-white"
                  aria-label="shopAlon."
                  onClick={home}
                >
                  shopwise.
                </h1>
                {Authed.currentUser === null ? (
                  <>
                    <div></div>
                  </>
                ) : (
                  <>
                    {Authed.currentUser?.photoURL == null ? (
                      <>
                        <img
                          className="h-6 w-6"
                          src={EmptyImage}
                          onClick={profile}
                          alt="yeah"
                        />
                      </>
                    ) : (
                      <>
                        <div className="rounded-full">
                          <img
                            className="w-6 h-6 rounded-full"
                            src={Authed.currentUser.photoURL}
                            alt="rr"
                            onClick={profile}
                          />
                          {/* <h1>{Authed.currentUser.photoURL}</h1> */}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
              <div className="mt-6 p-4">
                <ul className="flex flex-col space-y-6">
                  <li>
                    <a
                      href="/"
                      className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >
                      Home
                      <div>
                        <svg
                          className="fill-stroke text-black dark:text-white"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 3L7.5 6L4.5 9"
                            stroke="currentColor"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >
                      Mobile Phones
                      <div>
                        <svg
                          className="fill-stroke text-black dark:text-white"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 3L7.5 6L4.5 9"
                            stroke="currentColor"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/products"
                      className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >
                      Shop
                      <div>
                        <svg
                          className="fill-stroke text-black dark:text-white"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 3L7.5 6L4.5 9"
                            stroke="currentColor"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >
                      Contact
                      <div>
                        <svg
                          className="fill-stroke text-black dark:text-white"
                          width={12}
                          height={12}
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.5 3L7.5 6L4.5 9"
                            stroke="currentColor"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="h-full flex items-end">
                {Authed.currentUser === null ? (
                  <>
                    <ul className="flex flex-col justify-center items-center space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                      <li>
                        <a
                          href="#"
                          className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                        >
                          <div>
                            <a
                              // onClick={RegisterPage}
                              href="/register"
                              className="w-60 bg-green-300 text-white font-bold h-10 flex justify-center items-center rounded-3xl"
                            >
                              Sign Up
                            </a>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          // onClick={LoginPage}
                          href="/login"
                          className="w-60 bg-green-300 text-white font-bold h-10 flex justify-center items-center rounded-3xl"
                        >
                          Sign In
                        </a>
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <ul className="flex flex-col justify-center items-center space-y-8 bg-gray-50 w-full py-10 p-4 dark:bg-gray-800">
                      <li>
                        <a
                          onClick={() => {
                            signingOut();
                            dispatch(logout());
                            setShowMenu(false);
                          }}
                          href="#"
                          className="dark:text-white text-gray-800 flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                        >
                          <div>
                            <button className="w-60 bg-green-300 text-white font-bold h-10 rounded-3xl">
                              Log Out
                            </button>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
